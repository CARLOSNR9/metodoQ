"use server";

import { FieldValue } from "firebase-admin/firestore";
import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { sendResidenteApplicationEmails } from "@/lib/server/email/send";

export type ResidenteApplicationInput = {
  name: string;
  email: string;
  phone: string;
  university: string;
  message: string;
  userId?: string | null;
};

export async function submitResidenteApplicationAction(input: ResidenteApplicationInput) {
  const name = input.name.trim();
  const email = input.email.trim();
  const phone = input.phone.trim();
  const university = input.university.trim();
  const message = input.message.trim();

  if (!name || !email || !phone || !university) {
    return { error: "Completa todos los campos obligatorios." };
  }

  try {
    await getFirebaseAdminDb().collection("residente_applications").add({
      name,
      email,
      phone,
      university,
      message,
      userId: input.userId ?? null,
      status: "pending",
      createdAt: FieldValue.serverTimestamp(),
    });

    await sendResidenteApplicationEmails({ name, email, phone, university, message });

    return { success: true };
  } catch (e) {
    console.error("residente application", e);
    return { error: "No se pudo enviar la postulación." };
  }
}
