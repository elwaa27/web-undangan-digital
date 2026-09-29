
"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";
import { weddingConfig } from "@/lib/config";

export default function EventDetails() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-transparent
        px-5
        py-20
      "
    >

      {/* =====================================================
          SOFT BACKGROUND
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[15%]
          h-[320px]
          w-[320px]
          -translate-x-1/2
          rounded-full
          bg-[#d8c89f]/10
          blur-[100px]
        "
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[430px]">


        {/* =================================================
            OPENING GREETING
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mb-16
            text-center
          "
        >

          {/* Soft decorative curve */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[-24px]
              h-[40px]
              w-[130px]
              -translate-x-1/2
              rounded-[50%]
              border-t
              border-[#c6a75d]/20
            "
          />


          <h2
            className="
              font-display
              text-[25px]
              font-normal
              leading-relaxed
              text-emerald
            "
          >
            Assalamu'alaikum
          </h2>


          <p
            className="
              mt-1
              font-body
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-ink/35
            "
          >
            Warahmatullahi Wabarakatuh
          </p>


          <p
            className="
              mx-auto
              mt-7
              max-w-[355px]
              font-body
              text-[10.5px]
              leading-[2]
              tracking-[0.015em]
              text-ink/55
            "
          >
            Segala puji bagi Allah SWT yang telah menjadikan
            hamba-Nya hidup berpasang-pasangan. Dengan memohon
            ridho, rahmat, dan berkah Allah SWT, kami bermaksud
            mengundang Bapak/Ibu/Saudara/i untuk hadir dalam
            acara pernikahan yang kami selenggarakan.
          </p>

        </motion.div>


        {/* =================================================
            SECTION TITLE
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
          }}
          transition={{
            duration: 0.9,
          }}
          className="mb-10 text-center"
        >

          <p
            className="
              font-body
              text-[7px]
              uppercase
              tracking-[0.4em]
              text-emerald/45
            "
          >
            The Celebration
          </p>

          <h2
            className="
              mt-3
              font-display
              text-[31px]
              font-normal
              leading-none
              text-emerald
            "
          >
            Rangkaian Acara
          </h2>

        </motion.div>


        {/* =================================================
            EVENTS
        ================================================= */}

        <div className="space-y-10">

          {weddingConfig.events.map((event, i) => (

            <motion.article
              key={event.title}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                overflow-hidden
                rounded-[34px]
                border
                border-[#c9ad69]/20
                bg-[#fbf8f1]/65
                px-6
                py-9
                text-center
                backdrop-blur-md
              "
            >

              {/* =================================================
                  SOFT CARD GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-44
                  w-44
                  rounded-full
                  bg-[#d8c89f]/10
                  blur-[45px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -left-20
                  h-44
                  w-44
                  rounded-full
                  bg-[#5f7864]/[0.035]
                  blur-[45px]
                "
              />


              <div className="relative z-10">


                {/* =================================================
                    EVENT LABEL
                ================================================= */}

                <p
                  className="
                    font-body
                    text-[7px]
                    uppercase
                    tracking-[0.35em]
                    text-[#b99a54]/75
                  "
                >
                  {i === 0
                    ? "First Celebration"
                    : "Second Celebration"}
                </p>


                {/* =================================================
                    EVENT TITLE
                ================================================= */}

                <h3
                  className="
                    mt-3
                    font-display
                    text-[28px]
                    font-normal
                    leading-tight
                    text-emerald
                  "
                >
                  {event.title}
                </h3>


                {/* =================================================
                    DATE
                ================================================= */}

                <p
                  className="
                    mt-3
                    font-body
                    text-[10px]
                    tracking-[0.12em]
                    text-ink/50
                  "
                >
                  {event.date}
                </p>


                {/* =================================================
                    TIME
                ================================================= */}

                <div
                  className="
                    mt-7
                    flex
                    items-center
                    justify-center
                    gap-3
                  "
                >

                  <Clock
                    className="
                      h-[15px]
                      w-[15px]
                      stroke-[1.3]
                      text-[#b99a54]
                    "
                  />

                  <span
                    className="
                      font-display
                      text-[17px]
                      tracking-[0.05em]
                      text-emerald/75
                    "
                  >
                    {event.time}
                  </span>

                </div>


                {/* =================================================
                    LOCATION
                ================================================= */}

                <div
                  className="
                    mx-auto
                    mt-6
                    max-w-[290px]
                    border-t
                    border-[#c9ad69]/10
                    pt-5
                  "
                >

                  <div
                    className="
                      flex
                      items-start
                      justify-center
                      gap-2.5
                    "
                  >

                    <MapPin
                      className="
                        mt-[2px]
                        h-[15px]
                        w-[15px]
                        shrink-0
                        stroke-[1.3]
                        text-[#b99a54]
                      "
                    />

                    <div className="text-left">

                      <p
                        className="
                          font-body
                          text-[10px]
                          font-medium
                          leading-relaxed
                          text-ink/65
                        "
                      >
                        {event.venue}
                      </p>

                      <p
                        className="
                          mt-1
                          font-body
                          text-[8.5px]
                          leading-[1.7]
                          text-ink/40
                        "
                      >
                        {event.address}
                      </p>

                    </div>

                  </div>

                </div>


                {/* =================================================
                    PREMIUM MAP PREVIEW
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.97,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    relative
                    mt-7
                    overflow-hidden
                    rounded-[25px]
                    border
                    border-[#c9ad69]/20
                    bg-[#e9e4d8]
                    shadow-[0_10px_30px_rgba(40,50,40,0.06)]
                  "
                >

                  {/* =============================================
                      FAKE MAP BACKGROUND
                  ============================================= */}

                  <div
                    className="
                      relative
                      h-[185px]
                      w-full
                      overflow-hidden
                      bg-[#e7e4da]
                    "
                  >

                    {/* Map paper texture */}

                    <div
                      className="
                        absolute
                        inset-0
                        opacity-50
                        [background-image:linear-gradient(rgba(110,120,105,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(110,120,105,.08)_1px,transparent_1px)]
                        [background-size:28px_28px]
                      "
                    />


                    {/* Main road */}

                    <motion.div
                      initial={{
                        scaleX: 0,
                      }}
                      whileInView={{
                        scaleX: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1.2,
                        delay: 0.35,
                      }}
                      className="
                        absolute
                        left-[-10%]
                        top-[47%]
                        h-[14px]
                        w-[120%]
                        rotate-[-8deg]
                        bg-[#f7f4eb]
                        shadow-[0_1px_3px_rgba(70,70,60,0.08)]
                      "
                    />


                    {/* Secondary road */}

                    <div
                      className="
                        absolute
                        left-[43%]
                        top-[-15%]
                        h-[130%]
                        w-[10px]
                        rotate-[18deg]
                        bg-[#f4f1e8]
                        shadow-[0_1px_3px_rgba(70,70,60,0.05)]
                      "
                    />


                    {/* Green area */}

                    <motion.div
                      animate={{
                        scale: [1, 1.03, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        absolute
                        -right-8
                        top-5
                        h-[100px]
                        w-[145px]
                        rounded-[45%_55%_48%_52%]
                        bg-[#b7c4ae]/40
                      "
                    />


                    {/* Water area */}

                    <div
                      className="
                        absolute
                        -bottom-12
                        -left-12
                        h-[90px]
                        w-[210px]
                        rotate-[-12deg]
                        rounded-[50%]
                        bg-[#c9d8d5]/45
                      "
                    />


                    {/* Small road */}

                    <div
                      className="
                        absolute
                        left-[8%]
                        top-[28%]
                        h-[5px]
                        w-[120px]
                        rotate-[18deg]
                        rounded-full
                        bg-[#f6f2e8]
                      "
                    />

                    <div
                      className="
                        absolute
                        right-[8%]
                        bottom-[24%]
                        h-[5px]
                        w-[110px]
                        rotate-[-18deg]
                        rounded-full
                        bg-[#f6f2e8]
                      "
                    />


                    {/* =============================================
                        LOCATION PIN
                    ============================================= */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.7,
                        type: "spring",
                        stiffness: 180,
                        damping: 15,
                      }}
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        z-20
                        -translate-x-1/2
                        -translate-y-1/2
                      "
                    >

                      {/* Pulse */}

                      <motion.div
                        animate={{
                          scale: [1, 1.8],
                          opacity: [0.35, 0],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                        className="
                          absolute
                          left-1/2
                          top-1/2
                          h-10
                          w-10
                          -translate-x-1/2
                          -translate-y-1/2
                          rounded-full
                          bg-[#c5a55d]/40
                        "
                      />


                      {/* Pin */}

                      <div
                        className="
                          relative
                          flex
                          h-[38px]
                          w-[38px]
                          items-center
                          justify-center
                          rounded-full
                          border-[3px]
                          border-[#fbf8f1]
                          bg-[#48614d]
                          shadow-[0_5px_15px_rgba(40,60,45,0.18)]
                        "
                      >

                        <MapPin
                          className="
                            h-[17px]
                            w-[17px]
                            stroke-[1.5]
                            text-[#e5ce91]
                          "
                        />

                      </div>

                    </motion.div>


                    {/* =============================================
                        MAP LABEL
                    ============================================= */}

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
                        duration: 0.7,
                        delay: 0.9,
                      }}
                      className="
                        absolute
                        bottom-3
                        left-3
                        z-20
                        rounded-full
                        border
                        border-white/70
                        bg-[#fbf8f1]/80
                        px-3
                        py-1.5
                        backdrop-blur-md
                      "
                    >

                      <span
                        className="
                          font-body
                          text-[6.5px]
                          uppercase
                          tracking-[0.2em]
                          text-emerald/60
                        "
                      >
                        Wedding Venue
                      </span>

                    </motion.div>

                  </div>


                  {/* =============================================
                      MAP ACTION
                  ============================================= */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                      bg-[#fbf8f1]/80
                      px-4
                      py-3
                    "
                  >

                    <div className="text-left">

                      <p
                        className="
                          font-body
                          text-[7px]
                          uppercase
                          tracking-[0.2em]
                          text-ink/30
                        "
                      >
                        Location
                      </p>

                      <p
                        className="
                          mt-1
                          max-w-[180px]
                          truncate
                          font-body
                          text-[9px]
                          text-emerald/70
                        "
                      >
                        {event.venue}
                      </p>

                    </div>


                    <motion.a
                      href={event.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className="
                        flex
                        shrink-0
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-[#c9ad69]/35
                        bg-[#fbf8f1]
                        px-4
                        py-2
                        font-body
                        text-[6.5px]
                        uppercase
                        tracking-[0.2em]
                        text-emerald/70
                        transition-all
                        duration-300
                        hover:border-[#c9ad69]/60
                      "
                    >

                      Buka Maps

                      <ExternalLink
                        className="
                          h-[10px]
                          w-[10px]
                          stroke-[1.5]
                        "
                      />

                    </motion.a>

                  </div>

                </motion.div>

              </div>

            </motion.article>

          ))}

        </div>


        {/* =================================================
            CLOSING
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
            duration: 0.9,
            delay: 0.25,
          }}
          className="
            mt-12
            text-center
          "
        >

          <p
            className="
              font-display
              text-[17px]
              italic
              text-emerald/65
            "
          >
            Merupakan suatu kehormatan
          </p>

          <p
            className="
              mt-2
              font-body
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-ink/30
            "
          >
            atas kehadiran dan doa restu Anda
          </p>

        </motion.div>

      </div>

    </section>
  );
}
