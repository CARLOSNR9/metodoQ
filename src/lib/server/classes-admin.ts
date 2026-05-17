import { FieldValue, Timestamp } from "firebase-admin/firestore";
import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";

const COLLECTION = "classes";

export type AdminClassInput = {
  title: string;
  description: string;
  dateIso: string;
  durationMinutes: number;
  meetingLink: string;
  recordingLink?: string;
};

export async function adminCreateClass(input: AdminClassInput) {
  const date = new Date(input.dateIso);
  if (Number.isNaN(date.getTime())) {
    throw new Error("Fecha u hora inválida.");
  }

  const ref = await getFirebaseAdminDb().collection(COLLECTION).add({
    title: input.title.trim(),
    description: input.description.trim(),
    date: Timestamp.fromDate(date),
    duration: input.durationMinutes,
    meetingLink: input.meetingLink.trim(),
    recordingLink: input.recordingLink?.trim() || null,
    createdAt: FieldValue.serverTimestamp(),
  });

  return ref.id;
}

export async function adminDeleteClass(classId: string) {
  await getFirebaseAdminDb().collection(COLLECTION).doc(classId).delete();
}

export async function adminListClasses() {
  const snap = await getFirebaseAdminDb()
    .collection(COLLECTION)
    .orderBy("date", "desc")
    .limit(30)
    .get();

  return snap.docs.map((doc) => {
    const data = doc.data();
    const date = data.date?.toDate?.() as Date | undefined;
    return {
      id: doc.id,
      title: String(data.title ?? ""),
      description: String(data.description ?? ""),
      dateIso: date ? date.toISOString() : null,
      duration: Number(data.duration ?? 60),
      meetingLink: String(data.meetingLink ?? ""),
      recordingLink: data.recordingLink ? String(data.recordingLink) : null,
    };
  });
}
