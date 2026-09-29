"use client";

import { motion } from "framer-motion";

const storyItems = [
{
number: "01",
title: "Sebuah Pertemuan",
text: "Berawal dari sebuah pertemuan sederhana, dua insan dipertemukan dalam sebuah cerita yang tak pernah kami rencanakan. Dari percakapan kecil, tumbuh rasa nyaman yang perlahan membuat kami ingin saling mengenal lebih jauh.",
},
{
number: "02",
title: "Tumbuh Bersama",
text: "Hari-hari kemudian membawa kami pada banyak cerita. Kami belajar untuk saling memahami, menemani dalam suka dan duka, serta menyadari bahwa perjalanan yang indah bukan tentang menjadi sempurna, melainkan tentang menemukan seseorang yang bersedia berjalan bersama.",
},
{
number: "03",
title: "Menuju Satu Tujuan",
text: "Hingga pada akhirnya, dari begitu banyak jalan yang dapat ditempuh, kami menemukan arah yang sama. Dengan segala doa dan harapan, kami memilih untuk melangkah bersama menuju sebuah perjalanan baru yang insyaAllah penuh berkah.",
},
];

export default function OurStory() {
return ( <section className="relative overflow-hidden px-6 py-28">

```
  {/* =====================================================
      AMBIENT BACKGROUND
  ===================================================== */}

  <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#d6b56c]/10 blur-3xl" />

  <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-emerald/10 blur-3xl" />


  {/* Soft vertical glow */}

  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-40
      h-[70%]
      w-px
      -translate-x-1/2
      bg-gradient-to-b
      from-transparent
      via-[#d6b56c]/15
      to-transparent
    "
  />


  <div className="relative z-10 mx-auto max-w-[390px]">

    {/* =================================================
        HEADER
    ================================================= */}

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
      }}
      className="text-center"
    >

      <p
        className="
          font-body
          text-[9px]
          uppercase
          tracking-[0.45em]
          text-[#b99a54]
        "
      >
        Our Journey
      </p>


      <h2
        className="
          mt-3
          font-display
          text-[42px]
          font-normal
          leading-none
          tracking-[0.02em]
          text-emerald
        "
      >
        Our Story
      </h2>


      <p
        className="
          mx-auto
          mt-5
          max-w-[260px]
          font-body
          text-[11px]
          leading-[1.9]
          tracking-wide
          text-ink/45
        "
      >
        Sebuah kisah kecil tentang dua hati
        yang dipertemukan, dipertahankan,
        dan akhirnya memilih untuk berjalan
        menuju arah yang sama.
      </p>

    </motion.div>


    {/* =================================================
        DECORATION
    ================================================= */}

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
        duration: 1,
        delay: 0.2,
      }}
      className="mx-auto mt-8 flex items-center justify-center gap-3"
    >

      <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#d6b56c]/50" />

      <span className="font-display text-lg italic text-[#b99a54]">
        &amp;
      </span>

      <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#d6b56c]/50" />

    </motion.div>


    {/* =================================================
        STORY TIMELINE
    ================================================= */}

    <div className="relative mt-16">

      {/* Central line */}

      <div
        className="
          absolute
          left-[27px]
          top-3
          bottom-3
          w-px
          bg-gradient-to-b
          from-[#d6b56c]/10
          via-[#d6b56c]/40
          to-[#d6b56c]/10
        "
      />


      {storyItems.map((story, index) => (

        <motion.div
          key={story.number}
          initial={{
            opacity: 0,
            x: index % 2 === 0 ? -20 : 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            delay: index * 0.15,
          }}
          className="relative mb-14 last:mb-0"
        >

          {/* =================================================
              NUMBER
          ================================================= */}

          <div
            className="
              absolute
              left-0
              top-1
              flex
              h-[55px]
              w-[55px]
              items-center
              justify-center
              rounded-full
              border
              border-[#d6b56c]/30
              bg-[#f8f4e9]/80
              shadow-[0_8px_25px_rgba(30,45,35,.06)]
              backdrop-blur-md
            "
          >

            <span
              className="
                font-body
                text-[9px]
                tracking-[0.2em]
                text-[#b99a54]
              "
            >
              {story.number}
            </span>

          </div>


          {/* =================================================
              STORY CONTENT
          ================================================= */}

          <div className="ml-[78px]">

            <p
              className="
                font-body
                text-[8px]
                uppercase
                tracking-[0.35em]
                text-[#b99a54]/70
              "
            >
              Chapter {story.number}
            </p>


            <h3
              className="
                mt-2
                font-display
                text-[25px]
                font-normal
                leading-tight
                text-emerald
              "
            >
              {story.title}
            </h3>


            <div className="mt-4 h-px w-10 bg-[#d6b56c]/35" />


            <p
              className="
                mt-4
                font-body
                text-[12.5px]
                leading-[2]
                tracking-[0.01em]
                text-ink/60
              "
            >
              {story.text}
            </p>

          </div>

        </motion.div>

      ))}

    </div>


    {/* =================================================
        CLOSING QUOTE
    ================================================= */}

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
        amount: 0.4,
      }}
      transition={{
        duration: 1,
        delay: 0.2,
      }}
      className="
        relative
        mt-20
        overflow-hidden
        rounded-[30px]
        border
        border-[#d6b56c]/20
        bg-white/25
        px-7
        py-10
        text-center
        shadow-[0_20px_60px_rgba(30,45,35,.06)]
        backdrop-blur-xl
      "
    >

      {/* Decorative corner */}

      <div
        className="
          pointer-events-none
          absolute
          -right-8
          -top-8
          h-24
          w-24
          rounded-full
          border
          border-[#d6b56c]/15
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-10
          -left-8
          h-24
          w-24
          rounded-full
          border
          border-[#d6b56c]/15
        "
      />


      <p
        className="
          font-body
          text-[8px]
          uppercase
          tracking-[0.4em]
          text-[#b99a54]
        "
      >
        And so, our story continues...
      </p>


      <div className="mx-auto mt-6 h-px w-12 bg-[#d6b56c]/40" />


      <p
        className="
          mt-6
          font-display
          text-[20px]
          italic
          leading-[1.75]
          tracking-[0.01em]
          text-emerald/85
        "
      >
        “Bukan tentang bagaimana kami
        menemukan satu sama lain,
        tetapi bagaimana kami memilih
        untuk tetap bersama.”
      </p>


      <p
        className="
          mt-7
          font-body
          text-[9px]
          uppercase
          tracking-[0.28em]
          text-ink/35
        "
      >
        Zaenal &amp; Rahma
      </p>

    </motion.div>


    {/* =================================================
        FINAL ORNAMENT
    ================================================= */}

    <motion.div
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
        delay: 0.4,
      }}
      className="mt-12 text-center"
    >

      <span
        className="
          font-display
          text-[14px]
          italic
          tracking-wide
          text-[#b99a54]/70
        "
      >
        Forever begins here
      </span>

    </motion.div>

  </div>
</section>

);
}
