import { describe, expect, it } from "vitest";
import { UCC_CONV_2025_06_21_QUESTIONS } from "@/data/ucc-conv-2025-06-21-questions";
import { UCC_CONV_2025_07_05_QUESTIONS } from "@/data/ucc-conv-2025-07-05-questions";
import { UCC_CONV_2025_07_19_QUESTIONS } from "@/data/ucc-conv-2025-07-19-questions";
import { UCC_CONV_2026_07_26_QUESTIONS } from "@/data/ucc-conv-2026-07-26-questions";
import { UCC_CONV_2026_08_09_QUESTIONS } from "@/data/ucc-conv-2026-08-09-questions";
import { UCC_CONV_2026_08_23_QUESTIONS } from "@/data/ucc-conv-2026-08-23-questions";
import { UCC_CONV_2026_09_06_QUESTIONS } from "@/data/ucc-conv-2026-09-06-questions";
import { UCC_CONV_2026_09_20_QUESTIONS } from "@/data/ucc-conv-2026-09-20-questions";

const UCC_EDITIONS = {
  "UCC-2025-06-21": UCC_CONV_2025_06_21_QUESTIONS,
  "UCC-2025-07-05": UCC_CONV_2025_07_05_QUESTIONS,
  "UCC-2025-07-19": UCC_CONV_2025_07_19_QUESTIONS,
  "UCC-2026-07-26": UCC_CONV_2026_07_26_QUESTIONS,
  "UCC-2026-08-09": UCC_CONV_2026_08_09_QUESTIONS,
  "UCC-2026-08-23": UCC_CONV_2026_08_23_QUESTIONS,
  "UCC-2026-09-06": UCC_CONV_2026_09_06_QUESTIONS,
  "UCC-2026-09-20": UCC_CONV_2026_09_20_QUESTIONS,
};

describe("retroalimentación de las convocatorias UCC", () => {
  it.each(Object.entries(UCC_EDITIONS))(
    "%s: cada opción incorrecta explica por qué es incorrecta",
    (_edition, questions) => {
      expect(questions.length).toBeGreaterThan(0);
      for (const question of questions) {
        expect(question.explanation.trim().length, question.id).toBeGreaterThan(60);
        expect(question.keyPoints.length, question.id).toBeGreaterThan(0);
        for (const option of question.options) {
          if (option.id === question.correctOptionId) continue;
          expect(option.incorrectFeedback?.trim(), `${question.id} opción ${option.id}`).toBeTruthy();
        }
      }
    },
  );
});
