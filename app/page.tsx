"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CREAM_WHITE = "#faf5f0";

export default function Home() {
  const headerRef = useRef<HTMLElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const [slideDistance, setSlideDistance] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    const subtext = subtextRef.current;
    if (!header || !subtext) return;

    const headerHeight = header.getBoundingClientRect().height;
    const subtextTop = subtext.getBoundingClientRect().top;
    const gap = subtextTop - headerHeight - 60;
    setSlideDistance(gap);

    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="h-dvh overflow-hidden"
      style={{ backgroundColor: CREAM_WHITE }}
    >
      {/* Title - fixed at top */}
      <header
        ref={headerRef}
        className="fixed left-0 right-0 top-0 z-10 px-6 sm:px-8"
        style={{
          backgroundColor: CREAM_WHITE,
          paddingTop: "max(1.5rem, env(safe-area-inset-top))",
        }}
      >
        <Image
          src="/logo/logo-black.svg"
          alt="Mainai"
          width={2500}
          height={740}
          priority
          className="mx-auto h-auto w-full max-w-[745px]"
        />
      </header>

      {/* Sliding wrapper - transition-driven */}
      <div
        className="flex flex-col"
        style={{
          height: `200vh`,
          willChange: "transform",
          transition: "transform 1s cubic-bezier(0.62, 0.01, 0.03, 1)",
          transform: animate
            ? `translateY(-${slideDistance}px)`
            : "translateY(0)",
        }}
      >
        {/* Subtext - starts at bottom of first viewport */}
        <div className="flex h-screen shrink-0 flex-col justify-end px-8">
          <p
            ref={subtextRef}
            className="pb-6 text-center text-[24px] leading-tight text-black/90"
            style={{ fontFamily: "var(--font-solar)" }}
          >
            Kur svetimi tampa
            <br />
            pažįstamais, o paprasti
            <br />
            dalykai sujungia.
          </p>
        </div>

        {/* Image */}
        <div className="relative min-h-[100vh] overflow-hidden">
          <Image
            src="/hero-image.png"
            alt=""
            fill
            sizes="100vw"
            className="animate-hero-image-zoom object-cover object-bottom sm:hidden"
            priority
          />
          <Image
            src="/hero-image.png"
            alt=""
            fill
            sizes="100vw"
            priority
            className="animate-hero-image-zoom object-cover object-bottom hidden sm:block"
          />
        </div>
      </div>
    </div>
  );
}
