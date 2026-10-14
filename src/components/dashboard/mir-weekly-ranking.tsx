"use client";

import { useEffect, useState } from "react";
import { Loader2, Medal, Users } from "lucide-react";
import { getMirWeeklyRankingAction, type MirWeeklyRankingResult } from "@/app/actions/mir-ranking-actions";
import { getFirebaseAuth } from "@/lib/firebase";
import {
  MIR_RANKING_ALIAS_MAX,
  getDefaultMirRankingAlias,
  sanitizeMirRankingAlias,
  type MirRankingEntry,
} from "@/lib/mir/weekly-ranking";
import {
  getMirRankingSettings,
  saveMirRankingSettings,
  type MirRankingSettings,
} from "@/lib/training/mir-ranking-settings";
import { buildMirWeekSummary } from "@/lib/training/mir-weekly";

/** Pide el ranking de la semana actual (lunes en la hora local del alumno). */
async function fetchMirRanking(): Promise<MirWeeklyRankingResult> {
  try {
    const idToken = (await getFirebaseAuth().currentUser?.getIdToken()) ?? "";
    const mondayKey = buildMirWeekSummary({}).days[0].dateKey;
    return await getMirWeeklyRankingAction({ idToken, mondayKey });
  } catch (error) {
    console.error("No se pudo cargar el ranking semanal MIR.", error);
    return { error: "No se pudo cargar el ranking. Inténtalo más tarde." };
  }
}

const MEDAL_CLASSES = ["text-mq-premium-gold", "text-slate-200", "text-amber-600"];

function RankingRow({ entry }: { entry: MirRankingEntry }) {
  return (
    <li
      className={`flex items-center gap-3 rounded-xl border px-3 py-2 ${
        entry.isMe ? "border-mq-premium-gold/50 bg-mq-premium-gold/[0.08]" : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <span className="flex w-7 shrink-0 justify-center text-sm font-black tabular-nums text-slate-300">
        {entry.rank <= 3 ? (
          <Medal className={`h-5 w-5 ${MEDAL_CLASSES[entry.rank - 1]}`} aria-label={`Puesto ${entry.rank}`} />
        ) : (
          entry.rank
        )}
      </span>
      <span className="min-w-0 flex-1 truncate text-sm font-bold text-white">
        {entry.alias}
        {entry.isMe ? <span className="ml-1.5 text-xs font-semibold text-mq-premium-gold">(tú)</span> : null}
      </span>
      <span className="shrink-0 text-sm font-black tabular-nums text-white">
        {entry.total}
        <span className="ml-1 text-[11px] font-semibold text-slate-400">preg.</span>
      </span>
    </li>
  );
}

function AliasForm({
  initialAlias,
  placeholder,
  submitLabel,
  isSaving,
  onSubmit,
  onCancel,
}: {
  initialAlias: string;
  placeholder: string;
  submitLabel: string;
  isSaving: boolean;
  onSubmit: (alias: string) => void;
  onCancel?: () => void;
}) {
  const [alias, setAlias] = useState(initialAlias);
  const isValid = alias.trim() === "" || sanitizeMirRankingAlias(alias) !== null;

  return (
    <form
      className="flex flex-col gap-2 sm:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        if (isValid) onSubmit(alias);
      }}
    >
      <label className="sr-only" htmlFor="mir-ranking-alias">
        Tu alias en el ranking
      </label>
      <input
        id="mir-ranking-alias"
        value={alias}
        onChange={(event) => setAlias(event.target.value)}
        maxLength={MIR_RANKING_ALIAS_MAX}
        placeholder={placeholder}
        className="min-h-10 flex-1 rounded-xl border border-white/15 bg-white/[0.04] px-3 text-sm text-white placeholder:text-slate-500 focus:border-mq-premium-gold/60 focus:outline-none"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={!isValid || isSaving}
          className="inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-xl bg-mq-premium-gold px-4 text-sm font-black text-[#0A1F44] transition hover:brightness-110 disabled:opacity-50 sm:flex-none"
        >
          {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {submitLabel}
        </button>
        {onCancel ? (
          <button
            type="button"
            onClick={onCancel}
            className="min-h-10 rounded-xl border border-white/15 px-4 text-sm font-bold text-slate-300 hover:border-white/30"
          >
            Cancelar
          </button>
        ) : null}
      </div>
    </form>
  );
}

/**
 * Ranking semanal MIR: voluntario y con alias. Quien no se ha unido ve
 * cuántos compiten y puede unirse; quien está dentro ve el top 10 y su
 * puesto. El cálculo vive en el servidor (getMirWeeklyRankingAction).
 */
export function MirWeeklyRankingCard({ userId }: { userId: string }) {
  const [settings, setSettings] = useState<MirRankingSettings | null>(null);
  const [ranking, setRanking] = useState<MirWeeklyRankingResult | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isEditingAlias, setIsEditingAlias] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const defaultAlias = getDefaultMirRankingAlias(userId);

  useEffect(() => {
    let cancelled = false;
    getMirRankingSettings(userId).then((result) => {
      if (!cancelled) setSettings(result);
    });
    fetchMirRanking().then((result) => {
      if (!cancelled) setRanking(result);
    });
    return () => {
      cancelled = true;
    };
  }, [userId]);

  async function save(next: MirRankingSettings) {
    setIsSaving(true);
    setSaveError(false);
    try {
      await saveMirRankingSettings(userId, next);
      setSettings({ optIn: next.optIn, alias: sanitizeMirRankingAlias(next.alias) });
      setIsEditingAlias(false);
      setRanking(await fetchMirRanking());
    } catch (error) {
      console.error("No se pudo guardar la participación en el ranking MIR.", error);
      setSaveError(true);
    } finally {
      setIsSaving(false);
    }
  }

  if (!settings || !ranking) {
    return <div className="h-48 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />;
  }

  const shownAlias = settings.alias ?? defaultAlias;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Ranking semanal</p>
          <h3 className="mt-0.5 text-lg font-black text-white">Preguntas respondidas esta semana</h3>
        </div>
        {"activeCount" in ranking ? (
          <p className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-300">
            <Users className="h-3.5 w-3.5 text-mq-premium-gold" aria-hidden />
            {ranking.activeCount} {ranking.activeCount === 1 ? "alumno compite" : "alumnos compiten"}
          </p>
        ) : null}
      </div>

      {"error" in ranking ? (
        <p className="mt-4 text-sm text-slate-400">{ranking.error}</p>
      ) : !settings.optIn || !ranking.joined ? (
        <div className="mt-4 space-y-3">
          <p className="text-sm text-slate-300">
            Únete para ver el top 10 y tu puesto. Se reinicia cada lunes y solo cuentan las preguntas de la semana.
          </p>
          <AliasForm
            initialAlias={settings.alias ?? ""}
            placeholder={defaultAlias}
            submitLabel="Unirme al ranking"
            isSaving={isSaving}
            onSubmit={(alias) => void save({ optIn: true, alias: alias.trim() ? alias : null })}
          />
          <p className="text-[11px] text-slate-500">
            Los demás solo verán tu alias y tu número de preguntas. Si lo dejas vacío, saldrás como «{defaultAlias}».
            Puedes salir cuando quieras.
          </p>
        </div>
      ) : (
        <div className="mt-4">
          {ranking.top.length === 0 ? (
            <p className="rounded-xl border border-dashed border-white/15 p-5 text-center text-sm text-slate-400">
              Nadie ha respondido todavía esta semana. ¡Sé el primero!
            </p>
          ) : (
            <ol className="space-y-1.5">
              {ranking.top.map((entry) => (
                <RankingRow key={`${entry.rank}-${entry.alias}`} entry={entry} />
              ))}
              {ranking.me && !ranking.top.some((entry) => entry.isMe) ? (
                <>
                  <li aria-hidden className="py-0.5 text-center text-xs text-slate-600">
                    ···
                  </li>
                  <RankingRow entry={ranking.me} />
                </>
              ) : null}
            </ol>
          )}
          {!ranking.me ? (
            <p className="mt-3 text-xs text-slate-400">
              Aún no sumas esta semana: responde preguntas y aparecerás como «{shownAlias}».
            </p>
          ) : null}

          {isEditingAlias ? (
            <div className="mt-4">
              <AliasForm
                initialAlias={settings.alias ?? ""}
                placeholder={defaultAlias}
                submitLabel="Guardar alias"
                isSaving={isSaving}
                onSubmit={(alias) => void save({ optIn: true, alias: alias.trim() ? alias : null })}
                onCancel={() => setIsEditingAlias(false)}
              />
            </div>
          ) : (
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
              <span className="text-slate-500">
                Participas como <span className="font-bold text-slate-300">{shownAlias}</span>
              </span>
              <button
                type="button"
                onClick={() => setIsEditingAlias(true)}
                className="font-bold text-mq-premium-gold hover:brightness-110"
              >
                Cambiar alias
              </button>
              <button
                type="button"
                onClick={() => void save({ optIn: false, alias: settings.alias })}
                disabled={isSaving}
                className="font-bold text-slate-400 hover:text-white disabled:opacity-50"
              >
                Salir del ranking
              </button>
            </div>
          )}
        </div>
      )}

      {saveError ? (
        <p className="mt-3 text-xs font-semibold text-rose-300">No se pudo guardar. Inténtalo de nuevo.</p>
      ) : null}
    </div>
  );
}
