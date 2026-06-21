import SessionReviewPage from "@/components/demo/session-review-page";

type PageProps = {
  params: Promise<{ resultId: string }>;
};

export default async function HistorialResultPage({ params }: PageProps) {
  const { resultId } = await params;
  return <SessionReviewPage resultId={resultId} />;
}
