
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "@/lib/config";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const diff =
    new Date(weddingConfig.eventDateISO).getTime() -
    new Date().getTime();

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const units: {
  key: keyof TimeLeft;
  label: string;
}[] = [
  {
    key: "days",
    label: "Hari",
  },
  {
    key: "hours",
    label: "Jam",
  },
  {
    key: "minutes",
    label: "Menit",
  },
  {
    key: "seconds",
    label: "Detik",
  },
];

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-transparent
        px-4
        py-10
      "
    >

      {/* =====================================================
          AMBIENT GLOW
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[460px]
          w-[460px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#d6c7a5]/20
          blur-[110px]
        "
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {/* =====================================================
          MAIN PREMIUM ORGANIC PAPER
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          mx-auto
          max-w-[430px]
        "
      >

        {/* =================================================
            ORGANIC BACK LAYER
        ================================================= */}

        <motion.div
          animate={{
            rotate: [1.2, 1.8, 1.2],
            scale: [1, 1.01, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -inset-[3px]
            rounded-[47%_53%_44%_56%/9%_7%_10%_8%]
            bg-[#e9e1d2]/70
          "
        />


        {/* =================================================
            MAIN SHAPE
        ================================================= */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[44%_56%_47%_53%/8%_9%_7%_10%]
            border
            border-white/70
            bg-[#fbf8f1]/92
            px-6
            py-12
          "
        >

          {/* =================================================
              INNER ORGANIC LINE
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-[10px]
              rounded-[41%_59%_45%_55%/7%_8%_6%_9%]
              border
              border-[#c5aa67]/14
            "
          />


          {/* =================================================
              TOP LIGHT
          ================================================= */}

          <motion.div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-52
              w-52
              rounded-full
              bg-[#d7c59b]/18
              blur-[55px]
            "
            animate={{
              x: [0, 12, 0],
              y: [0, 8, 0],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />


          {/* =================================================
              BOTTOM LIGHT
          ================================================= */}

          <motion.div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-24
              h-52
              w-52
              rounded-full
              bg-[#607b65]/[0.035]
              blur-[55px]
            "
            animate={{
              x: [0, -10, 0],
              y: [0, -7, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />


          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="relative z-10">


            {/* =================================================
                TITLE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center"
            >

              <p
                className="
                  font-body
                  text-[8px]
                  uppercase
                  tracking-[0.4em]
                  text-emerald/45
                "
              >
                Menghitung Hari
              </p>


              <motion.h2
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.25,
                }}
                className="
                  mt-3
                  font-display
                  text-[29px]
                  font-normal
                  leading-none
                  tracking-[0.01em]
                  text-emerald
                "
              >
                Until Our Day
              </motion.h2>


              <motion.p
                initial={{
                  opacity: 0,
                  y: 7,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                }}
                className="
                  mt-4
                  font-body
                  text-[8px]
                  tracking-[0.08em]
                  text-ink/35
                "
              >
                Counting every moment until we say "I do"
              </motion.p>

            </motion.div>


            {/* =================================================
                COUNTDOWN
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mx-auto
                mt-10
                flex
                items-start
                justify-center
              "
            >

              {units.map((unit, index) => (

                <div
                  key={unit.key}
                  className="flex items-start"
                >

                  {/* UNIT */}

                  <div
                    className="
                      flex
                      min-w-[60px]
                      flex-col
                      items-center
                      text-center
                      sm:min-w-[68px]
                    "
                  >

                    {/* NUMBER */}

                    <div
                      className="
                        relative
                        h-[36px]
                        overflow-hidden
                      "
                    >

                      <AnimatePresence mode="wait">

                        <motion.span
                          key={
                            timeLeft?.[unit.key] ??
                            "loading"
                          }
                          initial={{
                            opacity: 0,
                            y: 8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: -8,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeOut",
                          }}
                          className="
                            block
                            font-display
                            text-[25px]
                            font-normal
                            leading-none
                            tracking-[0.02em]
                            text-emerald
                            tabular-nums
                          "
                        >
                          {timeLeft
                            ? String(
                                timeLeft[unit.key]
                              ).padStart(2, "0")
                            : "--"}
                        </motion.span>

                      </AnimatePresence>

                    </div>


                    {/* LABEL */}

                    <span
                      className="
                        mt-2
                        font-body
                        text-[6.5px]
                        uppercase
                        tracking-[0.28em]
                        text-ink/35
                      "
                    >
                      {unit.label}
                    </span>

                  </div>


                  {/* DOT */}

                  {index < units.length - 1 && (
                    <span
                      className="
                        mt-[7px]
                        px-[2px]
                        font-display
                        text-[15px]
                        text-[#c5aa67]/45
                      "
                    >
                      ·
                    </span>
                  )}

                </div>

              ))}

            </motion.div>


            {/* =================================================
                DATE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
              className="
                mt-8
                text-center
              "
            >

              <p
                className="
                  font-display
                  text-[15px]
                  font-normal
                  tracking-[0.07em]
                  text-emerald/70
                "
              >
                {new Date(
                  weddingConfig.eventDateISO
                ).toLocaleDateString(
                  "id-ID",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}
              </p>


              <p
                className="
                  mt-2
                  font-body
                  text-[6.5px]
                  uppercase
                  tracking-[0.3em]
                  text-ink/30
                "
              >
                Menuju hari bahagia kami
              </p>

            </motion.div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}
