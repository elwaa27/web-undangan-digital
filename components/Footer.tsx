import { weddingConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-emerald/10 bg-emerald px-6 py-14 text-center text-paper">
      <p className="font-script text-3xl italic">
        {weddingConfig.groom.nickname} &amp; {weddingConfig.bride.nickname}
      </p>
      <p className="mt-3 font-body text-xs uppercase tracking-[0.3em] text-paper/60">
        Terima kasih atas doa &amp; restu Anda
      </p>
    </footer>
  );
}
