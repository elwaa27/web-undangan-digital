"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { weddingConfig } from "@/lib/config";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Flower({
  type = "rose",
  size = "medium",
  className = "",
}: {
  type?: "rose" | "lily" | "small";
  size?: "small" | "medium" | "large";
  className?: string;
}) {
  return (
    <div
      className={`couple-flower couple-flower-${type} couple-flower-${size} ${className}`}
    >
      <span className="flower-petal p1" />
      <span className="flower-petal p2" />
      <span className="flower-petal p3" />
      <span className="flower-petal p4" />
      <span className="flower-petal p5" />

      {type !== "small" && (
        <>
          <span className="flower-petal p6" />
          <span className="flower-petal p7" />
        </>
      )}

      <span className="flower-center" />

      {type === "rose" && (
        <span className="rose-inner">
          <i />
          <i />
          <i />
        </span>
      )}
    </div>
  );
}

function FloralDecoration({
  position,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  return (
    <div
      className={`floral-decoration floral-${position}`}
      aria-hidden="true"
    >
      <Flower
        type="rose"
        size="medium"
        className="floral-main-flower"
      />

      <Flower
        type="lily"
        size="small"
        className="floral-side-flower-one"
      />

      <Flower
        type="small"
        size="small"
        className="floral-side-flower-two"
      />

      <span className="decor-leaf leaf-one" />
      <span className="decor-leaf leaf-two" />
      <span className="decor-leaf leaf-three" />

      <span className="floral-dot dot-one" />
      <span className="floral-dot dot-two" />
      <span className="floral-dot dot-three" />
    </div>
  );
}

function PhotoFrame({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.94,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        z-10
        mt-5
        h-[286px]
        w-[218px]
        rounded-[21px]
        bg-[#eee6d8]
        p-[5px]
        shadow-[0_20px_35px_rgba(47,39,29,0.24),0_8px_16px_rgba(0,0,0,0.10)]
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-[3px]
          z-20
          rounded-[18px]
          border
          border-[#9d8969]/55
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[21px]
          border
          border-[#b7a78e]/30
        "
      />

      <div
        className="
          relative
          h-full
          w-full
          overflow-hidden
          rounded-[17px]
          bg-[#e8dfd0]
        "
      >
        <img
          src={src}
          alt={alt}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-[1400ms]
            ease-out
            hover:scale-[1.025]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-b
            from-white/[0.04]
            via-transparent
            to-black/[0.07]
          "
        />
      </div>
    </motion.div>
  );
}

export default function Couple() {
  /*
  ============================================================
  AMBIL USERNAME INSTAGRAM
  @andenal_27  -> andenal_27
  @rr.hhmaa_   -> rr.hhmaa_
  ============================================================
  */

  const brideInstagram = String(
    weddingConfig.bride.instagram || ""
  )
    .trim()
    .replace(/^@/, "")
    .replace(
      /^https?:\/\/(www\.)?instagram\.com\//,
      ""
    )
    .replace(/\/$/, "");

  const groomInstagram = String(
    weddingConfig.groom.instagram || ""
  )
    .trim()
    .replace(/^@/, "")
    .replace(
      /^https?:\/\/(www\.)?instagram\.com\//,
      ""
    )
    .replace(/\/$/, "");

  return (
    <section
      id="couple"
      className="
        relative
        mx-auto
        flex
        w-full
        max-w-[430px]
        justify-center
        overflow-hidden
        px-4
        py-16
      "
    >
      {/* BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          background: `
            radial-gradient(
              circle at 12% 18%,
              rgba(226,177,188,.13),
              transparent 25%
            ),
            radial-gradient(
              circle at 88% 45%,
              rgba(218,190,120,.12),
              transparent 28%
            ),
            radial-gradient(
              circle at 45% 95%,
              rgba(31,78,66,.08),
              transparent 30%
            )
          `,
        }}
      />

      {/* PANEL */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.12,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          couple-panel
          relative
          w-full
          max-w-[330px]
          overflow-hidden
          rounded-[29px]
          border
          border-[#a99576]/30
          bg-[#faf7ef]/88
          px-5
          py-9
          shadow-[0_28px_65px_rgba(48,40,29,0.25),0_10px_28px_rgba(31,78,66,0.08)]
          backdrop-blur-[8px]
        "
      >
        {/* PANEL GRADIENT */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-80
          "
          style={{
            background: `
              radial-gradient(
                circle at 15% 12%,
                rgba(255,255,255,.85),
                transparent 23%
              ),
              radial-gradient(
                circle at 90% 75%,
                rgba(218,190,120,.10),
                transparent 30%
              ),
              linear-gradient(
                145deg,
                rgba(255,255,255,.55),
                rgba(241,235,221,.25)
              )
            `,
          }}
        />

        {/* INNER FRAME */}

        <div
          className="
            pointer-events-none
            absolute
            inset-[8px]
            rounded-[23px]
            border
            border-[#a99576]/15
          "
        />

        {/* FLORAL DECORATION */}

        <FloralDecoration position="top-left" />

        <FloralDecoration position="top-right" />

        <FloralDecoration position="bottom-left" />

        <FloralDecoration position="bottom-right" />

        {/* CONTENT */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="
            relative
            z-20
            flex
            flex-col
            items-center
            text-center
          "
        >
          {/* BRIDE */}

          <motion.div
            variants={item}
            className="relative z-20"
          >
            <p className="couple-title">
              The Bride
            </p>
          </motion.div>

          <PhotoFrame
            src="/images/bride.jpeg"
            alt={weddingConfig.bride.fullName}
          />

          {/* NAMA */}

          <motion.h2
            variants={item}
            className="
              relative
              z-20
              mt-5
              font-display
              text-[27px]
              font-semibold
              leading-none
              tracking-[-0.015em]
              text-[#25463b]
            "
          >
            {weddingConfig.bride.fullName}
          </motion.h2>

          {/* ORANG TUA */}

          <motion.p
            variants={item}
            className="
              relative
              z-20
              mt-3
              max-w-[220px]
              font-body
              text-[10px]
              leading-relaxed
              text-ink/50
            "
          >
            {weddingConfig.bride.parents}
          </motion.p>

          {/* INSTAGRAM BRIDE */}

          <motion.a
            variants={item}
            href={
              brideInstagram
                ? `https://www.instagram.com/${brideInstagram}/`
                : "#"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative
              z-20
              mt-3
              flex
              cursor-pointer
              items-center
              justify-center
              gap-1.5
              font-body
              text-[10px]
              tracking-wide
              text-ink/45
              transition
              duration-300
              hover:text-emerald
            "
          >
            <Instagram className="h-[13px] w-[13px]" />

            <span>
              {weddingConfig.bride.instagram}
            </span>
          </motion.a>

          {/* PEMISAH */}

          <motion.div
            variants={item}
            className="
              relative
              z-20
              my-9
              flex
              items-center
              justify-center
            "
          >
            <span
              className="
                font-script
                text-[28px]
                leading-none
                text-[#aa8a5d]
              "
            >
              &
            </span>
          </motion.div>

          {/* GROOM */}

          <motion.div
            variants={item}
            className="relative z-20"
          >
            <p className="couple-title">
              The Groom
            </p>
          </motion.div>

          <PhotoFrame
            src="/images/groom.jpeg"
            alt={weddingConfig.groom.fullName}
          />

          {/* NAMA */}

          <motion.h2
            variants={item}
            className="
              relative
              z-20
              mt-5
              max-w-[280px]
              font-display
              text-[25px]
              font-semibold
              leading-tight
              tracking-[-0.015em]
              text-[#25463b]
            "
          >
            {weddingConfig.groom.fullName}
          </motion.h2>

          {/* ORANG TUA */}

          <motion.p
            variants={item}
            className="
              relative
              z-20
              mt-3
              max-w-[220px]
              font-body
              text-[10px]
              leading-relaxed
              text-ink/50
            "
          >
            {weddingConfig.groom.parents}
          </motion.p>

          {/* INSTAGRAM GROOM */}

          <motion.a
            variants={item}
            href={
              groomInstagram
                ? `https://www.instagram.com/${groomInstagram}/`
                : "#"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative
              z-20
              mt-3
              flex
              cursor-pointer
              items-center
              justify-center
              gap-1.5
              font-body
              text-[10px]
              tracking-wide
              text-ink/45
              transition
              duration-300
              hover:text-emerald
            "
          >
            <Instagram className="h-[13px] w-[13px]" />

            <span>
              {weddingConfig.groom.instagram}
            </span>
          </motion.a>

          {/* ORNAMEN PENUTUP */}

          <motion.div
            variants={item}
            className="
              relative
              z-20
              mt-8
              flex
              items-center
              gap-2
            "
          >
            <span className="h-px w-8 bg-[#aa8a5d]/25" />

            <span
              className="
                h-1
                w-1
                rotate-45
                bg-[#aa8a5d]/55
              "
            />

            <span className="h-px w-8 bg-[#aa8a5d]/25" />
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx>{`

        .couple-panel {
          isolation: isolate;
        }

        .couple-title {
          font-family: Georgia, serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: .30em;
          color: rgba(100,78,52,.72);
          text-transform: none;
        }

        .floral-decoration {
          position: absolute;
          width: 112px;
          height: 118px;
          pointer-events: none;
          z-index: 5;
        }

        .floral-top-left {
          left: -28px;
          top: -22px;
        }

        .floral-top-right {
          right: -28px;
          top: -18px;
          transform: scaleX(-1);
        }

        .floral-bottom-left {
          left: -25px;
          bottom: -26px;
          transform: scaleY(-1);
        }

        .floral-bottom-right {
          right: -25px;
          bottom: -25px;
          transform: scale(-1,-1);
        }

        .couple-flower {
          position: absolute;
          width: 48px;
          height: 48px;
          transform-style: preserve-3d;
          animation:
            flowerSway
            6.5s
            ease-in-out
            infinite;
        }

        .couple-flower-medium {
          width: 48px;
          height: 48px;
        }

        .couple-flower-small {
          width: 32px;
          height: 32px;
        }

        .floral-main-flower {
          left: 38px;
          top: 7px;
        }

        .floral-side-flower-one {
          left: 5px;
          top: 55px;
          animation-delay: 1.1s;
        }

        .floral-side-flower-two {
          left: 73px;
          top: 51px;
          animation-delay: 2s;
        }

        .flower-petal {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 20px;
          height: 30px;
          transform-origin: 50% 92%;
          border-radius:
            65%
            65%
            48%
            48%;

          background:
            radial-gradient(
              circle at 30% 18%,
              rgba(255,255,255,.95),
              transparent 24%
            ),
            linear-gradient(
              145deg,
              #fffdfd 0%,
              #f7dbe1 38%,
              #e6a5b4 72%,
              #bf7487 100%
            );

          box-shadow:
            inset 2px 2px 4px rgba(255,255,255,.75),
            inset -3px -4px 6px rgba(112,52,67,.12),
            0 3px 7px rgba(83,46,56,.13);
        }

        .flower-petal.p1 {
          transform:
            translate(-50%,-91%)
            rotate(0deg);
        }

        .flower-petal.p2 {
          transform:
            translate(-50%,-91%)
            rotate(51deg);
        }

        .flower-petal.p3 {
          transform:
            translate(-50%,-91%)
            rotate(102deg);
        }

        .flower-petal.p4 {
          transform:
            translate(-50%,-91%)
            rotate(153deg);
        }

        .flower-petal.p5 {
          transform:
            translate(-50%,-91%)
            rotate(204deg);
        }

        .flower-petal.p6 {
          transform:
            translate(-50%,-91%)
            rotate(255deg);
        }

        .flower-petal.p7 {
          transform:
            translate(-50%,-91%)
            rotate(306deg);
        }

        .flower-center {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 11px;
          height: 11px;
          transform:
            translate(-50%,-50%);
          border-radius: 50%;
          z-index: 20;

          background:
            radial-gradient(
              circle at 30% 25%,
              #fff8dc,
              #e2bd62 48%,
              #9f7530 100%
            );

          box-shadow:
            inset 1px 1px 3px rgba(255,255,255,.8),
            0 2px 5px rgba(85,61,22,.28);
        }

        .rose-inner {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 16px;
          height: 16px;
          transform:
            translate(-50%,-50%);
          z-index: 25;
        }

        .rose-inner i {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1px solid rgba(145,80,96,.28);
          background:
            linear-gradient(
              135deg,
              #fff3f5,
              #d991a2
            );
        }

        .rose-inner i:nth-child(1) {
          left: 1px;
          top: 4px;
        }

        .rose-inner i:nth-child(2) {
          left: 6px;
          top: 1px;
        }

        .rose-inner i:nth-child(3) {
          left: 7px;
          top: 7px;
        }

        .couple-flower-lily .flower-petal {
          height: 27px;
          width: 16px;

          background:
            radial-gradient(
              circle at 35% 18%,
              white,
              transparent 25%
            ),
            linear-gradient(
              145deg,
              #fffdf9,
              #f7e6e8 48%,
              #e9c3ca 100%
            );
        }

        .couple-flower-lily .flower-center {
          width: 8px;
          height: 8px;

          background:
            radial-gradient(
              circle,
              #f2d27a,
              #b88834
            );
        }

        .couple-flower-small .flower-petal {
          width: 13px;
          height: 19px;
        }

        .couple-flower-small .flower-center {
          width: 7px;
          height: 7px;
        }

        .decor-leaf {
          position: absolute;
          width: 25px;
          height: 12px;
          border-radius:
            100%
            0
            100%
            0;

          background:
            linear-gradient(
              135deg,
              #829b84,
              #4c6d53 58%,
              #2c4736
            );

          box-shadow:
            inset 2px 2px 4px rgba(255,255,255,.28),
            0 3px 6px rgba(35,64,45,.14);
        }

        .leaf-one {
          left: 33px;
          top: 50px;
          transform: rotate(26deg);
        }

        .leaf-two {
          left: 72px;
          top: 28px;
          transform: rotate(-34deg);
        }

        .leaf-three {
          left: 19px;
          top: 82px;
          transform: rotate(9deg) scale(.72);
        }

        .floral-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              #fff,
              #e1bd6d
            );

          box-shadow:
            0 0 7px rgba(218,190,120,.35);
        }

        .dot-one {
          left: 24px;
          top: 30px;
        }

        .dot-two {
          left: 91px;
          top: 42px;
        }

        .dot-three {
          left: 53px;
          top: 92px;
          width: 3px;
          height: 3px;
        }

        @keyframes flowerSway {

          0%,
          100% {
            transform:
              rotate(-2deg)
              translate3d(0,0,0);
          }

          50% {
            transform:
              rotate(3deg)
              translate3d(1px,-3px,0);
          }

        }

        .couple-panel img {
          will-change: transform;
        }

        @media (max-width: 380px) {

          .couple-panel {
            max-width: 315px;
            padding-left: 17px;
            padding-right: 17px;
          }

          .floral-decoration {
            transform: scale(.88);
          }

          .floral-top-right {
            transform: scaleX(-1) scale(.88);
          }

          .floral-bottom-left {
            transform: scaleY(-1) scale(.88);
          }

          .floral-bottom-right {
            transform: scale(-1,-1) scale(.88);
          }

        }

        @media (prefers-reduced-motion: reduce) {

          .couple-flower,
          .couple-panel img {
            animation: none !important;
            transition: none !important;
          }

        }

      `}</style>
    </section>
  );
}