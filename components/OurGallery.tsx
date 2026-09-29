
"use client";

import { motion } from "framer-motion";

const photos = [
  {
    src: "/images/photo1.jpeg",
    title: "A Beginning",
    align: "left",
  },
  {
    src: "/images/photo2.jpeg",
    title: "A Beautiful Moment",
    align: "right",
  },
  {
    src: "/images/photo3.jpeg",
    title: "Forever Together",
    align: "left",
  },
];

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 1.06,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};

export default function OurGallery() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f8f5ee]
        px-5
        pt-24
        pb-8
      "
    >

      {/* =====================================================
          VERY SOFT BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[30%]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#e7dfce]/30
          blur-[120px]
        "
      />


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[410px]">


        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.header
          initial={{
            opacity: 0,
            y: 18,
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
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 text-center"
        >

          <motion.p
            initial={{
              opacity: 0,
              letterSpacing: "0.2em",
            }}
            whileInView={{
              opacity: 1,
              letterSpacing: "0.42em",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
              delay: 0.1,
            }}
            className="
              font-body
              text-[8px]
              uppercase
              text-emerald/45
            "
          >
            Our Memories
          </motion.p>


          <motion.h2
            initial={{
              opacity: 0,
              y: 12,
              scale: 0.98,
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
              duration: 1.15,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-3
              font-display
              text-[39px]
              font-normal
              leading-none
              text-emerald
            "
          >
            Our Gallery
          </motion.h2>


          <motion.p
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
              duration: 1,
              delay: 0.35,
            }}
            className="
              mx-auto
              mt-5
              max-w-[240px]
              font-body
              text-[9px]
              leading-6
              tracking-[0.08em]
              text-ink/35
            "
          >
            Little moments,
            <br />
            captured forever.
          </motion.p>

        </motion.header>


        {/* ===================================================
            GALLERY
        =================================================== */}

        <div className="space-y-20">

          {photos.map((photo, index) => (

            <motion.article
              key={photo.src}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.18,
              }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 35,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.05,
                    delay: 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="relative"
            >


              {/* =================================================
                  PREMIUM BACK SHAPE
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.94,
                  rotate: photo.align === "left" ? 2 : -2,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: photo.align === "left" ? 1.8 : -1.8,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.25,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  absolute
                  -z-10
                  top-3
                  h-[96%]
                  w-[91%]
                  rounded-[24px]
                  border
                  border-[#d6c7a8]/35
                  bg-[#eee8dc]/70
                  ${
                    photo.align === "left"
                      ? "right-1"
                      : "left-1"
                  }
                `}
              />


              {/* =================================================
                  PHOTO CONTAINER
              ================================================= */}

              <motion.div
                variants={imageVariants}
                whileHover={{
                  scale: 1.008,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  mx-auto
                  w-[91%]
                "
              >

                {/* Minimal frame */}

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[20px]
                    bg-[#fffdf9]
                    p-[3px]
                  "
                >

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[17px]
                    "
                  >

                    {/* =========================================
                        IMAGE
                    ========================================= */}

                    <motion.img
                      src={photo.src}
                      alt={`Zaenal & Rahma - ${photo.title}`}
                      initial={{
                        scale: 1.08,
                      }}
                      whileInView={{
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1.8,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        block
                        aspect-[4/5]
                        w-full
                        object-cover
                      "
                    />


                    {/* =========================================
                        SOFT PHOTO FINISH
                    ========================================= */}

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
                        duration: 1.4,
                        delay: 0.25,
                      }}
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-b
                        from-white/[0.04]
                        via-transparent
                        to-black/[0.025]
                      "
                    />

                  </div>

                </div>

              </motion.div>

            {/* =================================================
                CAPTION INSIDE PHOTO
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
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
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                pointer-events-none
                absolute
                inset-x-[calc(4.5%+3px)]
                bottom-[3px]
                z-20
                overflow-hidden
                rounded-b-[17px]
              "
            >
              {/* Soft bottom fade */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-[32%]
                  bg-gradient-to-t
                  from-black/25
                  via-black/8
                  to-transparent
                "
              />

              {/* Text */}

              <div
                className={`
                  relative
                  px-5
                  pb-5
                  ${
                    photo.align === "left"
                      ? "text-left"
                      : "text-right"
                  }
                `}
              >

                <p
                  className="
                    font-script
                    text-[22px]
                    italic
                    leading-none
                    text-white
                    drop-shadow-[0_1px_5px_rgba(0,0,0,0.15)]
                  "
                >
                  {photo.title}
                </p>

                <p
                  className="
                    mt-1.5
                    font-body
                    text-[6.5px]
                    uppercase
                    tracking-[0.3em]
                    text-white/70
                  "
                >
                  Zaenal & Rahma
                </p>

              </div>
            </motion.div>

            </motion.article>

          ))}

        </div>


        {/* =====================================================
            SOFT END SPACE
            Kept intentionally small so Thank You is closer.
        ===================================================== */}

        <div className="h-8" />

      </div>

    </section>
  );
}
