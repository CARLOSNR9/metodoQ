import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Instagram, Youtube, Facebook, Mail, Phone } from "lucide-react";
import { SiteFooterAuthLink } from "./site-footer-auth-link";

// Custom TikTok Icon since it's not in older lucide-react versions natively
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#FAFAFA] border-t border-slate-200/60 pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">
          
          {/* Col 1: Brand & Social */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col items-start lg:pr-8">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-[13px] text-slate-500 leading-relaxed font-medium mb-8 max-w-[280px]">
              La plataforma inteligente para médicos que quieren asegurar su residencia estudiando de forma enfocada.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-colors bg-white shadow-sm">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-colors bg-white shadow-sm">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-colors bg-white shadow-sm">
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-colors bg-white shadow-sm">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Plataforma */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] font-black tracking-widest text-slate-900 uppercase">Plataforma</h4>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="#como-funciona" className="text-[13px] text-slate-500 font-medium hover:text-blue-600 transition-colors">Método</Link></li>
              <li><Link href="#universidades" className="text-[13px] text-slate-500 font-medium hover:text-blue-600 transition-colors">Universidades</Link></li>
              <li><Link href="#" className="text-[13px] text-slate-500 font-medium hover:text-blue-600 transition-colors">Preguntas</Link></li>
              <li><Link href="/residente" className="text-[13px] text-slate-500 font-medium hover:text-blue-600 transition-colors">Plan Residente</Link></li>
              <li><Link href="#" className="text-[13px] text-slate-500 font-medium hover:text-blue-600 transition-colors">Doctor Q (IA)</Link></li>
              <li><SiteFooterAuthLink /></li>
            </ul>
          </div>

          {/* Col 3: Recursos */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] font-black tracking-widest text-slate-900 uppercase">Recursos</h4>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="#" className="text-[13px] text-slate-500 font-medium hover:text-blue-600 transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-[13px] text-slate-500 font-medium hover:text-blue-600 transition-colors">Guías de estudio</Link></li>
              <li><Link href="#" className="text-[13px] text-slate-500 font-medium hover:text-blue-600 transition-colors">Casos clínicos</Link></li>
              <li><Link href="#" className="text-[13px] text-slate-500 font-medium hover:text-blue-600 transition-colors">Estadísticas</Link></li>
              <li><Link href="#faq" className="text-[13px] text-slate-500 font-medium hover:text-blue-600 transition-colors">Centro de ayuda</Link></li>
            </ul>
          </div>

          {/* Col 4: Empresa */}
          <div className="flex flex-col gap-5">
            <h4 className="text-[11px] font-black tracking-widest text-slate-900 uppercase">Empresa</h4>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="#" className="text-[13px] text-slate-500 font-medium hover:text-blue-600 transition-colors">Sobre nosotros</Link></li>
              <li><Link href="#" className="text-[13px] text-slate-500 font-medium hover:text-blue-600 transition-colors">Testimonios</Link></li>
              <li><Link href="#" className="text-[13px] text-slate-500 font-medium hover:text-blue-600 transition-colors">Trabaja con nosotros</Link></li>
              <li><Link href="#" className="text-[13px] text-slate-500 font-medium hover:text-blue-600 transition-colors">Términos y condiciones</Link></li>
              <li><Link href="#" className="text-[13px] text-slate-500 font-medium hover:text-blue-600 transition-colors">Política de privacidad</Link></li>
            </ul>
          </div>

          {/* Col 5: Contacto */}
          <div className="flex flex-col gap-5 col-span-2 md:col-span-3 lg:col-span-1 mt-4 lg:mt-0">
            <h4 className="text-[11px] font-black tracking-widest text-slate-900 uppercase">Contacto</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:hola@metodoq.pro" className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                <span className="text-[13px] text-slate-800 font-semibold group-hover:text-blue-600 transition-colors">hola@metodoq.pro</span>
              </a>
              <a href="https://wa.me/573001234567" className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                <span className="text-[13px] text-slate-800 font-semibold group-hover:text-blue-600 transition-colors">+57 300 123 4567</span>
              </a>
              
              <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 border border-slate-200">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-700">Respuesta en menos de 24h</span>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200/60">
          <p className="text-xs font-semibold text-slate-400">
            © {year} Método Q. Todos los derechos reservados.
          </p>
          <p className="text-xs font-semibold text-slate-400 flex items-center gap-1">
            Hecho con <span className="text-red-500">❤️</span> para médicos que sueñan en grande.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
