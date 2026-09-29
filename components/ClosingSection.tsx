"use client";

import { motion } from "framer-motion";

export default function ClosingSection() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f6] px-6 pb-28 pt-20">

      {/* Soft luxury glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#d6b46c]/8 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-emerald/8 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[390px]">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 text-center"
        >
          <p className="font-body text-[8px] uppercase tracking-[0.55em] text-[#b99a54]">
            With Gratitude
          </p>

          <h2 className="mt-4 font-display text-[34px] font-normal leading-none text-emerald">
            Thank You
          </h2>
        </motion.div>

        {/* PHOTO */}
        <motion.div
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto w-[84%]"
        >

          {/* PREMIUM FRAME */}
          <div
            className="
              relative
              overflow-hidden
              rounded-t-[90px]
              rounded-b-[8px]
              border-[2px]
              border-white
              bg-white
              p-[5px]
              shadow-[0_30px_80px_rgba(30,45,35,0.13)]
            "
          >

            <div className="relative overflow-hidden rounded-t-[82px] rounded-b-[3px]">

              {/* BLACK & WHITE PHOTO */}
              <motion.img
                src="/images/photo4.jpeg"
                alt="Zaenal & Rahma"
                initial={{
                  scale: 1.08,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  block
                  aspect-[4/5]
                  w-full
                  object-cover
                  grayscale
                  contrast-[0.92]
                "
              />

              {/* WHITE GRADIENT FROM BOTTOM */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-[58%]
                  bg-gradient-to-t
                  from-[#faf9f6]
                  via-[#faf9f6]/85
                  via-[55%]
                  to-transparent
                "
              />

              {/* SOFT WHITE HAZE */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-[30%]
                  bg-gradient-to-t
                  from-[#faf9f6]
                  to-transparent
                "
              />

              {/* TEXT */}
              <div className="absolute inset-x-0 bottom-0 px-6 pb-8 text-center">

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 22,
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
                    delay: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    font-display
                    text-[12px]
                    leading-[1.9]
                    tracking-[0.015em]
                    text-ink/70
                  "
                >
                  Merupakan suatu kehormatan bagi kami apabila
                  Bapak/Ibu/Saudara/i berkenan hadir dan memberikan
                  doa restu.
                </motion.p>

                {/* GOLD DETAIL */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scaleX: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.7,
                  }}
                  className="mx-auto mt-5 h-px w-12 bg-[#b99a54]/60"
                />

                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.85,
                  }}
                  className="mt-4 font-body text-[7px] uppercase tracking-[0.45em] text-ink/35"
                >
                  With love
                </motion.p>

              </div>

            </div>
          </div>

        </motion.div>

        {/* SIGNATURE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            delay: 0.3,
          }}
          className="mt-12 text-center"
        >

          <p className="font-script text-[40px] leading-none text-emerald">
            Zaenal &amp; Rahma
          </p>

          <p className="mt-5 font-body text-[8px] uppercase tracking-[0.45em] text-[#b99a54]/70">
            Forever begins here
          </p>

        </motion.div>

      </div>
    </section>
  );
}