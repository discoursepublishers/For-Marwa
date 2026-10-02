"use client";

import { useEffect, useRef } from "react";

export default function Bouquet3D() {
  const bouquetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bouquet = bouquetRef.current;
    if (!bouquet) return;

    // Mouse tilt only on desktop
    const handlePointerMove = (event: PointerEvent) => {
      if (window.innerWidth < 768) return;

      const rect = bouquet.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      bouquet.style.setProperty("--tilt-x", `${y * -4}deg`);
      bouquet.style.setProperty("--tilt-y", `${x * 6}deg`);
    };

    const handlePointerLeave = () => {
      bouquet.style.setProperty("--tilt-x", "0deg");
      bouquet.style.setProperty("--tilt-y", "0deg");
    };

    bouquet.addEventListener("pointermove", handlePointerMove);
    bouquet.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      bouquet.removeEventListener("pointermove", handlePointerMove);
      bouquet.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={bouquetRef}
      className="
        relative
        mx-auto
        h-[500px]
        w-full
        max-w-[720px]
        sm:h-[620px]
        md:h-[680px]
      "
      style={
        {
          "--tilt-x": "0deg",
          "--tilt-y": "0deg",
        } as React.CSSProperties
      }
    >
      {/* Ground shadow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[7%]
          left-1/2
          h-[38px]
          w-[220px]
          -translate-x-1/2
          rounded-[50%]
          bg-[#8c5868]/20
          blur-[28px]
          sm:bottom-[8%]
          sm:h-[48px]
          sm:w-[300px]
        "
      />

      {/* Bouquet */}
      <div
        className="
          bouquet-image
          absolute
          left-1/2
          top-1/2
          w-[92%]
          max-w-[620px]
          -translate-x-1/2
          -translate-y-1/2
          sm:w-[88%]
        "
        style={{
          transform: `
            translate(-50%, -50%)
            rotateX(var(--tilt-x))
            rotateY(var(--tilt-y))
          `,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src="/bouquet/bouquet.png"
          alt="A bouquet of flowers"
          draggable={false}
          className="
            block
            h-auto
            w-full
            select-none
            object-contain
          "
        />

        {/* Very subtle light */}
        <div
          className="
            bouquet-shine
            pointer-events-none
            absolute
            inset-[8%]
            rounded-[45%]
            bg-gradient-to-br
            from-white/25
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* Butterflies */}
      <Butterflies />
    </div>
  );
}

/* ===================================================== */
/* BUTTERFLIES */
/* ===================================================== */

function Butterflies() {
  const butterflies = [
    {
      left: "8%",
      top: "24%",
      rotate: -15,
      delay: "0s",
      duration: "5s",
    },
    {
      left: "87%",
      top: "26%",
      rotate: 15,
      delay: "1s",
      duration: "5.5s",
    },
    {
      left: "6%",
      top: "55%",
      rotate: -8,
      delay: "2s",
      duration: "6s",
    },
    {
      left: "91%",
      top: "53%",
      rotate: 12,
      delay: "1.5s",
      duration: "5.8s",
    },
    {
      left: "22%",
      top: "12%",
      rotate: -10,
      delay: "2.5s",
      duration: "6.5s",
    },
  ];

  return (
    <>
      {butterflies.map((butterfly, index) => (
        <div
          key={index}
          className="absolute z-30"
          style={{
            left: butterfly.left,
            top: butterfly.top,
          }}
        >
          <img
            src="/bouquet/butterfly.png"
            alt=""
            draggable={false}
            className="
              butterfly-float
              pointer-events-none
              h-auto
              w-[28px]
              select-none
              object-contain
              sm:w-[42px]
              md:w-[52px]
            "
            style={{
              rotate: `${butterfly.rotate}deg`,
              animationDelay: butterfly.delay,
              animationDuration: butterfly.duration,
            }}
          />
        </div>
      ))}
    </>
  );
}