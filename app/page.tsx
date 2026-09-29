"use client";

import { useEffect, useRef, useState } from "react";
import Envelope from "@/components/Envelope";
import MusicPlayer from "@/components/MusicPlayer";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import EventDetails from "@/components/EventDetails";
import Couple from "@/components/Couple";
import OurStory from "@/components/OurStory";
import ClosingSection from "@/components/ClosingSection";
import ShareInvitation from "@/components/ShareInvitation";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  /*
  ============================================================
  GUEST
  ============================================================
  */

  const [guestName, setGuestName] = useState("");
  const [withPartner, setWithPartner] = useState(false);

  /*
  ============================================================
  PAGE STATE
  ============================================================
  */

  const [showInvitation, setShowInvitation] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  /*
  ============================================================
  PERSONAL INVITATION
  ============================================================
  */

  const [isPersonalInvitation, setIsPersonalInvitation] =
    useState(false);

  /*
  ============================================================
  TRANSITION
  ============================================================
  */

  const [transitioning, setTransitioning] = useState(false);

  /*
  ============================================================
  BACA NAMA DARI URL
  ============================================================
  */

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);

    const sharedGuestName = params.get("to");
    const sharedPartner = params.get("partner");

    if (sharedGuestName && sharedGuestName.trim()) {
      const decodedName = sharedGuestName.trim();

      setGuestName(decodedName);
      setWithPartner(sharedPartner === "true");
      setIsPersonalInvitation(true);

      const timer = setTimeout(() => {
        setIsOpened(true);
        setShowWelcome(true);
        setShowInvitation(false);

        const audio = audioRef.current;

        if (audio) {
          audio.volume = 0.5;

          audio.play().catch(() => {
            console.log(
              "Autoplay diblokir browser, menunggu interaksi pengguna."
            );
          });
        }
      }, 150);

      return () => clearTimeout(timer);
    }
  }, []);

  /*
  ============================================================
  FALLBACK MUSIK
  ============================================================
  */

  useEffect(() => {
    if (!isPersonalInvitation) return;

    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.5;

    const startMusic = async () => {
      if (!audio.paused) return;

      try {
        await audio.play();
        console.log("Musik berhasil diputar setelah interaksi.");
      } catch {
        console.log("Browser masih memblokir musik.");
      }
    };

    const events: Array<keyof WindowEventMap> = [
      "click",
      "touchstart",
      "pointerdown",
      "scroll",
    ];

    events.forEach((event) => {
      window.addEventListener(event, startMusic, {
        once: true,
        passive: true,
      });
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, startMusic);
      });
    };
  }, [isPersonalInvitation]);

  /*
  ============================================================
  SMOOTH PAGE CHANGE
  ============================================================

  Dibuat jauh lebih ringan.
  Tidak menggunakan blur dan scale pada seluruh halaman.
  */

  const smoothChange = (callback: () => void) => {
    setTransitioning(true);

    setTimeout(() => {
      callback();

      requestAnimationFrame(() => {
        setTransitioning(false);
      });
    }, 180);
  };

  /*
  ============================================================
  OPEN ENVELOPE
  ============================================================
  */

  const handleOpenEnvelope = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0.5;

      audio.play().catch(() => {
        console.log("Musik belum dapat diputar.");
      });
    }

    smoothChange(() => {
      setIsOpened(true);
    });
  };

  /*
  ============================================================
  BUKA HALAMAN WELCOME
  ============================================================
  */

  const handleOpenWelcome = () => {
    if (!guestName.trim()) return;

    smoothChange(() => {
      setShowWelcome(true);
    });
  };

  /*
  ============================================================
  BUKA UNDANGAN UTAMA
  ============================================================
  */

  const handleOpenInvitation = () => {
    smoothChange(() => {
      setShowInvitation(true);
    });
  };

  return (
    <main className="min-h-screen bg-black">
      {/* =========================================================
          GLOBAL STYLE
      ========================================================= */}

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #050706;
        }

        /*
        ============================================================
        PAGE TRANSITION - OPTIMIZED
        ============================================================

        Tidak menggunakan blur/filter/scale.
        Ini mengurangi beban GPU ketika pindah ke halaman utama.
        */

        .invitation-transition {
          transition: opacity 0.3s ease;
          will-change: opacity;
        }

        .invitation-transition.is-changing {
          opacity: 0;
        }

        .invitation-transition.is-visible {
          animation: invitationAppear 0.45s ease-out both;
        }

        @keyframes invitationAppear {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        /*
        ============================================================
        ELEMENT APPEAR
        ============================================================
        */

        .premium-enter {
          animation: premiumEnter 0.75s ease-out both;
        }

        @keyframes premiumEnter {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /*
        ============================================================
        GOLD BORDER
        ============================================================
        */

        .premium-gold-border {
          position: relative;
        }

        .premium-gold-border::before {
          content: "";

          position: absolute;
          inset: 0;

          border-radius: inherit;

          pointer-events: none;

          border: 1px solid rgba(218, 190, 120, 0.62);

          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.22),
            0 0 25px rgba(218, 190, 120, 0.12);

          animation: goldBorderGlow 5s ease-in-out infinite;
        }

        @keyframes goldBorderGlow {
          0%,
          100% {
            opacity: 0.55;
          }

          50% {
            opacity: 1;
          }
        }

        /*
        ============================================================
        FLORAL BACKGROUND
        ============================================================
        */

        .floral-background {
          position: absolute;
          inset: 0;

          pointer-events: none;

          overflow: hidden;

          z-index: 0;

          contain: paint;
        }

        /*
        ============================================================
        STEM
        ============================================================
        */

        .premium-stem {
          position: absolute;

          width: 3px;
          height: 125px;

          background:
            linear-gradient(
              to bottom,
              rgba(57, 91, 68, 0.18),
              rgba(39, 77, 55, 0.75)
            );

          border-radius: 100px;

          transform-origin: top center;

          opacity: 0.9;
        }

        /*
        ============================================================
        LEAF
        ============================================================
        */

        .premium-leaf {
          position: absolute;

          width: 34px;
          height: 17px;

          border-radius: 100% 0 100% 0;

          background:
            linear-gradient(
              135deg,
              #789a7d,
              #385d46 55%,
              #213d2d
            );

          box-shadow:
            inset 3px 2px 4px rgba(255, 255, 255, 0.3),
            inset -3px -2px 5px rgba(0, 0, 0, 0.2),
            0 4px 9px rgba(0, 0, 0, 0.18);

          transform-origin: center;
        }

        /*
        ============================================================
        FLOWER
        ============================================================
        */

        .premium-flower {
          position: absolute;

          width: 66px;
          height: 66px;

          transform-style: preserve-3d;

          filter: drop-shadow(
            0 7px 8px rgba(73, 32, 42, 0.18)
          );

          animation:
            flowerFloat
            7s
            ease-in-out
            infinite;

          will-change: transform;
        }

        .premium-flower .petal {
          position: absolute;

          width: 34px;
          height: 49px;

          left: 16px;
          top: 5px;

          border-radius: 55% 55% 45% 45%;

          background:
            radial-gradient(
              circle at 35% 22%,
              rgba(255, 255, 255, 0.9) 0%,
              rgba(255, 255, 255, 0.3) 14%,
              transparent 27%
            ),
            linear-gradient(
              145deg,
              #fffafa 0%,
              #f7d8df 30%,
              #e7a9b7 68%,
              #bc7183 100%
            );

          box-shadow:
            inset 3px 3px 6px rgba(255, 255, 255, 0.65),
            inset -4px -6px 8px rgba(135, 56, 72, 0.18),
            0 5px 8px rgba(104, 47, 60, 0.15);

          transform-origin: 50% 90%;
        }

        .premium-flower .petal:nth-child(1) {
          transform: rotate(0deg) translateY(-5px);
        }

        .premium-flower .petal:nth-child(2) {
          transform: rotate(60deg) translateY(-5px);
        }

        .premium-flower .petal:nth-child(3) {
          transform: rotate(120deg) translateY(-5px);
        }

        .premium-flower .petal:nth-child(4) {
          transform: rotate(180deg) translateY(-5px);
        }

        .premium-flower .petal:nth-child(5) {
          transform: rotate(240deg) translateY(-5px);
        }

        .premium-flower .petal:nth-child(6) {
          transform: rotate(300deg) translateY(-5px);
        }

        .premium-flower .center {
          position: absolute;

          width: 17px;
          height: 17px;

          left: 25px;
          top: 25px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle at 35% 30%,
              #fff8d8,
              #e9c86c 48%,
              #b78a31 100%
            );

          box-shadow:
            inset 2px 2px 4px rgba(255, 255, 255, 0.7),
            0 3px 7px rgba(97, 67, 23, 0.35);

          z-index: 10;
        }

        @keyframes flowerFloat {
          0%,
          100% {
            transform: rotate(-2deg) translateY(0);
          }

          50% {
            transform: rotate(2deg) translateY(-4px);
          }
        }

        /*
        ============================================================
        FLOWER BRANCH
        ============================================================
        */

        .flower-branch {
          position: absolute;

          width: 145px;
          height: 190px;

          animation:
            branchSway
            8s
            ease-in-out
            infinite;

          transform-origin: bottom center;

          will-change: transform;
        }

        @keyframes branchSway {
          0%,
          100% {
            transform: rotate(-1deg);
          }

          50% {
            transform: rotate(2deg);
          }
        }

        /*
        ============================================================
        FLOWER ENTRY
        ============================================================
        */

        .flower-entry {
          animation:
            flowerEntry
            0.9s
            cubic-bezier(0.22, 0.61, 0.36, 1)
            both;
        }

        @keyframes flowerEntry {
          0% {
            opacity: 0;
            transform: translateY(12px) scale(0.92);
          }

          100% {
            opacity: 1;
          }
        }

        /*
        ============================================================
        SIDE FRAME
        ============================================================
        */

        .floral-side-frame {
          position: absolute;

          top: 18px;
          bottom: 18px;

          width: 78px;

          pointer-events: none;
        }

        .floral-side-frame.left {
          left: 4px;
        }

        .floral-side-frame.right {
          right: 4px;
        }

        .floral-side-frame::before {
          content: "";

          position: absolute;

          top: 5%;
          bottom: 5%;

          width: 1px;

          background:
            linear-gradient(
              to bottom,
              transparent,
              rgba(218, 190, 120, 0.65),
              rgba(218, 190, 120, 0.18),
              transparent
            );
        }

        .floral-side-frame.left::before {
          right: 2px;
        }

        .floral-side-frame.right::before {
          left: 2px;
        }

        /*
        ============================================================
        FALLING PETALS
        ============================================================
        */

        .premium-falling-petal {
          position: absolute;

          width: 9px;
          height: 14px;

          border-radius: 70% 30% 70% 30%;

          background:
            linear-gradient(
              135deg,
              rgba(255, 238, 242, 0.95),
              rgba(224, 144, 161, 0.85)
            );

          box-shadow:
            0 2px 5px rgba(104, 43, 58, 0.15);

          animation:
            premiumPetalFall
            linear
            infinite;

          will-change: transform, opacity;
        }

        @keyframes premiumPetalFall {
          0% {
            transform:
              translate3d(0, -12vh, 0)
              rotate(0deg);

            opacity: 0;
          }

          12% {
            opacity: 0.9;
          }

          50% {
            transform:
              translate3d(24px, 52vh, 0)
              rotate(180deg);

            opacity: 0.65;
          }

          100% {
            transform:
              translate3d(-25px, 115vh, 0)
              rotate(360deg);

            opacity: 0;
          }
        }

        /*
        ============================================================
        SPARKLE
        ============================================================
        */

        .premium-sparkle {
          position: absolute;

          width: 4px;
          height: 4px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              #fff,
              #dabe78 50%,
              transparent 75%
            );

          box-shadow:
            0 0 12px rgba(218, 190, 120, 0.75);

          animation:
            premiumSparkle
            3.5s
            ease-in-out
            infinite;

          will-change: transform, opacity;
        }

        @keyframes premiumSparkle {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(0.4);
          }

          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        /*
        ============================================================
        PHOTO PREMIUM
        ============================================================
        */

        #hero img,
        #hero video,
        #hero picture img,
        .premium-photo img {
          border:
            1px solid
            rgba(218, 190, 120, 0.68) !important;

          box-shadow:
            0 14px 35px rgba(0, 0, 0, 0.18),
            0 3px 12px rgba(218, 190, 120, 0.18),
            inset 0 0 0 1px
            rgba(255, 255, 255, 0.32) !important;
        }

        /*
        ============================================================
        MAIN CONTENT
        ============================================================
        */

        .wedding-content {
          position: relative;
          z-index: 10;

          contain: layout paint;
        }

        /*
        ============================================================
        PERSONAL NAME
        ============================================================
        */

        .guest-name-premium {
          animation:
            guestNameReveal
            0.8s
            cubic-bezier(0.22, 0.61, 0.36, 1)
            both;
        }

        @keyframes guestNameReveal {
          0% {
            opacity: 0;
            transform: translateY(12px) scale(0.97);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /*
        ============================================================
        REDUCED MOTION
        ============================================================
        */

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        /*
        ============================================================
        MOBILE PERFORMANCE
        ============================================================
        */

        @media (max-width: 430px) {
          .premium-flower {
            filter: drop-shadow(
              0 5px 6px rgba(73, 32, 42, 0.14)
            );
          }
        }
      `}</style>

      {/* =========================================================
          BACKGROUND UTAMA
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          min-h-screen
          w-full
          max-w-[430px]
          overflow-hidden
        "
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(218,190,120,0.25), transparent 30%), radial-gradient(circle at 85% 30%, rgba(31,78,66,0.15), transparent 35%), linear-gradient(135deg, #fffdf7 0%, #f5efe1 50%, #eef5f1 100%)",
        }}
      >
        {/* =====================================================
            CAHAYA BACKGROUND
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            overflow-hidden
          "
        >
          <div
            className="
              absolute
              -left-32
              -top-32
              h-80
              w-80
              rounded-full
              blur-3xl
            "
            style={{
              background: "rgba(218,190,120,.17)",
            }}
          />

          <div
            className="
              absolute
              -bottom-40
              -right-40
              h-96
              w-96
              rounded-full
              blur-3xl
            "
            style={{
              background: "rgba(31,78,66,.12)",
            }}
          />
        </div>

        {/* =====================================================
            FLORAL BACKGROUND
        ===================================================== */}

        <div className="floral-background">
          {/* BUNGA KIRI ATAS */}

          <div
            className="
              flower-branch
              flower-entry
            "
            style={{
              left: "-32px",
              top: "5px",
              transform: "rotate(-7deg)",
            }}
          >
            <div
              className="premium-stem"
              style={{
                left: "70px",
                top: "55px",
                transform: "rotate(-12deg)",
              }}
            />

            <div
              className="premium-leaf"
              style={{
                left: "48px",
                top: "115px",
                transform: "rotate(28deg)",
              }}
            />

            <div
              className="premium-leaf"
              style={{
                left: "84px",
                top: "130px",
                transform: "rotate(-35deg)",
              }}
            />

            <div
              className="premium-leaf"
              style={{
                left: "35px",
                top: "148px",
                transform: "rotate(15deg)",
              }}
            />

            <div
              className="premium-flower"
              style={{
                left: "55px",
                top: "10px",
              }}
            >
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="center" />
            </div>

            <div
              className="premium-flower"
              style={{
                left: "8px",
                top: "70px",
                transform: "scale(.62)",
                animationDelay: ".8s",
              }}
            >
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="center" />
            </div>

            <div
              className="premium-flower"
              style={{
                left: "88px",
                top: "76px",
                transform: "scale(.48)",
                animationDelay: "1.4s",
              }}
            >
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="center" />
            </div>
          </div>

          {/* BUNGA KANAN ATAS */}

          <div
            className="
              flower-branch
              flower-entry
            "
            style={{
              right: "-35px",
              top: "20px",
              transform: "scaleX(-1) rotate(-7deg)",
              animationDelay: ".25s",
            }}
          >
            <div
              className="premium-stem"
              style={{
                left: "70px",
                top: "55px",
                transform: "rotate(-12deg)",
              }}
            />

            <div
              className="premium-leaf"
              style={{
                left: "48px",
                top: "115px",
                transform: "rotate(28deg)",
              }}
            />

            <div
              className="premium-leaf"
              style={{
                left: "84px",
                top: "130px",
                transform: "rotate(-35deg)",
              }}
            />

            <div
              className="premium-flower"
              style={{
                left: "55px",
                top: "10px",
              }}
            >
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="center" />
            </div>

            <div
              className="premium-flower"
              style={{
                left: "8px",
                top: "72px",
                transform: "scale(.58)",
                animationDelay: "1s",
              }}
            >
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="center" />
            </div>
          </div>

          {/* BUNGA KIRI BAWAH */}

          <div
            className="
              flower-branch
              flower-entry
            "
            style={{
              left: "-40px",
              bottom: "5px",
              transform: "scaleY(-1) rotate(-5deg)",
              animationDelay: ".45s",
            }}
          >
            <div
              className="premium-stem"
              style={{
                left: "70px",
                top: "55px",
                transform: "rotate(-12deg)",
              }}
            />

            <div
              className="premium-leaf"
              style={{
                left: "46px",
                top: "120px",
                transform: "rotate(28deg)",
              }}
            />

            <div
              className="premium-leaf"
              style={{
                left: "84px",
                top: "138px",
                transform: "rotate(-35deg)",
              }}
            />

            <div
              className="premium-flower"
              style={{
                left: "54px",
                top: "8px",
              }}
            >
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="center" />
            </div>

            <div
              className="premium-flower"
              style={{
                left: "12px",
                top: "70px",
                transform: "scale(.56)",
              }}
            >
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="center" />
            </div>
          </div>

          {/* BUNGA KANAN BAWAH */}

          <div
            className="
              flower-branch
              flower-entry
            "
            style={{
              right: "-40px",
              bottom: "8px",
              transform: "scale(-1,-1) rotate(-5deg)",
              animationDelay: ".7s",
            }}
          >
            <div
              className="premium-stem"
              style={{
                left: "70px",
                top: "55px",
                transform: "rotate(-12deg)",
              }}
            />

            <div
              className="premium-leaf"
              style={{
                left: "46px",
                top: "120px",
                transform: "rotate(28deg)",
              }}
            />

            <div
              className="premium-leaf"
              style={{
                left: "84px",
                top: "138px",
                transform: "rotate(-35deg)",
              }}
            />

            <div
              className="premium-flower"
              style={{
                left: "54px",
                top: "8px",
              }}
            >
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="center" />
            </div>

            <div
              className="premium-flower"
              style={{
                left: "12px",
                top: "70px",
                transform: "scale(.56)",
              }}
            >
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="petal" />
              <div className="center" />
            </div>
          </div>

          {/* FALLING PETALS */}

          <span
            className="premium-falling-petal"
            style={{
              left: "7%",
              animationDuration: "14s",
            }}
          />

          <span
            className="premium-falling-petal"
            style={{
              left: "18%",
              animationDuration: "18s",
              animationDelay: "3s",
            }}
          />

          <span
            className="premium-falling-petal"
            style={{
              left: "32%",
              animationDuration: "15s",
              animationDelay: "5s",
            }}
          />

          <span
            className="premium-falling-petal"
            style={{
              left: "48%",
              animationDuration: "20s",
              animationDelay: "1s",
            }}
          />

          <span
            className="premium-falling-petal"
            style={{
              left: "65%",
              animationDuration: "17s",
              animationDelay: "6s",
            }}
          />

          <span
            className="premium-falling-petal"
            style={{
              left: "82%",
              animationDuration: "16s",
              animationDelay: "2s",
            }}
          />

          {/* SPARKLE */}

          <span
            className="premium-sparkle"
            style={{
              left: "20%",
              top: "28%",
            }}
          />

          <span
            className="premium-sparkle"
            style={{
              right: "20%",
              top: "38%",
              animationDelay: "1.3s",
            }}
          />

          <span
            className="premium-sparkle"
            style={{
              left: "27%",
              bottom: "25%",
              animationDelay: "2s",
            }}
          />

          <span
            className="premium-sparkle"
            style={{
              right: "27%",
              bottom: "30%",
              animationDelay: "2.7s",
            }}
          />
        </div>

        {/* =========================================================
            AUDIO
        ========================================================= */}

        <audio
          ref={audioRef}
          src="/music/wedding.mp3"
          preload="metadata"
          loop
        />

        {/* =========================================================
            ENVELOPE
        ========================================================= */}

        {!isOpened ? (
          <div
            className={`
              relative
              z-50
              invitation-transition
              ${transitioning ? "is-changing" : "is-visible"}
            `}
          >
            <div
              className="
                relative
                min-h-screen
              "
            >
              <div
                className="
                  absolute
                  inset-4
                  rounded-[30px]
                  border
                  border-[#dabe78]/35
                "
              />

              <div
                className="
                  absolute
                  inset-7
                  rounded-[25px]
                  border
                  border-[#dabe78]/15
                "
              />

              <Envelope onOpen={handleOpenEnvelope} />
            </div>
          </div>
        ) : !showWelcome ? (
          /* ===================================================
             INPUT NAMA
          =================================================== */

          <section
            className={`
              relative
              z-50
              mx-auto
              flex
              min-h-screen
              w-full
              max-w-[390px]
              items-center
              justify-center
              px-4
              invitation-transition
              ${transitioning ? "is-changing" : "is-visible"}
            `}
          >
            <div
              className="
                relative
                w-full
                max-w-[285px]
              "
            >
              <div
                className="
                  absolute
                  -inset-5
                  rounded-[32px]
                  border
                  border-[#dabe78]/25
                "
              />

              <div
                className="
                  absolute
                  -inset-2
                  rounded-[28px]
                  border
                  border-[#dabe78]/40
                "
              />

              <div
                className="
                  premium-gold-border
                  relative
                  z-10
                  rounded-2xl
                  bg-white/75
                  p-5
                  text-center
                  shadow-2xl
                  backdrop-blur-xl
                "
              >
                <div className="premium-enter">
                  <p className="eyebrow">
                    Undangan Pernikahan
                  </p>

                  <div
                    className="
                      hairline
                      mx-auto
                      my-6
                    "
                  />

                  <h1
                    className="
                      font-display
                      text-2xl
                      text-emerald
                    "
                  >
                    Zaenal{" "}
                    <span className="text-gold">
                      &amp;
                    </span>{" "}
                    Rahma
                  </h1>

                  <p
                    className="
                      mt-4
                      font-body
                      text-xs
                      leading-relaxed
                      text-ink/60
                    "
                  >
                    Kepada Yth.
                    <br />
                    Bapak/Ibu/Saudara/i
                  </p>

                  <input
                    type="text"
                    value={guestName}
                    onChange={(e) =>
                      setGuestName(e.target.value)
                    }
                    onKeyDown={(e) => {
                      if (
                        e.key === "Enter" &&
                        guestName.trim()
                      ) {
                        handleOpenWelcome();
                      }
                    }}
                    placeholder="Masukkan nama Anda"
                    className="
                      mt-4
                      w-full
                      rounded-lg
                      border
                      border-emerald/15
                      bg-white/80
                      px-3
                      py-2
                      text-center
                      font-body
                      text-[11px]
                      outline-none
                      transition
                      focus:border-gold
                    "
                  />

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      justify-center
                      gap-2
                    "
                  >
                    <input
                      id="withPartner"
                      type="checkbox"
                      checked={withPartner}
                      onChange={(e) =>
                        setWithPartner(e.target.checked)
                      }
                      className="
                        h-3.5
                        w-3.5
                        accent-emerald
                      "
                    />

                    <label
                      htmlFor="withPartner"
                      className="
                        font-body
                        text-[11px]
                        text-ink/60
                      "
                    >
                      Datang bersama partner
                    </label>
                  </div>

                  <button
                    type="button"
                    onClick={handleOpenWelcome}
                    disabled={!guestName.trim()}
                    className="
                      mt-4
                      w-full
                      rounded-xl
                      bg-emerald
                      px-4
                      py-2.5
                      font-body
                      text-xs
                      tracking-wide
                      text-white
                      shadow-lg
                      transition
                      hover:opacity-90
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                    "
                  >
                    Buka Undangan
                  </button>

                  <p
                    className="
                      mt-4
                      text-[9px]
                      text-ink/40
                    "
                  >
                    Silakan masukkan nama Anda
                    terlebih dahulu
                  </p>
                </div>
              </div>
            </div>
          </section>
        ) : !showInvitation ? (
          /* ===================================================
             WELCOME / BUKA UNDANGAN
          =================================================== */

          <section
            className={`
              relative
              flex
              min-h-screen
              items-center
              justify-center
              overflow-hidden
              px-6
              text-center
              invitation-transition
              ${transitioning ? "is-changing" : "is-visible"}
            `}
            style={{
              backgroundImage:
                "linear-gradient(rgba(20,35,30,.48), rgba(20,35,30,.68)), url('/images/foto_fotbar.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* BORDER EMAS */}

            <div
              className="
                pointer-events-none
                absolute
                inset-4
                z-20
                rounded-[30px]
                border
                border-[#dabe78]/65
                shadow-[inset_0_0_25px_rgba(218,190,120,.12),0_0_25px_rgba(218,190,120,.10)]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-7
                z-20
                rounded-[25px]
                border
                border-white/20
              "
            />

            {/* BUNGA KIRI */}

            <div
              className="
                flower-branch
                flower-entry
                pointer-events-none
                absolute
                -left-12
                top-4
                z-30
              "
            >
              <div
                className="premium-stem"
                style={{
                  left: "70px",
                  top: "55px",
                  transform: "rotate(-12deg)",
                }}
              />

              <div
                className="premium-leaf"
                style={{
                  left: "45px",
                  top: "118px",
                  transform: "rotate(30deg)",
                }}
              />

              <div
                className="premium-leaf"
                style={{
                  left: "84px",
                  top: "132px",
                  transform: "rotate(-30deg)",
                }}
              />

              <div
                className="premium-flower"
                style={{
                  left: "55px",
                  top: "10px",
                }}
              >
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="center" />
              </div>

              <div
                className="premium-flower"
                style={{
                  left: "5px",
                  top: "80px",
                  transform: "scale(.55)",
                }}
              >
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="center" />
              </div>
            </div>

            {/* BUNGA KANAN */}

            <div
              className="
                flower-branch
                flower-entry
                pointer-events-none
                absolute
                -right-12
                top-7
                z-30
              "
              style={{
                transform: "scaleX(-1)",
                animationDelay: ".35s",
              }}
            >
              <div
                className="premium-stem"
                style={{
                  left: "70px",
                  top: "55px",
                  transform: "rotate(-12deg)",
                }}
              />

              <div
                className="premium-leaf"
                style={{
                  left: "45px",
                  top: "118px",
                  transform: "rotate(30deg)",
                }}
              />

              <div
                className="premium-leaf"
                style={{
                  left: "84px",
                  top: "132px",
                  transform: "rotate(-30deg)",
                }}
              />

              <div
                className="premium-flower"
                style={{
                  left: "55px",
                  top: "10px",
                }}
              >
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="center" />
              </div>

              <div
                className="premium-flower"
                style={{
                  left: "5px",
                  top: "80px",
                  transform: "scale(.55)",
                }}
              >
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="center" />
              </div>
            </div>

            {/* BUNGA BAWAH KIRI */}

            <div
              className="
                flower-branch
                flower-entry
                pointer-events-none
                absolute
                -bottom-20
                -left-14
                z-30
              "
              style={{
                transform: "scaleY(-1)",
                animationDelay: ".55s",
              }}
            >
              <div
                className="premium-stem"
                style={{
                  left: "70px",
                  top: "55px",
                }}
              />

              <div
                className="premium-leaf"
                style={{
                  left: "45px",
                  top: "118px",
                  transform: "rotate(30deg)",
                }}
              />

              <div
                className="premium-flower"
                style={{
                  left: "55px",
                  top: "10px",
                  transform: "scale(.78)",
                }}
              >
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="center" />
              </div>
            </div>

            {/* BUNGA BAWAH KANAN */}

            <div
              className="
                flower-branch
                flower-entry
                pointer-events-none
                absolute
                -bottom-20
                -right-14
                z-30
              "
              style={{
                transform: "scale(-1,-1)",
                animationDelay: ".7s",
              }}
            >
              <div
                className="premium-stem"
                style={{
                  left: "70px",
                  top: "55px",
                }}
              />

              <div
                className="premium-leaf"
                style={{
                  left: "45px",
                  top: "118px",
                  transform: "rotate(30deg)",
                }}
              />

              <div
                className="premium-flower"
                style={{
                  left: "55px",
                  top: "10px",
                  transform: "scale(.78)",
                }}
              >
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="petal" />
                <div className="center" />
              </div>
            </div>

            {/* CONTENT WELCOME */}

            <div
              className="
                relative
                z-40
                w-full
                max-w-[330px]
                text-white
              "
            >
              <div className="premium-enter">
                <p
                  className="
                    font-body
                    text-[12px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-white
                  "
                  style={{
                    textShadow:
                      "0 2px 12px rgba(0,0,0,.45)",
                  }}
                >
                  The Wedding Of
                </p>

                <h1
                  className="
                    mt-2
                    whitespace-nowrap
                    font-display
                    text-3xl
                    leading-none
                    text-white
                  "
                  style={{
                    textShadow:
                      "0 3px 20px rgba(0,0,0,.55)",
                  }}
                >
                  Zaenal{" "}
                  <span
                    className="mx-1 italic"
                    style={{
                      color: "#dabe78",
                    }}
                  >
                    &
                  </span>{" "}
                  Rahma
                </h1>

                <div className="mt-20 mb-8" />

                <p
                  className="
                    font-display
                    text-base
                    tracking-[0.08em]
                    text-white/90
                  "
                >
                  Kepada Bapak/Ibu/Saudara/i
                </p>

                <div className="guest-name-premium mt-4">
                  <h2
                    className="
                      flex
                      flex-wrap
                      items-center
                      justify-center
                      gap-2
                      font-script
                      text-3xl
                      leading-tight
                      text-white
                    "
                    style={{
                      textShadow:
                        "0 3px 15px rgba(0,0,0,.5)",
                    }}
                  >
                    <span>{guestName}</span>

                    {withPartner && (
                      <span>&amp; Partner</span>
                    )}
                  </h2>

                  {isPersonalInvitation && (
                    <p
                      className="
                        mt-3
                        font-body
                        text-[9px]
                        uppercase
                        tracking-[0.25em]
                        text-white/55
                      "
                    >
                      Special Invitation
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleOpenInvitation}
                  className="
                    mt-10
                    rounded-full
                    border
                    border-[#dabe78]/80
                    bg-white/10
                    px-9
                    py-3.5
                    font-body
                    text-[11px]
                    uppercase
                    tracking-[0.3em]
                    text-white
                    shadow-xl
                    backdrop-blur-md
                    transition
                    duration-500
                    hover:bg-[#dabe78]/20
                    hover:shadow-[0_0_25px_rgba(218,190,120,.25)]
                  "
                >
                  Buka Undangan
                </button>
              </div>
            </div>
          </section>
        ) : (
          /* ===================================================
             HALAMAN UTAMA
          =================================================== */

          <div
            className={`
              wedding-content
              invitation-transition
              ${transitioning ? "is-changing" : "is-visible"}
            `}
          >
            {/* BORDER BACKGROUND UTAMA */}

            <div
              className="
                pointer-events-none
                fixed
                inset-0
                z-[2]
                flex
                justify-center
                overflow-hidden
              "
            >
              <div
                className="
                  relative
                  h-full
                  w-full
                  max-w-[430px]
                "
              >
                <div
                  className="
                    absolute
                    inset-3
                    rounded-[30px]
                    border
                    border-[#dabe78]/20
                  "
                />

                <div
                  className="
                    absolute
                    inset-5
                    rounded-[26px]
                    border
                    border-emerald/10
                  "
                />
              </div>
            </div>

            {/* =================================================
                HERO
            ================================================= */}

            <div id="hero">
              <MusicPlayer audioRef={audioRef} />

              <Hero />
            </div>

            {/* =================================================
                SECTIONS
            ================================================= */}

            <Couple />

            <Countdown />

            <EventDetails />

            <OurStory />

            <ClosingSection />

            {/* =================================================
                SHARE INVITATION
            ================================================= */}

            <ShareInvitation
              coupleName="Zaenal & Rahma"
              weddingDate="5 September 2026"
              photo="/images/foto_fotbar.jpeg"
              guestName={guestName}
              withPartner={withPartner}
            />
          </div>
        )}
      </div>
    </main>
  );
}

