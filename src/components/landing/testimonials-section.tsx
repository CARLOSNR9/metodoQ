import Image from "next/image";
import { Quote } from "lucide-react";
import { getInitials, getPublishedTestimonials, type Testimonial } from "@/lib/testimonials";

export type TestimonialsSectionProps = {
  id?: string;
  testimonials?: Testimonial[];
};

function Avatar({ testimonial }: { testimonial: Testimonial }) {
  if (testimonial.photo) {
    return (
      <Image
        src={testimonial.photo}
        alt={`Foto de ${testimonial.name}`}
        width={56}
        height={56}
        className="h-14 w-14 rounded-full object-cover ring-2 ring-white shadow-md"
      />
    );
  }
  return (
    <div
      aria-hidden
      className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-base font-black text-white ring-2 ring-white shadow-md"
    >
      {getInitials(testimonial.name)}
    </div>
  );
}

export function TestimonialsSection({ id = "testimonios", testimonials }: TestimonialsSectionProps) {
  const published = getPublishedTestimonials(testimonials);
  if (published.length === 0) return null;

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
      <div className="absolute -right-[10%] top-[10%] -z-0 h-[50%] w-[40%] rounded-full bg-indigo-100/60 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-blue-600">
            Testimonios
          </div>
          <h2
            id={`${id}-heading`}
            className="text-3xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]"
          >
            Lo que dicen quienes <span className="text-blue-600">ya estudian con Método Q</span>
          </h2>
        </div>

        <ul
          className={`mx-auto mt-14 grid gap-6 ${
            published.length >= 3 ? "lg:grid-cols-3" : published.length === 2 ? "md:grid-cols-2 max-w-4xl" : "max-w-xl"
          }`}
        >
          {published.map((t) => (
            <li key={t.id}>
              <figure className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                <Quote className="h-8 w-8 text-blue-600/25" aria-hidden />
                <blockquote className="mt-4 flex-1 text-[1.05rem] font-medium leading-relaxed text-slate-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                  <Avatar testimonial={t} />
                  <div>
                    <p className="font-black text-slate-900">{t.name}</p>
                    {t.role ? <p className="text-sm font-medium text-slate-500">{t.role}</p> : null}
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
