const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Load environment variables manually
const envPath = path.resolve('.env.local');
if (fs.existsSync(envPath)) {
  const envConfig = require('dotenv').parse(fs.readFileSync(envPath));
  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
}

const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

if (!serviceAccountKey) {
  console.error("FIREBASE_SERVICE_ACCOUNT_KEY not found in .env.local");
  process.exit(1);
}

let serviceAccount;
try {
  serviceAccount = JSON.parse(serviceAccountKey);
} catch (error) {
  console.error("Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY as JSON", error);
  process.exit(1);
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function resolveReports() {
  const questionIds = [
    'ucc-conv-2025-07-19-18',
    'ucc-conv-2025-07-19-24',
    'ucc-conv-2025-07-19-60',
    'ucc-conv-2025-07-19-88',
    'ucc-conv-2025-07-19-95'
  ];
  
  let updated = 0;
  
  for (const qId of questionIds) {
    try {
      const reportsRef = db.collection('question_reports').where('questionId', '==', qId);
      const snapshot = await reportsRef.get();
      
      if (snapshot.empty) {
        console.log(`No reports found for ${qId}`);
        continue;
      }
      
      const batch = db.batch();
      snapshot.forEach(doc => {
        batch.update(doc.ref, { 
          status: 'reviewed',
          updatedAt: admin.firestore.FieldValue.serverTimestamp()
        });
      });
      
      await batch.commit();
      console.log(`Updated reports for ${qId}`);
      updated++;
    } catch (e) {
      console.error(`Error updating reports for ${qId}:`, e);
    }
  }
  
  console.log(`Total questions resolved: ${updated}`);
  process.exit(0);
}

resolveReports();
