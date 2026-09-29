"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type EnvelopeProps = {
  onOpen: () => void;
};

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;

    setIsOpening(true);

    // Tunggu sampai animasi amplop selesai
    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <section className="relative mx-auto flex min-h-screen w-full max-w-[430px] items-center justify-center overflow-hidden px-5">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.96,
        }}
        animate={
          isOpening
            ? {
                opacity: 1,
                y: -20,
                scale: 1,
              }
            : {
                opacity: 1,
                y: 0,
                scale: 1,
              }
        }
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex w-full flex-col items-center text-center"
      >

        {/* =========================
            JUDUL
        ========================== */}
        <AnimatePresence>
          {!isOpening && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: -20,
                transition: { duration: 0.35 },
              }}
              className="flex flex-col items-center"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-gold/50" />
                <span className="text-[8px] text-gold">✦</span>
                <span className="h-px w-8 bg-gold/50" />
              </div>

              <p className="font-body text-[9px] uppercase tracking-[0.42em] text-emerald/65">
                Undangan
              </p>

              <p className="mt-1 font-display text-[15px] uppercase tracking-[0.22em] text-emerald">
                Pernikahan
              </p>

              <div className="mt-3 h-px w-16 bg-gold/50" />
            </motion.div>
          )}
        </AnimatePresence>


        {/* =========================
            NAMA MEMPELAI
        ========================== */}
        <AnimatePresence>
          {!isOpening && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: -30,
                scale: 0.95,
                transition: { duration: 0.45 },
              }}
              transition={{
                delay: 0.4,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 flex flex-col items-center"
            >
              {/* Nama pria */}
              <h1 className="font-display text-[27px] leading-tight text-emerald sm:text-4xl">
                A. Zaenal Usman
              </h1>

              <p className="mt-1 font-body text-[10px] tracking-[0.18em] text-emerald/55">
                A.Md.T
              </p>

              {/* & */}
              <div className="my-2 flex items-center gap-3">
                <span className="h-px w-8 bg-gold/40" />

                <span className="font-script text-[24px] italic text-gold">
                  &amp;
                </span>

                <span className="h-px w-8 bg-gold/40" />
              </div>

              {/* Nama wanita */}
              <h1 className="font-display text-[30px] leading-tight text-emerald sm:text-4xl">
                Rahmawati
              </h1>
            </motion.div>
          )}
        </AnimatePresence>


        {/* =========================
            TANGGAL
        ========================== */}
        <AnimatePresence>
          {!isOpening && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: -15,
                transition: { duration: 0.3 },
              }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="mt-5 font-body text-[10px] uppercase tracking-[0.25em] text-ink/50"
            >
              Sabtu · 5 September 2026
            </motion.p>
          )}
        </AnimatePresence>


        {/* =========================
            AMPLOP
        ========================== */}
        <motion.button
          type="button"
          onClick={handleOpen}
          disabled={isOpening}
          whileHover={!isOpening ? { scale: 1.025, y: -4 } : {}}
          whileTap={!isOpening ? { scale: 0.97 } : {}}
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: isOpening ? 10 : 0,
            scale: isOpening ? 1.05 : 1,
          }}
          transition={{
            delay: 0.55,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-8 h-[155px] w-[225px] cursor-pointer rounded-xl border border-gold/50 bg-[#eee5d4] shadow-[0_20px_50px_rgba(55,45,30,0.18)] focus:outline-none"
          style={{
            perspective: "1000px",
          }}
        >

          {/* =========================
              KARTU DI DALAM AMPLOP
          ========================== */}
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={
              isOpening
                ? {
                    y: -85,
                    opacity: 1,
                    scale: 1.02,
                  }
                : {
                    y: 20,
                    opacity: 0,
                  }
            }
            transition={{
              duration: 1.15,
              delay: isOpening ? 0.45 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-[8%] top-[8%] z-[8] h-[84%] w-[84%] rounded-md border border-gold/40 bg-[#f8f3e8] shadow-[0_8px_25px_rgba(55,45,30,0.12)]"
          >
            <div className="flex h-full flex-col items-center justify-center">
              <span className="text-[8px] uppercase tracking-[0.3em] text-emerald/50">
                Wedding
              </span>

              <span className="mt-1 font-display text-[13px] text-emerald">
                A. Zaenal Usman & Rahmawati
              </span>

              <span className="mt-2 text-[7px] tracking-[0.2em] text-gold">
                05 · 09 · 2026
              </span>
            </div>
          </motion.div>


          {/* =========================
              BAGIAN DEPAN AMPLOP
          ========================== */}
          <motion.div
            animate={
              isOpening
                ? {
                    opacity: 0,
                    y: 15,
                  }
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            transition={{
              duration: 0.5,
              delay: isOpening ? 1.05 : 0,
            }}
            className="absolute inset-0 z-[20] rounded-xl"
          >

            {/* Bingkai luar */}
            <div className="pointer-events-none absolute inset-2 rounded-[10px] border border-gold/25" />

            {/* Penutup amplop */}
            <motion.div
              animate={
                isOpening
                  ? {
                      rotateX: -175,
                      zIndex: 5,
                    }
                  : {
                      rotateX: 0,
                      zIndex: 20,
                    }
              }
              transition={{
                duration: 1.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
              }}
              className="absolute left-0 top-0 h-[57%] w-full bg-[#e2d4bd]"
              >
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                }}
              />
            </motion.div>


            {/* Bagian kiri */}
            <div
              className="absolute bottom-0 left-0 z-10 h-full w-1/2 bg-[#e7dac5]"
              style={{
                clipPath: "polygon(0 0, 100% 50%, 0 100%)",
              }}
            />

            {/* Bagian kanan */}
            <div
              className="absolute bottom-0 right-0 z-10 h-full w-1/2 bg-[#e4d7c2]"
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 0 50%)",
              }}
            />

            {/* Bagian bawah */}
            <div
              className="absolute bottom-0 left-0 z-20 h-1/2 w-full bg-[#eee5d4]"
              style={{
                clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
              }}
            />

            {/* Garis dekoratif */}
            <div className="pointer-events-none absolute bottom-[12px] left-1/2 z-30 h-px w-[70%] -translate-x-1/2 bg-gold/20" />


            {/* =========================
                SEGEL
            ========================== */}
            <motion.div
              animate={
              isOpening
                ? {
                    scale: 0,
                    opacity: 0,
                    rotate: 45,
                  }
                : {
                    scale: 1,
                    opacity: 1,
                    rotate: 0,
                  }
            }
            transition={{
              duration: isOpening ? 0.4 : 0.3,
              ease: "easeOut",
            }}
              className="absolute left-[42%] top-1/3 z-[30] flex h-10 w-10 -translate-x-1/3 -translate-y-1/4 items-center justify-center rounded-full border-2 border-[#dabe78] bg-[#1f4e42] shadow-[0_5px_18px_rgba(0,0,0,0.2)]"
              >
              <span className="relative -top-[1px] flex items-center justify-center text-[18px] leading-none text-white">
                🤍
              </span>
            </motion.div>


            {/* Ornamen atas */}
            <motion.span
              animate={
                isOpening
                  ? {
                      opacity: 0,
                      y: -10,
                    }
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              className="pointer-events-none absolute left-1/2 top-[calc(50%-40px)] z-40 -translate-x-1/2 text-[7px] text-gold/70"
            >
              ✦
            </motion.span>


            {/* Ornamen bawah */}
            <motion.span
              animate={
                isOpening
                  ? {
                      opacity: 0,
                      y: 10,
                    }
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              className="pointer-events-none absolute left-1/2 top-[calc(50%+34px)] z-40 -translate-x-1/2 text-[6px] text-gold/60"
            >
              ✦
            </motion.span>
          </motion.div>
        </motion.button>


        {/* =========================
            PETUNJUK
        ========================== */}
        <AnimatePresence>
          {!isOpening && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1 }}
              className="mt-7 font-body text-[9px] uppercase tracking-[0.28em] text-emerald/50"
            >
              Ketuk amplop untuk membuka
            </motion.p>
          )}
        </AnimatePresence>

      </motion.div>
    </section>
  );
}