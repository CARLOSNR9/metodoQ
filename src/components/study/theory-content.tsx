"use client";

import {
  AlertTriangle,
  HelpCircle,
  Lightbulb,
  Sparkles,
} from "lucide-react";

type TheoryContentProps = {
  content: string;
};

type BlockType =
  | "professor-header"
  | "question"
  | "key-insight"
  | "warning"
  | "bullet"
  | "header"
  | "paragraph";

function isBlockStarter(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed) return false;
  if (/^explicaci[oó]n del profe/i.test(trimmed)) return true;
  if (trimmed.startsWith("¿")) return true;
  if (/^clave:/i.test(trimmed)) return true;
  if (/^trampa:/i.test(trimmed)) return true;
  if (/^contraindic/i.test(trimmed)) return true;
  if (/^\d+\.\s/.test(trimmed)) return true;
  if (trimmed.length < 80 && trimmed.endsWith(":") && !trimmed.startsWith("-")) {
    return true;
  }
  if (
    trimmed.length < 80 &&
    /^[A-ZÁÉÍÓÚÑ0-9\s\d\-–—]+$/.test(trimmed) &&
    !trimmed.startsWith("-")
  ) {
    return true;
  }
  return false;
}

/** Parte el texto en bloques lógicos aunque use saltos de línea simples. */
function splitIntoBlocks(content: string): string[] {
  const trimmed = content.trim();
  if (!trimmed) return [];

  if (/\n\s*\n/.test(trimmed)) {
    return trimmed
      .split(/\n\s*\n+/)
      .map((block) => block.trim())
      .filter(Boolean);
  }

  const lines = trimmed.split("\n").map((line) => line.trim()).filter(Boolean);
  const blocks: string[] = [];
  let buffer: string[] = [];

  const flush = () => {
    if (buffer.length > 0) {
      blocks.push(buffer.join("\n"));
      buffer = [];
    }
  };

  for (const line of lines) {
    const isBullet = line.startsWith("-");

    if (isBlockStarter(line)) {
      flush();
      buffer.push(line);
      continue;
    }

    if (isBullet) {
      const prev = buffer[buffer.length - 1];
      if (buffer.length === 0 || prev?.startsWith("-") || prev?.startsWith("¿")) {
        buffer.push(line);
      } else {
        flush();
        buffer.push(line);
      }
      continue;
    }

    if (buffer.length === 0) {
      buffer.push(line);
      continue;
    }

    const prev = buffer[buffer.length - 1];
    if (
      prev?.startsWith("-") ||
      prev?.startsWith("¿") ||
      prev?.endsWith(":") ||
      /^explicaci[oó]n del profe/i.test(prev ?? "")
    ) {
      buffer.push(line);
    } else {
      flush();
      buffer.push(line);
    }
  }

  flush();
  return blocks.length > 0 ? blocks : [trimmed];
}

function classifyBlock(block: string): BlockType {
  const trimmed = block.trim();
  const firstLine = trimmed.split("\n")[0]?.trim() ?? "";

  if (/^explicaci[oó]n del profe/i.test(firstLine)) return "professor-header";
  if (firstLine.startsWith("¿")) return "question";
  if (/^clave:/i.test(trimmed)) return "key-insight";
  if (/^trampa:|^contraindic/i.test(firstLine)) return "warning";

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

function splitHeaderBody(block: string): { header: string; body: string } {
  const lines = block.split("\n");
  const header = lines[0]?.trim() ?? block;
  const body = lines.slice(1).join("\n").trim();
  return { header, body };
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
  const { header, body } = splitHeaderBody(text);
  const bodyLines = body.split("\n").filter(Boolean);
  const bulletLines = bodyLines.filter((line) => line.trim().startsWith("-"));
  const proseLines = bodyLines.filter((line) => !line.trim().startsWith("-"));

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-mq-accent/12 text-mq-accent">
          <HelpCircle className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1 space-y-3">
          <p className="text-[15px] font-bold leading-snug text-slate-900">{header}</p>
          {proseLines.length > 0 ? (
            <p className="text-[15px] leading-7 text-slate-700">{proseLines.join("\n")}</p>
          ) : null}
          {bulletLines.length > 0 ? (
            <ul className="space-y-2">
              {bulletLines.map((line) => (
                <li key={line} className="flex gap-3 text-[15px] leading-relaxed text-slate-700">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-mq-accent" />
                  <span>{line.replace(/^\-\s*/, "")}</span>
                </li>
              ))}
            </ul>
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
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-amber-600">
          <Lightbulb className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-amber-700">
            Clave de examen
          </p>
          <p className="mt-1.5 text-[15px] leading-7 text-amber-900">{body}</p>
        </div>
      </div>
    </div>
  );
}

function WarningBlock({ text }: { text: string }) {
  const { header, body } = splitHeaderBody(text);

  return (
    <div className="rounded-2xl border border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-rose-500/5 p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-orange-600">
          <AlertTriangle className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[15px] font-bold leading-snug text-orange-900">{header}</p>
          {body ? (
            <p className="mt-2 whitespace-pre-wrap text-[15px] leading-7 text-orange-900">
              {body}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function BulletBlock({ lines }: { lines: string[] }) {
  return (
    <ul className="space-y-2.5 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
      {lines
        .filter((line) => line.trim())
        .map((line) => (
          <li
            key={line}
            className="flex gap-3 text-[15px] leading-relaxed text-slate-700"
          >
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-mq-accent shadow-[0_0_8px_rgb(0_209_255/0.3)]" />
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

function renderBlock(block: string, index: number) {
  const type = classifyBlock(block);

  switch (type) {
    case "professor-header": {
      const { header, body } = splitHeaderBody(block);
      return (
        <div key={index} className="space-y-4">
          <ProfessorHeader text={header} />
          {body ? <TheoryContent content={body} /> : null}
        </div>
      );
    }
    case "question":
      return <QuestionBlock key={index} text={block} />;
    case "key-insight":
      return <KeyInsightBlock key={index} text={block} />;
    case "warning":
      return <WarningBlock key={index} text={block} />;
    case "bullet":
      return <BulletBlock key={index} lines={block.split("\n")} />;
    case "header": {
      const { header, body } = splitHeaderBody(block);
      if (!body) {
        return <SectionHeader key={index} text={header} />;
      }
      return (
        <div key={index} className="space-y-3">
          <SectionHeader text={header} />
          <p className="text-[15px] leading-7 text-slate-700">{body}</p>
        </div>
      );
    }
    default:
      return (
        <p key={index} className="whitespace-pre-wrap text-[15px] leading-7 text-slate-700">
          {block}
        </p>
      );
  }
}

export function TheoryContent({ content }: TheoryContentProps) {
  const trimmed = content.trim();
  if (!trimmed) {
    return (
      <p className="text-sm italic text-mq-muted">
        No hay explicación guardada para esta nota.
      </p>
    );
  }

  const blocks = splitIntoBlocks(trimmed);

  return <div className="space-y-4">{blocks.map(renderBlock)}</div>;
}
