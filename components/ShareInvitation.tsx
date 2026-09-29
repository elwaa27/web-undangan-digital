"use client";

import { useState } from "react";

type ShareInvitationProps = {
  coupleName: string;
  weddingDate: string;
  photo: string;
  guestName: string;
  withPartner?: boolean;
};

export default function ShareInvitation({
  coupleName,
  weddingDate,
  photo,
  guestName,
  withPartner = false,
}: ShareInvitationProps) {
  const [isSharing, setIsSharing] = useState(false);

  /* =========================================================
     LOAD IMAGE
  ========================================================= */

  const loadImage = (
    src: string
  ): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const image = new Image();

      image.crossOrigin = "anonymous";

      image.onload = () => resolve(image);

      image.onerror = () =>
        reject(
          new Error("Gagal memuat foto undangan.")
        );

      image.src = src;
    });
  };

  /* =========================================================
     TEXT FIT
  ========================================================= */

  const drawFittedText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    maxWidth: number,
    startSize: number,
    minSize: number,
    fontFamily: string,
    weight = ""
  ) => {
    let size = startSize;

    while (size > minSize) {
      ctx.font = `${weight} ${size}px ${fontFamily}`;

      if (
        ctx.measureText(text).width <=
        maxWidth
      ) {
        break;
      }

      size -= 2;
    }

    ctx.font = `${weight} ${size}px ${fontFamily}`;

    return size;
  };

  /* =========================================================
     CENTER TEXT
     WHITE + SOFT PREMIUM SHADOW
  ========================================================= */

  const drawCenterText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    y: number,
    font: string,
    color: string
  ) => {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    /* Soft shadow agar tulisan tetap jelas */
    ctx.shadowColor =
  "rgba(0, 0, 0, 0.68)";

    ctx.shadowBlur = 11;

    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 3;

    ctx.fillText(
      text,
      540,
      y
    );

    /* Reset shadow */
    ctx.shadowColor =
      "transparent";

    ctx.shadowBlur = 0;

    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
  };

  /* =========================================================
     STORY IMAGE
  ========================================================= */

  const createStoryImage =
    async (): Promise<Blob | null> => {
      const canvas =
        document.createElement("canvas");

      canvas.width = 1080;
      canvas.height = 1920;

      const ctx =
        canvas.getContext("2d");

      if (!ctx) {
        return null;
      }

      /* =====================================================
         FOTO FULL SCREEN
      ===================================================== */

      try {
        const image =
          await loadImage(photo);

        const imageRatio =
          image.naturalWidth /
          image.naturalHeight;

        const canvasRatio =
          canvas.width /
          canvas.height;

        let drawWidth =
          canvas.width;

        let drawHeight =
          canvas.height;

        let drawX = 0;
        let drawY = 0;

        /* COVER */

        if (
          imageRatio >
          canvasRatio
        ) {
          drawHeight =
            canvas.height;

          drawWidth =
            drawHeight *
            imageRatio;

          drawX =
            (canvas.width -
              drawWidth) /
            2;
        } else {
          drawWidth =
            canvas.width;

          drawHeight =
            drawWidth /
            imageRatio;

          drawY =
            (canvas.height -
              drawHeight) /
            2;
        }

        ctx.drawImage(
          image,
          drawX,
          drawY,
          drawWidth,
          drawHeight
        );
      } catch {
        /* FALLBACK BACKGROUND */

        ctx.fillStyle =
          "#173329";

        ctx.fillRect(
          0,
          0,
          canvas.width,
          canvas.height
        );
      }

      /* =====================================================
         PREMIUM DARK OVERLAY
      ===================================================== */

      const overlay =
        ctx.createLinearGradient(
          0,
          0,
          0,
          1920
        );

      overlay.addColorStop(
        0,
        "rgba(8,18,14,.76)"
      );

      overlay.addColorStop(
        0.16,
        "rgba(8,18,14,.34)"
      );

      overlay.addColorStop(
        0.40,
        "rgba(8,18,14,.10)"
      );

      overlay.addColorStop(
        0.62,
        "rgba(8,18,14,.16)"
      );

      overlay.addColorStop(
        0.82,
        "rgba(8,18,14,.38)"
      );

      overlay.addColorStop(
        1,
        "rgba(5,14,10,.78)"
      );

      ctx.fillStyle =
        overlay;

      ctx.fillRect(
        0,
        0,
        1080,
        1920
      );

      /* =====================================================
         SOFT CENTER SHADOW
         Membantu teks bagian tamu lebih jelas
      ===================================================== */

      const textShadow =
        ctx.createLinearGradient(
          0,
          1080,
          0,
          1570
        );

      textShadow.addColorStop(
        0,
        "rgba(0,0,0,0)"
      );

      textShadow.addColorStop(
        0.45,
        "rgba(0,0,0,.16)"
      );

      textShadow.addColorStop(
        0.75,
        "rgba(0,0,0,.30)"
      );

      textShadow.addColorStop(
        1,
        "rgba(0,0,0,.08)"
      );

      ctx.fillStyle =
        textShadow;

      ctx.fillRect(
        0,
        1050,
        1080,
        600
      );

      /* =====================================================
         SOFT VIGNETTE
      ===================================================== */

      const vignette =
        ctx.createRadialGradient(
          540,
          900,
          300,
          540,
          960,
          1100
        );

      vignette.addColorStop(
        0,
        "rgba(0,0,0,0)"
      );

      vignette.addColorStop(
        0.70,
        "rgba(0,0,0,.05)"
      );

      vignette.addColorStop(
        1,
        "rgba(0,0,0,.42)"
      );

      ctx.fillStyle =
        vignette;

      ctx.fillRect(
        0,
        0,
        1080,
        1920
      );

      /* =====================================================
         PREMIUM FRAME
      ===================================================== */

      /* Outer gold frame */

      ctx.strokeStyle =
        "rgba(218,190,120,.88)";

      ctx.lineWidth = 3;

      ctx.strokeRect(
        32,
        32,
        1016,
        1856
      );

      /* Inner ivory frame */

      ctx.strokeStyle =
        "rgba(255,255,255,.40)";

      ctx.lineWidth = 1.5;

      ctx.strokeRect(
        52,
        52,
        976,
        1816
      );

      /* Inner gold frame */

      ctx.strokeStyle =
        "rgba(218,190,120,.30)";

      ctx.lineWidth = 1;

      ctx.strokeRect(
        68,
        68,
        944,
        1784
      );

      /* =====================================================
         DECORATIVE TOP ORNAMENT
      ===================================================== */

      ctx.strokeStyle =
        "rgba(218,190,120,.72)";

      ctx.lineWidth = 1;

      ctx.beginPath();

      ctx.moveTo(
        450,
        175
      );

      ctx.lineTo(
        500,
        175
      );

      ctx.moveTo(
        580,
        175
      );

      ctx.lineTo(
        630,
        175
      );

      ctx.stroke();

      /* Center diamond */

      ctx.beginPath();

      ctx.moveTo(
        540,
        166
      );

      ctx.lineTo(
        549,
        175
      );

      ctx.lineTo(
        540,
        184
      );

      ctx.lineTo(
        531,
        175
      );

      ctx.closePath();

      ctx.fillStyle =
        "#dabe78";

      ctx.fill();

      /* =====================================================
         TOP TEXT
      ===================================================== */

      drawCenterText(
        ctx,
        "THE WEDDING OF",
        225,
        "500 23px Arial",
        "#ffffff"
      );

      /* =====================================================
         NAMA PENGANTIN
      ===================================================== */

      const names =
        coupleName.split("&");

      const groom =
        names[0]?.trim() ||
        "Zaenal";

      const bride =
        names[1]?.trim() ||
        "Rahma";

      /* GROOM */

      const groomSize =
        drawFittedText(
          ctx,
          groom,
          800,
          72,
          42,
          "Georgia",
          "italic"
        );

      drawCenterText(
        ctx,
        groom,
        315,
        `italic ${groomSize}px Georgia`,
        "#ffffff"
      );

      /* AMPERSAND */

      drawCenterText(
        ctx,
        "&",
        380,
        "italic 43px Georgia",
        "#dabe78"
      );

      /* BRIDE */

      const brideSize =
        drawFittedText(
          ctx,
          bride,
          800,
          72,
          42,
          "Georgia",
          "italic"
        );

      drawCenterText(
        ctx,
        bride,
        445,
        `italic ${brideSize}px Georgia`,
        "#ffffff"
      );

      /* =====================================================
         ORNAMENT BELOW NAME
      ===================================================== */

      ctx.strokeStyle =
        "rgba(218,190,120,.62)";

      ctx.lineWidth = 1;

      ctx.beginPath();

      ctx.moveTo(
        455,
        510
      );

      ctx.lineTo(
        515,
        510
      );

      ctx.moveTo(
        565,
        510
      );

      ctx.lineTo(
        625,
        510
      );

      ctx.stroke();

      ctx.beginPath();

      ctx.arc(
        540,
        510,
        4,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        "#dabe78";

      ctx.fill();

      /* =====================================================
         PHOTO LIGHT
      ===================================================== */

      const glow =
        ctx.createRadialGradient(
          540,
          900,
          100,
          540,
          900,
          650
        );

      glow.addColorStop(
        0,
        "rgba(255,255,255,.065)"
      );

      glow.addColorStop(
        1,
        "rgba(255,255,255,0)"
      );

      ctx.fillStyle =
        glow;

      ctx.fillRect(
        100,
        500,
        880,
        750
      );

      /* =====================================================
         GUEST
      ===================================================== */

      const displayName =
        guestName.trim() ||
        "Tamu Undangan";

      const guestDisplay =
        withPartner
          ? `${displayName} & Partner`
          : displayName;

      /* =====================================================
         KEPADA
      ===================================================== */

      drawCenterText(
        ctx,
        "Kepada Yth.",
        1280,
        "500 35px Georgia",
        "#ffffff"
      );

      drawCenterText(
        ctx,
        "Bapak/Ibu/Saudara/i",
        1320,
        "500 31px Georgia",
        "#ffffff"
      );

      /* =====================================================
         GUEST NAME
      ===================================================== */

      const guestSize =
      drawFittedText(
        ctx,
        guestDisplay,
        850,
        64,
        34,
        "Georgia",
        "italic"
      );

      drawCenterText(
        ctx,
        guestDisplay,
        1390,
        `italic ${guestSize}px Georgia`,
        "#ffffff"
      );

      /* =====================================================
         DATE
      ===================================================== */

      drawCenterText(
        ctx,
        weddingDate,
        1475,
        "500 24px Georgia",
        "#ffffff"
      );

      /* =====================================================
         DESCRIPTION
      ===================================================== */

      drawCenterText(
        ctx,
        "Dengan penuh kebahagiaan",
        1555,
        "italic 20px Georgia",
        "#ffffff"
      );

      /* =====================================================
         BOTTOM ORNAMENT
      ===================================================== */

      ctx.strokeStyle =
        "rgba(218,190,120,.58)";

      ctx.lineWidth = 1;

      ctx.beginPath();

      ctx.moveTo(
        400,
        1635
      );

      ctx.lineTo(
        500,
        1635
      );

      ctx.moveTo(
        580,
        1635
      );

      ctx.lineTo(
        680,
        1635
      );

      ctx.stroke();

      ctx.beginPath();

      ctx.arc(
        540,
        1635,
        5,
        0,
        Math.PI * 2
      );

      ctx.strokeStyle =
        "#dabe78";

      ctx.stroke();

      /* =====================================================
         FOOTER DATE
      ===================================================== */

      drawCenterText(
        ctx,
        "05 • 09 • 2026",
        1760,
        "500 17px Arial",
        "#ffffff"
      );

      /* =====================================================
         FOOTER COUPLE
      ===================================================== */

      drawCenterText(
        ctx,
        "ZAENAL & RAHMA",
        1795,
        "500 12px Arial",
        "#ffffff"
      );

      /* =====================================================
         CONVERT TO BLOB
      ===================================================== */

      return await new Promise<Blob | null>(
        (resolve) => {
          canvas.toBlob(
            (blob) =>
              resolve(blob),
            "image/jpeg",
            0.95
          );
        }
      );
    };

  /* =========================================================
     CREATE PERSONAL URL
  ========================================================= */

  const createPersonalUrl = () => {
    const url =
      new URL(
        window.location.href
      );

    /* Hapus query lama */

    url.search = "";

    /* Nama tamu */

    url.searchParams.set(
      "to",
      guestName.trim()
    );

    /* Partner */

    if (withPartner) {
      url.searchParams.set(
        "partner",
        "true"
      );
    }

    return url.toString();
  };

  /* =========================================================
     WHATSAPP SHARE
  ========================================================= */

  const handleWhatsAppShare = () => {
    if (!guestName.trim()) {
      alert(
        "Masukkan nama tamu terlebih dahulu."
      );

      return;
    }

    const shareUrl =
      createPersonalUrl();

    const displayGuest =
      withPartner
        ? `${guestName.trim()} & Partner`
        : guestName.trim();

    const whatsappMessage =
      `Kepada Yth.\n` +
      `Bapak/Ibu/Saudara/i\n` +
      `${displayGuest}\n\n` +

      `Tanpa mengurangi rasa hormat, ` +
      `perkenankan kami mengundang ` +
      `Bapak/Ibu/Saudara/i, teman sekaligus ` +
      `sahabat, untuk menghadiri acara ` +
      `pernikahan kami.\n\n` +

      `Berikut link undangan kami, untuk ` +
      `informasi lengkap mengenai acara, ` +
      `dapat mengunjungi:\n\n` +

      `${shareUrl}\n\n` +

      `Merupakan suatu kebahagiaan bagi kami ` +
      `apabila Bapak/Ibu/Saudara/i berkenan ` +
      `untuk hadir dan memberikan doa restu.\n\n` +

      `Terima kasih.\n\n` +

      `Hormat kami,\n` +
      `${coupleName}`;

    const whatsappUrl =
      `https://wa.me/?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* =========================================================
     MAIN SHARE
  ========================================================= */

  const handleShare = async () => {
    if (!guestName.trim()) {
      alert(
        "Masukkan nama tamu terlebih dahulu."
      );

      return;
    }

    setIsSharing(true);

    try {
      /* PERSONAL LINK */

      const shareUrl =
        createPersonalUrl();

      /* CREATE STORY IMAGE */

      const blob =
        await createStoryImage();

      if (!blob) {
        throw new Error(
          "Gagal membuat gambar Story."
        );
      }

      /* FILE */

      const file =
        new File(
          [blob],
          `${coupleName.replace(
            /\s*&\s*/g,
            "-"
          )}-Invitation.jpg`,
          {
            type: "image/jpeg",
          }
        );

      /* SHARE TEXT */

      const displayGuest =
        withPartner
          ? `${guestName.trim()} & Partner`
          : guestName.trim();

      const shareText =
        `Kepada Yth.\n` +
        `Bapak/Ibu/Saudara/i\n` +
        `${displayGuest}\n\n` +

        `Tanpa mengurangi rasa hormat, ` +
        `perkenankan kami mengundang ` +
        `Bapak/Ibu/Saudara/i, teman sekaligus ` +
        `sahabat, untuk menghadiri acara ` +
        `pernikahan kami.\n\n` +

        `Berikut link undangan kami, untuk ` +
        `informasi lengkap mengenai acara, ` +
        `dapat mengunjungi:\n\n` +

        `${shareUrl}\n\n` +

        `Merupakan suatu kebahagiaan bagi kami ` +
        `apabila Bapak/Ibu/Saudara/i berkenan ` +
        `untuk hadir dan memberikan doa restu.\n\n` +

        `Terima kasih.\n\n` +

        `Hormat kami,\n` +
        `${coupleName}`;

      /* =====================================================
         NATIVE SHARE
      ===================================================== */

      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({
          files: [file],
        })
      ) {
        await navigator.share({
          title:
            `The Wedding ${coupleName}`,

          text:
            shareText,

          files: [file],
        });

        return;
      }

      /* =====================================================
         FALLBACK
      ===================================================== */

      if (
        navigator.clipboard &&
        window.isSecureContext
      ) {
        await navigator.clipboard.writeText(
          shareUrl
        );

        alert(
          "Link undangan berhasil disalin."
        );

        return;
      }

      /* Fallback terakhir */

      window.prompt(
        "Salin link undangan berikut:",
        shareUrl
      );
    } catch (error) {
      /* User menutup native share */

      console.log(
        "Share dibatalkan:",
        error
      );
    } finally {
      setIsSharing(false);
    }
  };

  /* =========================================================
     UI
  ========================================================= */

  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        py-20
      "
    >

      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_25%,rgba(218,190,120,.12),transparent_55%)]
        "
      />

      {/* =====================================================
          DECORATIVE ORNAMENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-10
          h-px
          w-20
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#dabe78]/60
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[37px]
          h-2
          w-2
          -translate-x-1/2
          rotate-45
          border
          border-[#dabe78]/70
          bg-paper
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-md
          text-center
        "
      >

        {/* LABEL */}

        <p
          className="
            font-body
            text-[10px]
            uppercase
            tracking-[0.34em]
            text-emerald/50
          "
        >
          Bagikan
        </p>

        {/* TITLE */}

        <h3
          className="
            mt-3
            font-display
            text-3xl
            text-emerald
          "
        >
          Sampaikan Kabar Bahagia
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mx-auto
            mt-4
            max-w-xs
            font-body
            text-xs
            leading-relaxed
            text-ink/45
          "
        >
          Bagikan momen bahagia ini kepada
          keluarga dan orang-orang terkasih.
        </p>

        {/* SHARE BUTTON */}

        <button
          type="button"
          onClick={handleShare}
          disabled={isSharing}
          className="
            group
            relative
            mt-8
            inline-flex
            items-center
            justify-center
            gap-3
            overflow-hidden
            rounded-full
            border
            border-[#dabe78]/70
            bg-emerald
            px-8
            py-3.5
            font-body
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-white
            shadow-[0_12px_35px_rgba(31,78,66,.18)]
            transition-all
            duration-500
            hover:-translate-y-0.5
            active:scale-95
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >

          {/* SHINE */}

          <span
            className="
              absolute
              inset-0
              -translate-x-full
              bg-gradient-to-r
              from-transparent
              via-white/15
              to-transparent
              transition-transform
              duration-700
              group-hover:translate-x-full
            "
          />

          {/* ICON */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative"
          >
            <circle
              cx="18"
              cy="5"
              r="3"
            />

            <circle
              cx="6"
              cy="12"
              r="3"
            />

            <circle
              cx="18"
              cy="19"
              r="3"
            />

            <line
              x1="8.59"
              y1="13.51"
              x2="15.42"
              y2="17.49"
            />

            <line
              x1="15.41"
              y1="6.51"
              x2="8.59"
              y2="10.49"
            />
          </svg>

          {/* TEXT */}

          <span className="relative">
            {isSharing
              ? "Menyiapkan..."
              : "Bagikan Undangan"}
          </span>
        </button>

        {/* =====================================================
            WHATSAPP BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={
            handleWhatsAppShare
          }
          disabled={
            isSharing ||
            !guestName.trim()
          }
          className="
            group
            relative
            mt-3
            inline-flex
            items-center
            justify-center
            gap-2.5
            rounded-full
            border
            border-emerald/20
            bg-white/60
            px-7
            py-3
            font-body
            text-[9px]
            uppercase
            tracking-[0.22em]
            text-emerald
            shadow-[0_8px_25px_rgba(31,78,66,.08)]
            backdrop-blur-md
            transition-all
            duration-500
            hover:-translate-y-0.5
            hover:border-[#dabe78]/60
            hover:bg-white/80
            active:scale-95
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M21 11.5a8.38 8.38 0 0 1-9 8.5 8.7 8.7 0 0 1-3.9-.9L3 20l1-4.7A8.38 8.38 0 0 1 3 11.5 8.5 8.5 0 1 1 21 11.5Z"
            />

            <path
              d="M8.5 9.5c.3 2 2 3.7 4 4"
            />

            <path
              d="M8.5 9.5c.2-.6.5-1 .9-1"
            />

            <path
              d="M13.5 13.5c.5-.1 1-.1 1.5.2"
            />
          </svg>

          <span>
            Kirim via WhatsApp
          </span>
        </button>

        {/* =====================================================
            PERSONAL LINK INFO
        ===================================================== */}

        {guestName.trim() && (
          <div
            className="
              mt-6
              flex
              items-center
              justify-center
              gap-2
              font-body
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-ink/30
            "
          >

            <span
              className="
                h-1
                w-1
                rounded-full
                bg-[#dabe78]/70
              "
            />

            <span>
              Undangan personal untuk{" "}
              <span className="text-emerald/55">
                {guestName.trim()}
              </span>
            </span>

            <span
              className="
                h-1
                w-1
                rounded-full
                bg-[#dabe78]/70
              "
            />

          </div>
        )}

      </div>
    </section>
  );
}
