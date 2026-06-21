import { UCC_CONV_2025_06_21_3280_LECTURA_QUESTIONS } from "@/data/ucc-conv-2025-06-21-3280-lectura-questions";
import { UCC_CONV_2025_06_21_EPI_QUESTIONS } from "@/data/ucc-conv-2025-06-21-epidemiologia-questions";
import { UCC_CONV_2025_06_21_GYN_QUESTIONS } from "@/data/ucc-conv-2025-06-21-ginecologia-questions";
import { UCC_CONV_2025_06_21_MI_QUESTIONS } from "@/data/ucc-conv-2025-06-21-mi-questions";
import { UCC_CONV_2025_06_21_PEDIATRICS_QUESTIONS } from "@/data/ucc-conv-2025-06-21-pediatria-questions";
import { UCC_CONV_2025_06_21_SURGERY_QUESTIONS } from "@/data/ucc-conv-2025-06-21-cirugia-questions";
import { UCC_CONV_2025_06_21_URO_REUMA_BIO_QUESTIONS } from "@/data/ucc-conv-2025-06-21-uro-reuma-bio-questions";
import type { TrainingQuestion } from "@/lib/questions/types";

/** Banco completo — Convocatoria UCC Edición #1 (21 jun 2025) · 100 ítems fijos (#01–#100). */
export const UCC_CONV_2025_06_21_QUESTIONS: TrainingQuestion[] = [
  ...UCC_CONV_2025_06_21_MI_QUESTIONS,
  ...UCC_CONV_2025_06_21_PEDIATRICS_QUESTIONS,
  ...UCC_CONV_2025_06_21_GYN_QUESTIONS,
  ...UCC_CONV_2025_06_21_SURGERY_QUESTIONS,
  ...UCC_CONV_2025_06_21_URO_REUMA_BIO_QUESTIONS,
  ...UCC_CONV_2025_06_21_EPI_QUESTIONS,
  ...UCC_CONV_2025_06_21_3280_LECTURA_QUESTIONS,
];
