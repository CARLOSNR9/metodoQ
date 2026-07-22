import { NextResponse } from "next/server";
import { adminUpdateQuestionReportStatus } from "@/lib/server/question-reports-admin";

export async function GET(request: Request) {
  const ids = [
    'dr-q-138',
    'dr-q-198',
    'dr-q-202',
    'dr-q-188',
    'dr-q-152',
    'dr-q-187',
    'dr-q-221',
    'dr-q-214',
    'dr-q-255',
    'dr-q-161',
    'ucc-conv-2025-07-19-18',
    'ucc-conv-2025-07-19-24',
    'ucc-conv-2025-07-19-60',
    'ucc-conv-2025-07-19-88',
    'ucc-conv-2025-07-19-95',
    'ucc-conv-2025-07-19-71',
    'ucc-conv-2025-07-19-59',
    'ucc-conv-2025-07-19-58',
    'ucc-conv-2025-07-19-26',
    'umng-diag-003',
    'umng-diag-001'
  ];

  const results: any[] = [];
  
  for (const id of ids) {
    try {
      await adminUpdateQuestionReportStatus(id, "reviewed");
      results.push({ id, status: "success" });
    } catch (e: any) {
      results.push({ id, status: "error", message: e.message });
    }
  }

  return NextResponse.json({ results });
}
