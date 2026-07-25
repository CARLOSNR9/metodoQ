"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, Zap, ArrowRight, Bot } from "lucide-react";
import Link from "next/link";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
}

export function QBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "¡Hola! Soy tu Tutor IA personal de Método Q. ¿En qué te puedo ayudar hoy con tus estudios?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [credits, setCredits] = useState(5); // Simulate 5 free credits
  const maxCredits = 5;
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = () => {
    if (!inputValue.trim() || credits <= 0) return;

    const userMessage: Message = { id: Date.now().toString(), sender: "user", text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setCredits(prev => Math.max(0, prev - 1));

    // Mock bot response
    setTimeout(() => {
      const botMessage: Message = { 
        id: (Date.now() + 1).toString(), 
        sender: "bot", 
        text: credits - 1 > 0 
          ? "Esta es una respuesta simulada de tu Tutor IA. Aquí es donde se conectará la inteligencia artificial para resolver tu duda en detalle."
          : "He recibido tu pregunta, pero veo que has agotado tu energía. ¡Sube a Premium para ver la respuesta detallada y seguir aprendiendo sin límites!"
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Botón Flotante */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-mq-accent text-slate-900 shadow-lg shadow-mq-accent/20 transition-transform hover:scale-110 active:scale-95"
          >
            <Sparkles size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Ventana de Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 flex h-[600px] max-h-[85vh] w-[380px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mq-accent/20 text-mq-accent">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-100">Tutor IA</h3>
                  <div className="flex items-center gap-1 text-xs text-mq-accent font-semibold">
                    <Zap size={12} className="fill-current" />
                    <span>Energía: {credits}/{maxCredits}</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div 
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                      msg.sender === "user" 
                        ? "bg-mq-accent text-slate-900 rounded-br-sm font-medium" 
                        : "bg-slate-800 text-slate-200 rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input / Upsell */}
            <div className="border-t border-white/10 bg-slate-900 p-4">
              {credits > 0 ? (
                <div className="relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Escribe tu duda aquí..."
                    className="w-full rounded-xl border border-white/10 bg-black/50 py-3 pl-4 pr-12 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-mq-accent"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg bg-mq-accent text-slate-900 disabled:opacity-50 transition-transform active:scale-95"
                  >
                    <Send size={16} />
                  </button>
                </div>
              ) : (
                <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-center">
                  <p className="mb-3 text-sm font-semibold text-amber-200">
                    Has alcanzado tu límite de aprendizaje con IA.
                  </p>
                  <Link 
                    href="/dashboard/planes" // Assuming this is the upgrade route
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 py-2.5 text-sm font-bold text-slate-900 transition-transform hover:scale-[1.02] active:scale-95"
                  >
                    Sube a Premium <ArrowRight size={16} />
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
