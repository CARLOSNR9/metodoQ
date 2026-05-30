/** Metas diarias UCC Pasto · Medicina Interna (plan Pro). */
export const UCC_MI_DAILY_TARGET = 45;
export const UCC_MI_DAILY_STREAK_MIN = 25;
export const UCC_MI_DAILY_BONUS_MAX = 10;
export const UCC_MI_SESSIONS_PER_DAY = 3;

/** Minutos estimados por pregunta (recall activo + lectura). */
export const UCC_MI_MINUTES_PER_QUESTION = 2;

export type UccMiBlockKind = "new" | "review" | "weak";

const UCC_BLOCK_ORDER: UccMiBlockKind[] = ["new", "review", "weak"];

export type UccMiDailyBlock = {
  id: UccMiBlockKind;
  label: string;
  description: string;
  questions: number;
  minutesEstimate: number;
};

export type UccMiWeekModule = {
  weekStart: number;
  weekEnd: number;
  label: string;
  focus: string;
};

/** Plan de 6 meses alineado al informe UCC Pasto MI. */
export const UCC_MI_WEEK_MODULES: UccMiWeekModule[] = [
  { weekStart: 1, weekEnd: 6, label: "Fase 1", focus: "Ciencias básicas, farmacología y epidemiología" },
  { weekStart: 7, weekEnd: 8, label: "Cardiología", focus: "IAM, arritmias, insuficiencia cardíaca" },
  { weekStart: 9, weekEnd: 9, label: "Reumatología", focus: "Artritis, vasculitis, conectivopatías" },
  { weekStart: 10, weekEnd: 10, label: "Gastroenterología", focus: "HDA, cirrosis, EII" },
  { weekStart: 11, weekEnd: 11, label: "Nefrología", focus: "IRA, ERC, electrolitos" },
  { weekStart: 12, weekEnd: 12, label: "Neumología", focus: "EPOC, asma, neumonía" },
  { weekStart: 13, weekEnd: 13, label: "Endocrinología", focus: "DM, tiroides, suprarrenal" },
  { weekStart: 14, weekEnd: 14, label: "Hematología", focus: "Anemias, coagulación, hemato-oncología" },
  { weekStart: 15, weekEnd: 15, label: "Neurología", focus: "ACV, NIHSS, trombolisis" },
  { weekStart: 16, weekEnd: 18, label: "Infectología", focus: "Sepsis, tropicales, antibióticos" },
  { weekStart: 19, weekEnd: 22, label: "Urgencias", focus: "Toxicología, cuidado crítico, geriatría" },
  { weekStart: 23, weekEnd: 24, label: "Simulacros", focus: "Cronometrados + banco de errores" },
];

export function getPlanWeekNumber(planStartedAt: string | null | undefined): number {
  if (!planStartedAt) return 1;
  const start = new Date(planStartedAt);
  if (Number.isNaN(start.getTime())) return 1;
  const now = new Date();
  const diffMs = now.getTime() - start.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return Math.max(1, Math.floor(diffDays / 7) + 1);
}

/** Meta diaria con rampa progresiva (sem. 1–2: 25, 3–6: 35, 7+: 45). */
export function getUccMiRampedDailyTarget(planStartedAt: string | null | undefined): number {
  const week = getPlanWeekNumber(planStartedAt);
  if (week <= 2) return 25;
  if (week <= 6) return 35;
  return UCC_MI_DAILY_TARGET;
}

export function getUccMiWeekModule(planStartedAt: string | null | undefined): UccMiWeekModule {
  const week = getPlanWeekNumber(planStartedAt);
  return (
    UCC_MI_WEEK_MODULES.find((m) => week >= m.weekStart && week <= m.weekEnd) ??
    UCC_MI_WEEK_MODULES[UCC_MI_WEEK_MODULES.length - 1]
  );
}

function scaleBlocks(total: number): Pick<UccMiDailyBlock, "questions">[] {
  if (total <= 25) {
    return [{ questions: 12 }, { questions: 8 }, { questions: 5 }];
  }
  if (total <= 35) {
    return [{ questions: 15 }, { questions: 12 }, { questions: 8 }];
  }
  return [{ questions: 20 }, { questions: 15 }, { questions: 10 }];
}

export function buildUccMiDailyBlocks(
  planStartedAt: string | null | undefined,
  weakTopic?: string | null,
): UccMiDailyBlock[] {
  const module = getUccMiWeekModule(planStartedAt);
  const target = getUccMiRampedDailyTarget(planStartedAt);
  const [blockA, blockB, blockC] = scaleBlocks(target);
  const weakLabel = weakTopic ?? "tus debilidades";

  return [
    {
      id: "new",
      label: "Bloque 1 · Material nuevo",
      description: `${module.label}: ${module.focus}`,
      questions: blockA.questions,
      minutesEstimate: blockA.questions * UCC_MI_MINUTES_PER_QUESTION,
    },
    {
      id: "review",
      label: "Bloque 2 · Repaso espaciado",
      description: "Preguntas de temas anteriores programadas por el algoritmo",
      questions: blockB.questions,
      minutesEstimate: blockB.questions * UCC_MI_MINUTES_PER_QUESTION,
    },
    {
      id: "weak",
      label: "Bloque 3 · Anatomía de errores",
      description: `Refuerzo en ${weakLabel}`,
      questions: blockC.questions,
      minutesEstimate: blockC.questions * UCC_MI_MINUTES_PER_QUESTION,
    },
  ];
}

export function getBlockProgress(
  blocks: UccMiDailyBlock[],
  todayQuestions: number,
): Array<UccMiDailyBlock & { status: "done" | "active" | "pending"; questionsDone: number }> {
  let remaining = todayQuestions;
  let foundActive = false;

  return blocks.map((block) => {
    if (remaining >= block.questions) {
      remaining -= block.questions;
      return { ...block, status: "done" as const, questionsDone: block.questions };
    }
    if (!foundActive && remaining > 0) {
      foundActive = true;
      const done = remaining;
      remaining = 0;
      return { ...block, status: "active" as const, questionsDone: done };
    }
    if (!foundActive && remaining === 0) {
      foundActive = true;
      return { ...block, status: "active" as const, questionsDone: 0 };
    }
    return { ...block, status: "pending" as const, questionsDone: 0 };
  });
}

export type UccBlockProgressItem = UccMiDailyBlock & {
  status: "done" | "active" | "pending";
  questionsDone: number;
};

function previousBlocksComplete(
  blocks: UccMiDailyBlock[],
  blockQuestionCounts: Partial<Record<UccMiBlockKind, number>>,
  index: number,
): boolean {
  return blocks.slice(0, index).every(
    (prev) => (blockQuestionCounts[prev.id] ?? 0) >= prev.questions,
  );
}

function getBlockProgressFromTaggedSessions(
  blocks: UccMiDailyBlock[],
  blockQuestionCounts: Partial<Record<UccMiBlockKind, number>>,
): UccBlockProgressItem[] {
  let activeAssigned = false;

  return blocks.map((block, index) => {
    const unlocked = previousBlocksComplete(blocks, blockQuestionCounts, index);
    const rawDone = unlocked ? (blockQuestionCounts[block.id] ?? 0) : 0;
    const questionsDone = Math.min(rawDone, block.questions);
    const isDone = questionsDone >= block.questions;

    if (isDone) {
      return { ...block, questionsDone, status: "done" as const };
    }

    if (!activeAssigned && unlocked) {
      activeAssigned = true;
      return { ...block, questionsDone, status: "active" as const };
    }

    return { ...block, questionsDone, status: "pending" as const };
  });
}

export function resolveUccBlockProgress(
  blocks: UccMiDailyBlock[],
  todayQuestions: number,
  blockQuestionCounts?: Partial<Record<UccMiBlockKind, number>>,
): UccBlockProgressItem[] {
  const hasTagged =
    blockQuestionCounts &&
    UCC_BLOCK_ORDER.some((id) => (blockQuestionCounts[id] ?? 0) > 0);

  if (hasTagged) {
    return getBlockProgressFromTaggedSessions(blocks, blockQuestionCounts!);
  }

  // El entrenamiento libre suma en todayQuestions, pero no completa bloques estructurados.
  return blocks.map((block, index) => ({
    ...block,
    status: index === 0 ? ("active" as const) : ("pending" as const),
    questionsDone: 0,
  }));
}

export function countCompletedUccBlocks(progress: UccBlockProgressItem[]): number {
  return progress.filter((block) => block.status === "done").length;
}

export type UccDailyMissionState = {
  blockProgress: UccBlockProgressItem[];
  structuredQuestionsDone: number;
  missionComplete: boolean;
  nextSession: ReturnType<typeof getNextBlockSessionCount>;
};

export function computeUccDailyMissionState(
  blocks: UccMiDailyBlock[],
  blockQuestionCounts: Partial<Record<UccMiBlockKind, number>>,
): UccDailyMissionState {
  const blockProgress = resolveUccBlockProgress(blocks, 0, blockQuestionCounts);
  const structuredQuestionsDone = blockProgress.reduce(
    (sum, block) => sum + block.questionsDone,
    0,
  );
  const missionComplete = blockProgress.every((block) => block.status === "done");
  const nextSession = getNextBlockSessionCount(blocks, 0, blockQuestionCounts);

  return {
    blockProgress,
    structuredQuestionsDone,
    missionComplete,
    nextSession,
  };
}

export function canStartUccBlock(
  blocks: UccMiDailyBlock[],
  blockQuestionCounts: Partial<Record<UccMiBlockKind, number>>,
  blockKind: UccMiBlockKind,
): { allowed: true } | { allowed: false; reason: string } {
  const index = UCC_BLOCK_ORDER.indexOf(blockKind);
  if (index <= 0) return { allowed: true };

  for (let i = 0; i < index; i += 1) {
    const prev = blocks[i];
    if ((blockQuestionCounts[prev.id] ?? 0) < prev.questions) {
      return {
        allowed: false,
        reason: `Primero completa ${prev.label.split("·")[0]?.trim() ?? "el bloque anterior"}.`,
      };
    }
  }

  return { allowed: true };
}

export function getNextBlockSessionCount(
  blocks: UccMiDailyBlock[],
  todayQuestions: number,
  blockQuestionCounts?: Partial<Record<UccMiBlockKind, number>>,
): { block: UccMiDailyBlock; count: number } | null {
  const progress = resolveUccBlockProgress(blocks, todayQuestions, blockQuestionCounts);
  const active = progress.find((b) => b.status === "active" || b.status === "pending");
  if (!active) return null;
  const remaining = active.questions - active.questionsDone;
  return { block: active, count: Math.max(1, remaining) };
}

export function isUccMiDayClosed(
  todayQuestions: number,
  dailyTarget: number,
  bonusUsed: number,
): boolean {
  return todayQuestions >= dailyTarget + Math.min(bonusUsed, UCC_MI_DAILY_BONUS_MAX);
}

export function canStartUccMiBonus(
  todayQuestions: number,
  dailyTarget: number,
  bonusAnswered: number,
): boolean {
  return (
    todayQuestions >= dailyTarget &&
    bonusAnswered < UCC_MI_DAILY_BONUS_MAX
  );
}

export function estimateRemainingMinutes(todayQuestions: number, dailyTarget: number): number {
  const remaining = Math.max(0, dailyTarget - todayQuestions);
  return remaining * UCC_MI_MINUTES_PER_QUESTION;
}

export type UccBlockCompletionCTA = {
  completedBlock: UccMiDailyBlock;
  nextBlock: UccMiDailyBlock | null;
  nextHref: string | null;
  dashboardHref: string;
};

export function getUccBlockCompletionCTA(
  completedBlockId: UccMiBlockKind,
  planStartedAt: string | null | undefined,
  weakTopic?: string | null,
): UccBlockCompletionCTA | null {
  const blocks = buildUccMiDailyBlocks(planStartedAt, weakTopic);
  const completedBlock = blocks.find((block) => block.id === completedBlockId);
  if (!completedBlock) return null;

  const completedIndex = UCC_BLOCK_ORDER.indexOf(completedBlockId);
  const nextBlockId =
    completedIndex >= 0 && completedIndex < UCC_BLOCK_ORDER.length - 1
      ? UCC_BLOCK_ORDER[completedIndex + 1]
      : null;
  const nextBlock = nextBlockId
    ? blocks.find((block) => block.id === nextBlockId) ?? null
    : null;

  return {
    completedBlock,
    nextBlock,
    nextHref: nextBlock
      ? `/dashboard/entrenar?block=${nextBlock.id}&count=${nextBlock.questions}`
      : null,
    dashboardHref: "/dashboard#ucc-mission",
  };
}
