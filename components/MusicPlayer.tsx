"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type MusicPlayerProps = {
  audioRef: React.RefObject<HTMLAudioElement | null>;
};

export default function MusicPlayer({
  audioRef,
}: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  /*
  ============================================================
  SINKRONISASI STATUS AUDIO
  ============================================================
  */

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    /*
    Cek kondisi awal audio
    */

    setIsPlaying(!audio.paused);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audioRef]);

  /*
  ============================================================
  TOGGLE MUSIC
  ============================================================
  */

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        audio.volume = 0.5;

        await audio.play();

        setIsPlaying(true);
      } catch (error) {
        console.log(
          "Musik belum dapat diputar:",
          error
        );

        setIsPlaying(false);
      }
    } else {
      audio.pause();

      setIsPlaying(false);
    }
  };

  return (
    <motion.button
      type="button"
      onClick={toggleMusic}
      aria-label={
        isPlaying
          ? "Matikan musik"
          : "Putar musik"
      }
      initial={{
        opacity: 0,
        scale: 0.5,
        y: -15,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.9,
        delay: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileTap={{
        scale: 0.9,
      }}
      className="
        fixed
        right-5
        top-5
        z-[100]
        flex
        h-[56px]
        w-[56px]
        items-center
        justify-center
        rounded-full
        bg-transparent
        focus:outline-none
      "
    >

      {/* =====================================================
          OUTER RING
      ===================================================== */}

      <motion.div
        animate={
          isPlaying
            ? {
                rotate: 360,
              }
            : {
                rotate: 0,
              }
        }
        transition={{
          duration: 9,
          repeat: isPlaying
            ? Infinity
            : 0,
          ease: "linear",
        }}
        className="
          relative
          h-[52px]
          w-[52px]
          rounded-full
          border
          border-[#b89a55]/35
          bg-[#263b2d]
        "
      >

        {/* =================================================
            VINYL GROOVES
        ================================================= */}

        <div
          className="
            absolute
            inset-[3px]
            rounded-full
            border
            border-white/[0.08]
          "
        />

        <div
          className="
            absolute
            inset-[7px]
            rounded-full
            border
            border-white/[0.07]
          "
        />

        <div
          className="
            absolute
            inset-[11px]
            rounded-full
            border
            border-white/[0.06]
          "
        />

        <div
          className="
            absolute
            inset-[15px]
            rounded-full
            border
            border-white/[0.05]
          "
        />

        {/* =================================================
            VINYL LIGHT REFLECTION
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-[2px]
            overflow-hidden
            rounded-full
          "
        >
          <div
            className="
              absolute
              -left-[15px]
              top-[5px]
              h-[55px]
              w-[18px]
              rotate-[35deg]
              bg-gradient-to-r
              from-transparent
              via-white/[0.13]
              to-transparent
              blur-[3px]
            "
          />
        </div>

        {/* =================================================
            CENTER LABEL
        ================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            flex
            h-[20px]
            w-[20px]
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-[#d6bb76]/50
            bg-[#d8bd78]
          "
        >

          <div
            className="
              h-[4px]
              w-[4px]
              rounded-full
              bg-[#263b2d]
            "
          />

        </div>

        {/* =================================================
            OUTER GOLD DETAIL
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
            border
            border-[#e1c886]/20
          "
        />

      </motion.div>

      {/* =====================================================
          SMALL PLAY / PAUSE INDICATOR
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 1,
          duration: 0.5,
        }}
        className="
          absolute
          -bottom-[1px]
          -right-[1px]
          flex
          h-[17px]
          w-[17px]
          items-center
          justify-center
          rounded-full
          border
          border-[#f8f5ee]
          bg-[#d7bb76]
        "
      >

        {isPlaying ? (
          <div className="flex gap-[2px]">

            <span
              className="
                h-[6px]
                w-[2px]
                rounded-full
                bg-[#263b2d]
              "
            />

            <span
              className="
                h-[6px]
                w-[2px]
                rounded-full
                bg-[#263b2d]
              "
            />

          </div>
        ) : (
          <span
            className="
              ml-[1px]
              h-0
              w-0
              border-y-[4px]
              border-l-[5px]
              border-y-transparent
              border-l-[#263b2d]
            "
          />
        )}

      </motion.div>

    </motion.button>
  );
}