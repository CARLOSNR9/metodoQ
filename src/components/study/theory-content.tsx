"use client";

import {
  AlertTriangle,
  HelpCircle,
  Lightbulb,
  Sparkles,
} from "lucide-react";

type TheoryContentProps = {
  content: string;
  animated?: boolean;
};

type BlockType =
  | "professor-header"
  | "question"
  | "key-insight"
  | "warning"
  | "bullet"
  | "header"
  | "paragraph";

function classifyBlock(block: string): BlockType {
  const trimmed = block.trim();
  const firstLine = trimmed.split("\n")[0]?.trim() ?? "";

  if (/^explicaci[oó]n del profe/i.test(firstLine)) return "professor-header";
  if (firstLine.startsWith("¿")) return "question";
  if (/^clave:/i.test(trimmed)) return "key-insight";
  if (/^trampa:|^contraindic/i.test(firstLine)) return "warning";
  if (/^¿.*trampa/i.test(firstLine)) return "question";

  const lines = trimmed.split("\n");
  const isBulletBlock = lines.every(
    (line) => line.trim().startsWith("-") || line.trim() === "",
  );
  if (isBulletBlock && lines.some((line) => line.trim())) return "bullet";

  const isShortHeader =
    trimmed.length < 90 &&
    !trimmed.includes("\n") &&
    (trimmed.endsWith(":") || /^[A-ZÁÉÍÓÚÑ\s\d\-–—]+$/.test(trimmed));

  if (isShortHeader) return "header";

  return "paragraph";
}

function ProfessorHeader({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-mq-accent/25 bg-gradient-to-r from-mq-accent/12 via-indigo-500/8 to-transparent p-4">
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-mq-accent/10 blur-2xl" />
      <div className="relative flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-mq-accent/15 text-mq-accent">
          <Sparkles className="h-4 w-4" />
        </div>
        <p className="pt-1 text-xs font-black uppercase tracking-[0.14em] text-mq-accent">
          {text.replace(/:$/, "")}
        </p>
      </div>
    </div>
  );
}

function QuestionBlock({ text }: { text: string }) {
  const lines = text.split("\n");
  const title = lines[0]?.trim() ?? text;
  const body = lines.slice(1).join("\n").trim();

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-mq-accent/12 text-mq-accent">
          <HelpCircle className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[15px] font-bold leading-snug text-white">{title}</p>
          {body ? (
            <p className="mt-2 text-[15px] leading-7 text-slate-300">{body}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function KeyInsightBlock({ text }: { text: string }) {
  const body = text.replace(/^clave:\s*/i, "");

  return (
    <div className="rounded-2xl border border-amber-400/25 bg-gradient-to-br from-amber-500/12 to-orange-500/5 p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-amber-300">
          <Lightbulb className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-amber-300">
            Clave de examen
          </p>
          <p className="mt-1.5 text-[15px] leading-7 text-amber-50/90">{body}</p>
        </div>
      </div>
    </div>
  );
}

function WarningBlock({ text }: { text: string }) {
  const lines = text.split("\n");
  const title = lines[0]?.trim() ?? text;
  const body = lines.slice(1).join("\n").trim();

  return (
    <div className="rounded-2xl border border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-rose-500/5 p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-orange-300">
          <AlertTriangle className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[15px] font-bold leading-snug text-orange-100">{title}</p>
          {body ? (
            <p className="mt-2 text-[15px] leading-7 text-orange-50/80">{body}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function BulletBlock({ lines }: { lines: string[] }) {
  return (
    <ul className="space-y-2.5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
      {lines
        .filter((line) => line.trim())
        .map((line) => (
          <li
            key={line}
            className="flex gap-3 text-[15px] leading-relaxed text-slate-200"
          >
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-mq-accent shadow-[0_0_8px_rgb(0_209_255/0.6)]" />
            <span>{line.replace(/^\-\s*/, "")}</span>
          </li>
        ))}
    </ul>
  );
}

function SectionHeader({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 pt-1">
      <span className="h-px flex-1 bg-gradient-to-r from-mq-accent/40 to-transparent" />
      <h3 className="shrink-0 text-[10px] font-black uppercase tracking-[0.18em] text-mq-accent">
        {text.replace(/:$/, "")}
      </h3>
      <span className="h-px flex-1 bg-gradient-to-l from-mq-accent/40 to-transparent" />
    </div>
  );
}

export function TheoryContent({ content }: TheoryContentProps) {
  const blocks = content.split(/\n\n+/).filter(Boolean);

  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        const type = classifyBlock(block);

        switch (type) {
          case "professor-header":
            return (
              <ProfessorHeader
                key={index}
                text={block.split("\n")[0]?.trim() ?? block}
              />
            );
          case "question":
            return <QuestionBlock key={index} text={block} />;
          case "key-insight":
            return <KeyInsightBlock key={index} text={block} />;
          case "warning":
            return <WarningBlock key={index} text={block} />;
          case "bullet":
            return (
              <BulletBlock
                key={index}
                lines={block.split("\n")}
              />
            );
          case "header":
            return (
              <SectionHeader
                key={index}
                text={block.trim()}
              />
            );
          default:
            return (
              <p key={index} className="text-[15px] leading-7 text-slate-200">
                {block}
              </p>
            );
        }
      })}
    </div>
  );
}
