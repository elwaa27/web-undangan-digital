"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

type Attendance = "hadir" | "tidak_hadir" | "";

export default function RSVPForm({
  onSubmitted,
}: {
  onSubmitted?: (payload: { name: string; attendance: Attendance; guests: number }) => void;
}) {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<Attendance>("");
  const [guests, setGuests] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !attendance) return;

    setStatus("loading");
    // TODO: ganti dengan pemanggilan API/DB sungguhan (mis. Supabase, Google Sheets, dsb.)
    await new Promise((r) => setTimeout(r, 700));
    setStatus("done");
    onSubmitted?.({ name, attendance, guests });
  }

  if (status === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-emerald/15 bg-white/50 p-8 text-center"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald/10">
          <Check className="h-6 w-6 text-emerald" />
        </div>
        <p className="mt-4 font-display text-xl text-emerald">Terima kasih, {name}!</p>
        <p className="mt-1 font-body text-sm text-ink/60">
          {attendance === "hadir"
            ? "Konfirmasi kehadiran Anda telah kami terima."
            : "Terima kasih telah mengabari kami."}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-emerald/15 bg-white/40 p-7">
      <div>
        <label htmlFor="name" className="mb-1.5 block font-body text-xs font-medium uppercase tracking-wide text-emerald/70">
          Nama Lengkap
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tuliskan nama Anda"
          className="field"
          required
        />
      </div>

      <div>
        <span className="mb-1.5 block font-body text-xs font-medium uppercase tracking-wide text-emerald/70">
          Konfirmasi Kehadiran
        </span>
        <div className="grid grid-cols-2 gap-3">
          {(
            [
              { value: "hadir", label: "Hadir" },
              { value: "tidak_hadir", label: "Tidak Hadir" },
            ] as const
          ).map((opt) => (
            <button
              type="button"
              key={opt.value}
              onClick={() => setAttendance(opt.value)}
              className={`rounded-xl border px-4 py-2.5 font-body text-sm transition-colors ${
                attendance === opt.value
                  ? "border-emerald bg-emerald text-paper"
                  : "border-emerald/20 bg-transparent text-ink/70 hover:border-emerald/40"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {attendance === "hadir" && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
          <label htmlFor="guests" className="mb-1.5 block font-body text-xs font-medium uppercase tracking-wide text-emerald/70">
            Jumlah Tamu (termasuk Anda)
          </label>
          <input
            id="guests"
            type="number"
            min={1}
            max={5}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="field"
          />
        </motion.div>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full">
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Mengirim...
          </>
        ) : (
          "Kirim Konfirmasi"
        )}
      </button>
    </form>
  );
}
