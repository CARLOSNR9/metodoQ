import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, BookOpen } from "lucide-react";
import { isExternalTheoryLink } from "@/lib/questions/theory-link";
import { getQuestionTheoryPageData } from "@/lib/server/questions-admin";

type PageProps = {
  params: Promise<{ questionId: string }>;
};

export default async function QuestionTheoryPage({ params }: PageProps) {
  const { questionId } = await params;
  const data = await getQuestionTheoryPageData(questionId);

  if (!data) {
    notFound();
  }

  if (
    data.theoryUrl &&
    isExternalTheoryLink(data.theoryUrl) &&
    !data.theoryContent
  ) {
    redirect(data.theoryUrl);
  }

  if (!data.theoryContent) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0A1F44] px-4 py-10 sm:px-6">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm font-semibold text-mq-muted transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al panel
        </Link>

        <header className="mt-8 space-y-2">
          <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-mq-accent">
            <BookOpen className="h-3.5 w-3.5" />
            Teoría de la pregunta
          </p>
          <h1 className="text-2xl font-black text-white sm:text-3xl">{data.topic}</h1>
          {data.examArea ? (
            <p className="text-sm text-mq-muted">{data.examArea}</p>
          ) : null}
        </header>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="whitespace-pre-wrap text-base leading-relaxed text-slate-200">
            {data.theoryContent}
          </div>
        </div>

        {data.theoryUrl && isExternalTheoryLink(data.theoryUrl) ? (
          <p className="mt-6 text-sm text-mq-muted">
            También disponible en{" "}
            <a
              href={data.theoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-mq-accent hover:underline"
            >
              enlace externo
            </a>
            .
          </p>
        ) : null}
      </article>
    </main>
  );
}
