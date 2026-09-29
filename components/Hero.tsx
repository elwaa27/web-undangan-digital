"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { weddingConfig } from "@/lib/config";

/* =========================================================
   ANIMATION VARIANTS — RINGAN UNTUK HP
========================================================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   FLOWER FLOAT — LEBIH RINGAN
========================================================= */

const flowerFloat = {
  animate: {
    y: [0, -4, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const flowerFloatSlow = {
  animate: {
    y: [0, -3, 0],
  },
  transition: {
    duration: 7,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        mx-auto
        flex
        min-h-screen
        w-full
        max-w-[430px]
        items-center
        justify-center
        overflow-hidden
        px-5
        py-14
      "
    >

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
        "
        style={{
          background: `
            radial-gradient(
              circle at 15% 15%,
              rgba(218,190,120,.18),
              transparent 28%
            ),
            radial-gradient(
              circle at 88% 30%,
              rgba(31,78,66,.10),
              transparent 30%
            ),
            radial-gradient(
              circle at 50% 100%,
              rgba(231,169,183,.10),
              transparent 32%
            )
          `,
        }}
      />

      {/* =========================================================
          LIGHT — TIDAK LAGI BLUR 80PX + ANIMASI BERAT
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0
          h-[260px]
          w-[260px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/15
          blur-[35px]
        "
      />

      {/* =========================================================
          LINGKARAN DEKORATIF
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[330px]
          w-[330px]
          rounded-full
          border
          border-emerald/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-44
          -right-44
          h-[360px]
          w-[360px]
          rounded-full
          border
          border-gold/10
        "
      />

      {/* =========================================================
          ORNAMEN KIRI ATAS
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-26px]
          top-[40px]
          z-[2]
          opacity-80
        "
      >

        <motion.div
          animate={flowerFloat.animate}
          transition={flowerFloat.transition}
          className="flower-small flower-pink"
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <i />
        </motion.div>

        <motion.div
          animate={flowerFloatSlow.animate}
          transition={flowerFloatSlow.transition}
          className="
            flower-small
            flower-white
            absolute
            left-[48px]
            top-[55px]
            scale-[.62]
          "
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <i />
        </motion.div>

        <div
          className="
            leaf-small
            absolute
            left-[65px]
            top-[35px]
            rotate-[28deg]
          "
        />

        <div
          className="
            leaf-small
            absolute
            left-[75px]
            top-[85px]
            rotate-[-35deg]
          "
        />
      </div>


      {/* =========================================================
          ORNAMEN KANAN ATAS
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-28px]
          top-[80px]
          z-[2]
          scale-x-[-1]
          opacity-75
        "
      >

        <motion.div
          animate={flowerFloatSlow.animate}
          transition={flowerFloatSlow.transition}
          className="flower-small flower-white"
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <i />
        </motion.div>

        <motion.div
          animate={flowerFloat.animate}
          transition={flowerFloat.transition}
          className="
            flower-small
            flower-pink
            absolute
            left-[48px]
            top-[55px]
            scale-[.58]
          "
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <i />
        </motion.div>

        <div
          className="
            leaf-small
            absolute
            left-[65px]
            top-[35px]
            rotate-[28deg]
          "
        />

        <div
          className="
            leaf-small
            absolute
            left-[75px]
            top-[85px]
            rotate-[-35deg]
          "
        />
      </div>


      {/* =========================================================
          ORNAMEN BAWAH KIRI
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-30px]
          left-[-32px]
          z-[2]
          opacity-70
        "
      >

        <motion.div
          animate={flowerFloat.animate}
          transition={flowerFloat.transition}
          className="flower-small flower-pink scale-[.72]"
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <i />
        </motion.div>

        <div
          className="
            flower-small
            flower-white
            absolute
            left-[48px]
            top-[45px]
            scale-[.48]
          "
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <i />
        </div>
      </div>


      {/* =========================================================
          ORNAMEN BAWAH KANAN
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-35px]
          right-[-32px]
          z-[2]
          scale-x-[-1]
          opacity-70
        "
      >

        <motion.div
          animate={flowerFloatSlow.animate}
          transition={flowerFloatSlow.transition}
          className="flower-small flower-white scale-[.72]"
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <i />
        </motion.div>

        <div
          className="
            flower-small
            flower-pink
            absolute
            left-[48px]
            top-[45px]
            scale-[.48]
          "
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <i />
        </div>
      </div>


      {/* =========================================================
          PANEL UTAMA
      ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
          scale: 0.985,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          w-full
          max-w-[365px]
          overflow-hidden
          rounded-[38px]
          border
          border-[#b9a27b]/25
          bg-white/35
          px-5
          py-11
          shadow-[0_25px_60px_rgba(31,78,66,0.10),0_10px_25px_rgba(0,0,0,0.05)]
          backdrop-blur-[5px]
        "
      >

        {/* INNER BORDER */}

        <div
          className="
            pointer-events-none
            absolute
            inset-[9px]
            rounded-[31px]
            border
            border-[#b9a27b]/15
          "
        />

        {/* PANEL GRADIENT */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-60
          "
          style={{
            background: `
              radial-gradient(
                circle at 20% 20%,
                rgba(255,255,255,.65),
                transparent 27%
              ),
              radial-gradient(
                circle at 80% 70%,
                rgba(218,190,120,.08),
                transparent 30%
              ),
              linear-gradient(
                145deg,
                rgba(255,255,255,.30),
                rgba(238,245,241,.15)
              )
            `,
          }}
        />


        {/* =========================================================
            KILAUAN — STATIS
        ========================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-[20%]
            top-[18%]
            z-[2]
            h-2
            w-2
            rounded-full
            bg-white/60
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[18%]
            top-[42%]
            z-[2]
            h-1.5
            w-1.5
            rounded-full
            bg-gold/40
          "
        />


        {/* =========================================================
            KONTEN
        ========================================================= */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            relative
            z-10
            flex
            w-full
            flex-col
            items-center
            text-center
          "
        >

          {/* =====================================================
              EYEBROW
          ===================================================== */}

          <motion.div
            variants={item}
            className="
              relative
              flex
              flex-col
              items-center
            "
          >

            <span
              className="
                mb-3
                h-[3px]
                w-[3px]
                rounded-full
                bg-gold/70
              "
            />

            <p
              className="
                font-serif
                text-[15px]
                font-medium
                italic
                leading-none
                tracking-[0.12em]
                text-emerald/75
              "
            >
              We are getting married
            </p>

            <span
              className="
                mt-3
                font-body
                text-[7px]
                uppercase
                tracking-[0.42em]
                text-gold/65
              "
            >
              Our beginning
            </span>
          </motion.div>


          {/* =====================================================
              NAMA PENGANTIN
          ===================================================== */}

          <motion.div
            variants={item}
            className="
              mt-5
              flex
              flex-col
              items-center
            "
          >

            <h1
              className="
                font-display
                text-[32px]
                font-medium
                leading-none
                tracking-[-0.02em]
                text-emerald
              "
            >
              {weddingConfig.groom.nickname}
            </h1>

            <span
              className="
                my-2
                font-script
                text-[30px]
                italic
                text-gold
              "
            >
              &amp;
            </span>

            <h1
              className="
                font-display
                text-[32px]
                font-medium
                leading-none
                tracking-[-0.02em]
                text-emerald
              "
            >
              {weddingConfig.bride.nickname}
            </h1>

          </motion.div>


          {/* =====================================================
              TANGGAL
          ===================================================== */}

          <motion.p
            variants={item}
            className="
              mt-5
              font-body
              text-[10px]
              uppercase
              tracking-[0.24em]
              text-ink/45
            "
          >
            Sabtu, 5 September 2026
          </motion.p>


          {/* =====================================================
              FOTO PASANGAN
          ===================================================== */}

          <motion.div
            variants={item}
            className="
              relative
              mt-8
              h-[375px]
              w-[260px]
              overflow-hidden
              rounded-[130px]
              border
              border-[#b9a27b]/45
              bg-[#f7f1e6]
              p-[4px]
              shadow-[0_20px_45px_rgba(0,0,0,0.15),0_7px_20px_rgba(31,78,66,0.06)]
            "
          >

            <div
              className="
                pointer-events-none
                absolute
                inset-[6px]
                z-20
                rounded-[124px]
                border
                border-white/70
              "
            />

            <div
              className="
                relative
                h-full
                w-full
                overflow-hidden
                rounded-[124px]
              "
            >

              {/* FOTO — TANPA ANIMASI ZOOM BERAT */}

              <Image
                src="/images/foto-pasangan.jpeg"
                alt="Foto Zaenal dan Rahma"
                fill
                priority
                className="object-cover"
                sizes="260px"
              />

              {/* OVERLAY */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-transparent
                  via-transparent
                  to-black/[0.10]
                "
              />

            </div>


            {/* ORNAMEN FOTO KIRI */}

            <div
              className="
                pointer-events-none
                absolute
                -left-2
                top-[72px]
                z-30
                h-7
                w-7
                rounded-full
                bg-[#f0dfe2]/70
              "
            />


            {/* ORNAMEN FOTO KANAN */}

            <div
              className="
                pointer-events-none
                absolute
                -right-2
                bottom-[82px]
                z-30
                h-6
                w-6
                rounded-full
                bg-[#f4eee1]/80
              "
            />

          </motion.div>


          {/* =====================================================
              QUOTE
          ===================================================== */}

          <motion.div
            variants={item}
            className="
              mt-8
              flex
              max-w-[315px]
              flex-col
              items-center
            "
          >

            <span
              className="
                font-script
                text-3xl
                leading-none
                text-gold/65
              "
            >
              “
            </span>

            <p
              className="
                mt-[-4px]
                font-script
                text-[19px]
                italic
                leading-[1.8]
                text-ink/65
              "
            >
              "{weddingConfig.quote}"
            </p>

            <span
              className="
                mt-1
                font-script
                text-3xl
                leading-none
                text-gold/65
              "
            >
              ”
            </span>

          </motion.div>


          {/* =====================================================
              SUMBER AYAT
          ===================================================== */}

          <motion.p
            variants={item}
            className="
              mt-3
              font-body
              text-[9px]
              font-medium
              uppercase
              tracking-[0.34em]
              text-ink/38
            "
          >
            {weddingConfig.quoteSource}
          </motion.p>


          {/* =====================================================
              PEMBATAS
          ===================================================== */}

          <motion.div
            variants={item}
            className="
              mt-7
              flex
              items-center
              justify-center
              gap-2
            "
          >

            <span
              className="
                h-px
                w-8
                bg-[#b9a27b]/25
              "
            />

            <span
              className="
                h-1
                w-1
                rounded-full
                bg-[#b9a27b]/50
              "
            />

            <span
              className="
                h-px
                w-8
                bg-[#b9a27b]/25
              "
            />

          </motion.div>


          {/* =====================================================
              LOKASI
          ===================================================== */}

          <motion.p
            variants={item}
            className="
              mt-5
              font-body
              text-[13px]
              font-medium
              tracking-[0.08em]
              text-emerald/70
            "
          >
            Kolaka Timur, Sulawesi Tenggara
          </motion.p>


          {/* =====================================================
              SCROLL INDICATOR
          ===================================================== */}

          <motion.div
            variants={item}
            className="
              mt-9
              flex
              flex-col
              items-center
              gap-2
              text-emerald/40
            "
          >

            <span
              className="
                font-body
                text-[8px]
                font-medium
                uppercase
                tracking-[0.35em]
              "
            >
              Gulir
            </span>

            <motion.span
              animate={{
                y: [0, 5, 0],
                opacity: [0.35, 0.7, 0.35],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-6
                w-px
                bg-gradient-to-b
                from-emerald/10
                via-emerald/45
                to-transparent
              "
            />

            <span
              className="
                h-1
                w-1
                rounded-full
                bg-gold/50
              "
            />

          </motion.div>

        </motion.div>

      </motion.div>


      {/* =========================================================
          FLOATING PETALS — DIKURANGI
      ========================================================= */}

      <motion.span
        className="
          pointer-events-none
          absolute
          left-[18%]
          top-[34%]
          z-[5]
          h-2
          w-3
          rounded-full
          bg-[#e7a9b7]/40
        "
        animate={{
          y: [0, 12, 0],
          x: [0, 5, 0],
          rotate: [0, 20, 0],
          opacity: [0.2, 0.55, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="
          pointer-events-none
          absolute
          right-[20%]
          top-[27%]
          z-[5]
          h-2
          w-3
          rounded-full
          bg-[#e7a9b7]/35
        "
        animate={{
          y: [0, 10, 0],
          x: [0, -4, 0],
          rotate: [0, -18, 0],
          opacity: [0.15, 0.5, 0.15],
        }}
        transition={{
          duration: 8,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================================
          CSS ORNAMEN BUNGA
      ========================================================= */}

      <style jsx>{`

        .flower-small {
          position: relative;
          width: 58px;
          height: 58px;
          transform-style: preserve-3d;
        }

        .flower-small span {
          position: absolute;
          left: 17px;
          top: 4px;
          width: 25px;
          height: 38px;
          border-radius: 55% 55% 48% 48%;
          transform-origin: 50% 90%;

          background:
            radial-gradient(
              circle at 32% 20%,
              rgba(255,255,255,.95),
              transparent 23%
            ),
            linear-gradient(
              145deg,
              #fffdfd 0%,
              #f9dfe5 38%,
              #e6a9b7 72%,
              #c4778a 100%
            );

          box-shadow:
            inset 2px 3px 5px rgba(255,255,255,.72),
            inset -3px -5px 7px rgba(110,48,63,.12),
            0 3px 7px rgba(91,48,59,.10);
        }

        .flower-small span:nth-child(1) {
          transform: rotate(0deg) translateY(-3px);
        }

        .flower-small span:nth-child(2) {
          transform: rotate(72deg) translateY(-3px);
        }

        .flower-small span:nth-child(3) {
          transform: rotate(144deg) translateY(-3px);
        }

        .flower-small span:nth-child(4) {
          transform: rotate(216deg) translateY(-3px);
        }

        .flower-small span:nth-child(5) {
          transform: rotate(288deg) translateY(-3px);
        }

        .flower-small i {
          position: absolute;
          left: 22px;
          top: 22px;
          width: 14px;
          height: 14px;
          border-radius: 50%;

          background:
            radial-gradient(
              circle at 30% 28%,
              #fff9dc,
              #e7c66e 48%,
              #a87b2f 100%
            );

          box-shadow:
            inset 2px 2px 4px rgba(255,255,255,.7),
            0 2px 5px rgba(90,61,18,.20);

          z-index: 10;
        }

        .flower-white span {
          background:
            radial-gradient(
              circle at 32% 20%,
              rgba(255,255,255,1),
              transparent 24%
            ),
            linear-gradient(
              145deg,
              #ffffff 0%,
              #faf6ef 45%,
              #e9dfd0 100%
            );

          box-shadow:
            inset 2px 3px 5px rgba(255,255,255,.9),
            inset -3px -4px 7px rgba(107,92,70,.08),
            0 3px 8px rgba(67,55,43,.08);
        }

        .leaf-small {
          width: 25px;
          height: 13px;
          border-radius: 100% 0 100% 0;

          background:
            linear-gradient(
              135deg,
              #879d89,
              #496951 55%,
              #2c4937
            );

          box-shadow:
            inset 2px 2px 4px rgba(255,255,255,.25),
            0 2px 5px rgba(31,78,66,.10);
        }

        @media (max-width: 380px) {

          .flower-small {
            transform: scale(.82);
          }

        }

        @media (prefers-reduced-motion: reduce) {

          *,
          *::before,
          *::after {
            animation: none !important;
            transition: none !important;
          }

        }

      `}</style>

    </section>
  );
}