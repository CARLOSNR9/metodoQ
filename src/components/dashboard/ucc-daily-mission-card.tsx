"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import {
  ArrowRight,
  CheckCircle2,
  Circle,
  Lock,
  Moon,
  Target,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { getFirebaseDb } from "@/lib/firebase";
import { getUserDemoResults, type DemoResultItem } from "@/lib/results";
import {
  aggregateTodayUccBlockQuestions,
  getTodayQuestionsCount,
} from "@/lib/training/daily-activity";
import { getDailyGoalForProfile } from "@/lib/training/daily-goals";
import {
  buildUccMiDailyBlocks,
  countCompletedUccBlocks,
  estimateRemainingMinutes,
  getNextBlockSessionCount,
  getPlanWeekNumber,
  getUccMiWeekModule,
  resolveUccBlockProgress,
  type UccBlockProgressItem,
} from "@/lib/training/ucc-mi-daily-plan";
import { getTodayTrainingStatus } from "@/lib/training/usage";

type UccDailyMissionCardProps = {
  userId: string;
  planStartedAt?: string | null;
  weakTopic?: string | null;
};

type UserMissionProfile = {
  plan?: string | null;
  goalUniversity?: string | null;
  goalSpecialty?: string | null;
  weaknesses?: string[];
};

function buildBlockHref(blockId: string, count: number, bonus = false): string {
  const params = new URLSearchParams();
  params.set("block", blockId);
  params.set("count", String(count));
  if (bonus) params.set("mode", "bonus");
  return `/dashboard/entrenar?${params.toString()}`;
}

function UccBlockStepper({ blockProgress }: { blockProgress: UccBlockProgressItem[] }) {
  const completedCount = countCompletedUccBlocks(blockProgress);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-bold uppercase tracking-widest text-mq-muted">
          Bloques de hoy
        </p>
        <p className="text-xs font-bold text-white">
          {completedCount}/{blockProgress.length} completados
        </p>
      </div>

      <ol className="flex items-start">
        {blockProgress.map((block, index) => (
          <li key={block.id} className="flex flex-1 items-center">
            <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                  block.status === "done"
                    ? "border-emerald-400 bg-emerald-500/20 text-emerald-300"
                    : block.status === "active"
                      ? "border-mq-accent bg-mq-accent/15 text-mq-accent shadow-[0_0_14px_rgba(0,209,255,0.35)]"
                      : "border-white/15 bg-white/[0.03] text-white/25"
                }`}
              >
                {block.status === "done" ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <span className="text-xs font-black">{index + 1}</span>
                )}
              </div>
              <p
                className={`max-w-[88px] text-center text-[9px] font-bold uppercase leading-tight tracking-wide ${
                  block.status === "done"
                    ? "text-emerald-300"
                    : block.status === "active"
                      ? "text-mq-accent"
                      : "text-white/30"
                }`}
              >
                {block.label.split("·")[0]?.trim()}
              </p>
            </div>
            {index < blockProgress.length - 1 ? (
              <div
                className={`mb-6 h-0.5 min-w-[12px] flex-1 ${
                  block.status === "done" ? "bg-emerald-500/40" : "bg-white/10"
                }`}
              />
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

function UccBlockListItem({ block }: { block: UccBlockProgressItem }) {
  return (
    <li
      className={`flex items-start gap-3 rounded-xl border p-4 ${
        block.status === "done"
          ? "border-emerald-500/25 bg-emerald-500/5"
          : block.status === "active"
            ? "border-mq-accent/30 bg-mq-accent/5"
            : "border-white/10 bg-white/[0.02]"
      }`}
    >
      {block.status === "done" ? (
        <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-400" />
      ) : block.status === "active" ? (
        <Zap size={20} className="mt-0.5 shrink-0 text-mq-accent" />
      ) : (
        <Circle size={20} className="mt-0.5 shrink-0 text-white/30" />
      )}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-bold text-white">{block.label}</p>
          {block.status === "done" ? (
            <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
              Completado
            </span>
          ) : block.status === "active" ? (
            <span className="rounded-full bg-mq-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-mq-accent">
              Siguiente
            </span>
          ) : null}
        </div>
        <p className="mt-0.5 text-sm text-mq-muted">{block.description}</p>
        <p className="mt-1 text-xs font-medium text-mq-accent">
          {block.questionsDone}/{block.questions} preg · ~{block.minutesEstimate} min
        </p>
      </div>
    </li>
  );
}

export function UccDailyMissionCard({
  userId,
  planStartedAt,
  weakTopic,
}: UccDailyMissionCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [todayQuestions, setTodayQuestions] = useState(0);
  const [todayResults, setTodayResults] = useState<DemoResultItem[]>([]);
  const [resolvedWeakTopic, setResolvedWeakTopic] = useState(weakTopic ?? null);
  const [dayClosed, setDayClosed] = useState(false);
  const [bonusAvailable, setBonusAvailable] = useState(false);
  const [profile, setProfile] = useState<UserMissionProfile | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setIsLoading(true);
      try {
        const [results, userSnap] = await Promise.all([
          getUserDemoResults(userId),
          getDoc(doc(getFirebaseDb(), "users", userId)),
        ]);
        if (!mounted) return;

        const userData = (userSnap.data() as UserMissionProfile | undefined) ?? {};
        setProfile(userData);
        setResolvedWeakTopic(weakTopic ?? userData.weaknesses?.[0] ?? null);

        const count = getTodayQuestionsCount(results);
        setTodayQuestions(count);
        setTodayResults(results);

        const status = await getTodayTrainingStatus(userId, userData, planStartedAt);
        if (!mounted) return;
        setDayClosed(status.dayClosed);
        setBonusAvailable(status.bonusAvailable);
      } catch (error) {
        console.error("No se pudo cargar la misión diaria UCC.", error);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    void load();
    return () => {
      mounted = false;
    };
  }, [userId, planStartedAt, weakTopic]);

  const goal = useMemo(
    () => getDailyGoalForProfile(profile, planStartedAt),
    [profile, planStartedAt],
  );

  const blocks = useMemo(
    () => buildUccMiDailyBlocks(planStartedAt, resolvedWeakTopic),
    [planStartedAt, resolvedWeakTopic],
  );

  const blockQuestionCounts = useMemo(
    () => aggregateTodayUccBlockQuestions(todayResults),
    [todayResults],
  );

  const blockProgress = useMemo(
    () => resolveUccBlockProgress(blocks, todayQuestions, blockQuestionCounts),
    [blocks, todayQuestions, blockQuestionCounts],
  );

  const nextSession = useMemo(
    () => getNextBlockSessionCount(blocks, todayQuestions, blockQuestionCounts),
    [blocks, todayQuestions, blockQuestionCounts],
  );

  const completedBlocksCount = useMemo(
    () => countCompletedUccBlocks(blockProgress),
    [blockProgress],
  );

  const weekModule = useMemo(() => getUccMiWeekModule(planStartedAt), [planStartedAt]);
  const weekNumber = useMemo(() => getPlanWeekNumber(planStartedAt), [planStartedAt]);
  const progressPercent = Math.min(
    100,
    Math.round((todayQuestions / goal.dailyTarget) * 100),
  );
  const remainingMinutes = estimateRemainingMinutes(todayQuestions, goal.dailyTarget);
  const missionComplete = todayQuestions >= goal.dailyTarget;

  return (
    <section
      id="ucc-mission"
      className="relative overflow-hidden rounded-[2rem] border border-mq-accent/30 bg-gradient-to-br from-mq-accent/[0.08] via-mq-surface to-transparent p-8 sm:p-10"
    >
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-mq-accent/10 blur-[80px]" />

      <div className="relative z-10 space-y-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-mq-accent/30 bg-mq-accent/10 px-3 py-1">
              <Target size={14} className="text-mq-accent" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-mq-accent">
                Misión del día · UCC Pasto MI
              </span>
            </div>
            <h2 className="text-3xl font-black text-white">
              {missionComplete ? "Día cerrado" : "Tu entrenamiento de hoy"}
            </h2>
            <p className="max-w-xl text-sm text-mq-muted">
              Semana {weekNumber} · {weekModule.label}: {weekModule.focus}
              {!isLoading && completedBlocksCount > 0 ? (
                <span className="text-emerald-300">
                  {" "}
                  · {completedBlocksCount}/3 bloques listos
                </span>
              ) : null}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-mq-muted">
              Progreso
            </p>
            <p className="text-3xl font-black text-white">
              {isLoading ? "…" : `${todayQuestions}/${goal.dailyTarget}`}
            </p>
            <p className="text-xs text-mq-muted">
              {missionComplete
                ? "Meta cumplida"
                : `~${remainingMinutes} min restantes`}
            </p>
          </div>
        </div>

        {!isLoading ? (
          <UccBlockStepper blockProgress={blockProgress} />
        ) : (
          <div className="animate-pulse text-sm text-mq-muted">Calculando bloques…</div>
        )}

        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-mq-muted">
            <span>Preguntas del día</span>
            <span>{isLoading ? "…" : `${progressPercent}%`}</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-white/5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              className={`h-full rounded-full ${
                missionComplete
                  ? "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                  : "bg-mq-accent shadow-[0_0_12px_rgba(0,209,255,0.4)]"
              }`}
            />
          </div>
          <p className="text-xs text-mq-muted">
            Racha mínima: {goal.streakMinimum} preg · Meta perfecta: {goal.dailyTarget} preg
          </p>
        </div>

        {missionComplete ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                  <Moon size={24} />
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-black text-white">
                    Completaste tu misión de {goal.dailyTarget} preguntas
                  </p>
                  <p className="text-sm leading-relaxed text-emerald-100/90">
                    Descansa. Mañana el algoritmo te programará repaso espaciado de lo que
                    practicaste hoy. El descanso consolida la memoria.
                  </p>
                  {bonusAvailable && (
                    <Link
                      href={buildBlockHref("weak", goal.bonusMax, true)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-emerald-200 underline-offset-2 hover:underline"
                    >
                      Opcional: {goal.bonusMax} preguntas bonus sin presión
                      <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <ul className="space-y-3">
              {blockProgress.map((block) => (
                <UccBlockListItem key={block.id} block={block} />
              ))}
            </ul>
          </motion.div>
        ) : (
          <ul className="space-y-3">
            {isLoading ? (
              <li className="animate-pulse text-sm text-mq-muted">Calculando bloques…</li>
            ) : (
              blockProgress.map((block) => (
                <UccBlockListItem key={block.id} block={block} />
              ))
            )}
          </ul>
        )}

        <div className="flex flex-col gap-3 sm:flex-row">
          {dayClosed && !bonusAvailable ? (
            <div className="flex h-14 flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 text-sm font-bold text-mq-muted">
              <Lock size={18} />
              Entrenamiento cerrado hasta mañana
            </div>
          ) : nextSession && !missionComplete ? (
            <Link
              href={buildBlockHref(nextSession.block.id, nextSession.count)}
              className="mq-premium-glow group inline-flex h-14 flex-1 items-center justify-center gap-3 rounded-2xl bg-mq-accent px-8 text-sm font-black text-mq-accent-foreground transition-all hover:scale-[1.02] active:scale-95"
            >
              <Zap size={18} fill="currentColor" />
              {blockProgress.find((b) => b.id === nextSession.block.id)?.status === "active" &&
              (blockProgress.find((b) => b.id === nextSession.block.id)?.questionsDone ?? 0) > 0
                ? "Continuar bloque"
                : `Iniciar ${nextSession.block.label.split("·")[0].trim()}`}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          ) : bonusAvailable ? (
            <Link
              href={buildBlockHref("weak", goal.bonusMax, true)}
              className="inline-flex h-14 flex-1 items-center justify-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 text-sm font-bold text-emerald-100 transition hover:bg-emerald-500/20"
            >
              Modo bonus · hasta {goal.bonusMax} preg
            </Link>
          ) : null}

          {!missionComplete && (
            <Link
              href="/dashboard/entrenar"
              className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 text-sm font-bold text-white/80 transition hover:bg-white/10"
            >
              Entrenamiento libre
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
