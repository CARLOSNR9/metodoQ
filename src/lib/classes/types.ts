import { Timestamp } from "firebase/firestore";

export interface Class {
  id?: string;
  title: string;
  description: string;
  date: Timestamp;
  duration: number; // in minutes
  meetingLink: string;
  recordingLink?: string; // optional
  createdAt?: Timestamp;
}
