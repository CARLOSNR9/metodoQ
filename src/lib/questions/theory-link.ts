/** Enlace resuelto a la teoría completa de una pregunta (interna o externa). */
export function getTheoryLink(question: {
  id: string;
  theoryUrl?: string;
  theoryContent?: string;
}): string | null {
  const url = question.theoryUrl?.trim();
  if (url) return url;

  const content = question.theoryContent?.trim();
  if (content) return `/teoria/${question.id}`;

  return null;
}

export function isExternalTheoryLink(href: string): boolean {
  return /^https?:\/\//i.test(href);
}
