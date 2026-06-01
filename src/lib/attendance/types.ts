export type AttendanceStatus = "present" | "absent";

export type ClassAttendanceRecord = {
  classId: string;
  studentId: string;
  professorId: string;
  courseId: string | null;
  status: AttendanceStatus;
  classTitle: string;
  classDateIso: string;
  markedAt: string | null;
};

export type StudentAttendanceSummary = {
  uid: string;
  email: string;
  displayName: string;
  presentCount: number;
  absentCount: number;
  totalMarkedSessions: number;
  recentAbsences: {
    classId: string;
    classTitle: string;
    classDateIso: string;
  }[];
};
