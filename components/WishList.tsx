"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Loader2, Send } from "lucide-react";

type Wish = {
  id: string;
  name: string;
  original: string;
  formatted: string;
  aiEnhanced: boolean;
};

const seedWishes: Wish[] = [
  {
    id: "seed-1",
    name: "Dinda",
    original: "Selamat menikah ya, semoga langgeng terus sampai tua!",
    formatted:
      "Selamat menempuh hidup baru — semoga cinta kalian tumbuh semakin dalam, dan kehangatan ini menemani setiap musim yang kalian lalui bersama, hingga usia senja.",
    aiEnhanced: true,
  },
];

export default function WishList() {
  const [wishes, setWishes] = useState<Wish[]>(seedWishes);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [useAI, setUseAI] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setError(null);

    let formatted = message.trim();
    let aiEnhanced = false;

    if (useAI) {
      try {
        const res = await fetch("/api/wish-formatter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: message.trim(), guestName: name.trim() }),
        });
        const data = await res.json();
        if (res.ok && data.formatted) {
          formatted = data.formatted;
          aiEnhanced = !data.fallback;
        }
      } catch {
        setError("AI Wish Formatter sedang tidak tersedia, ucapan asli tetap ditampilkan.");
      }
    }

    setWishes((prev) => [
      { id: crypto.randomUUID(), name: name.trim(), original: message.trim(), formatted, aiEnhanced },
      ...prev,
    ]);
    setName("");
    setMessage("");
    setIsSubmitting(false);
  }

  return (
    <section className="section-shell">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="eyebrow text-center"
      >
        Ucapan &amp; Doa
      </motion.p>
      <div className="hairline mx-auto my-6" />

      <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-emerald/15 bg-white/40 p-7">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama Anda"
          className="field"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tuliskan ucapan dan doa untuk kedua mempelai..."
          rows={3}
          maxLength={600}
          className="field resize-none"
          required
        />

        <label className="flex cursor-pointer items-center gap-2.5 font-body text-xs text-ink/60">
          <input
            type="checkbox"
            checked={useAI}
            onChange={(e) => setUseAI(e.target.checked)}
            className="h-4 w-4 rounded border-emerald/30 accent-emerald"
          />
          <span className="inline-flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Perindah ucapan otomatis dengan AI Wish Formatter
          </span>
        </label>

        {error && <p className="font-body text-xs text-red-500">{error}</p>}

        <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Merapikan ucapan...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" /> Kirim Ucapan
            </>
          )}
        </button>
      </form>

      <div className="mt-8 space-y-4">
        <AnimatePresence initial={false}>
          {wishes.map((wish) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-emerald/10 bg-white/30 p-5"
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-base text-emerald">{wish.name}</p>
                {wish.aiEnhanced && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 px-2.5 py-1 font-body text-[10px] uppercase tracking-wide text-gold-dark">
                    <Sparkles className="h-3 w-3" /> Dirapikan AI
                  </span>
                )}
              </div>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink/75">{wish.formatted}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
