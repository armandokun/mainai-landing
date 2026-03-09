"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CREAM_WHITE = "#faf5f0";
const DARK_BG = "#191919";

export default function Home() {
  const headerRef = useRef<HTMLElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const [slideDistance, setSlideDistance] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [envelopeStep, setEnvelopeStep] = useState(0);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (envelopeStep !== 0) return;

    setEnvelopeStep(1);
    // TODO: uncomment when ready for full sequence
    // setTimeout(() => setEnvelopeStep(2), 401);
    // setTimeout(() => setEnvelopeStep(3), 802);
  };

  return (
    <div style={{ backgroundColor: CREAM_WHITE }}>
      <section
        className="relative h-dvh overflow-hidden"
        style={{ backgroundColor: CREAM_WHITE }}
      >
        {/* Title */}
        <header
          ref={headerRef}
          className="absolute left-0 right-0 top-0 z-10 px-6 sm:px-8"
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
          <div className="flex h-dvh shrink-0 flex-col justify-end px-8">
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

          {/* Image - scaled by height and cropped horizontally */}
          <div className="hero-image relative h-dvh w-full shrink-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2">
              <img
                src="/hero-image.jpg"
                alt=""
                className="block h-[80%] w-auto max-w-none animate-hero-image-zoom"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex min-h-dvh items-center justify-center px-4 py-14"
        style={{ backgroundColor: DARK_BG }}
      >
        <div className="relative flex w-[341px] max-w-full items-center justify-center">
          {/* Step 0: Open envelope + form */}
          <div className="w-full">
            <div className="relative h-[432px] w-full overflow-hidden">
              {/* Back layer: envelope back + paper */}
              <svg
                viewBox="0 0 649 830"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 z-0 h-full w-full"
              >
                <path
                  d="M648.985 273.398V529.95H0.000244141V273.398C0.000244141 260.973 5.57229 249.203 15.1826 241.328L298.212 9.39275C313.495 -3.13092 335.491 -3.13092 350.774 9.39275L633.803 241.328C643.414 249.203 648.985 260.973 648.985 273.398Z"
                  fill="#DC321E"
                />
                <g
                  style={{
                    transition: "transform 400ms ease-in-out",
                    transform:
                      envelopeStep >= 1 ? "translateY(280px)" : "translateY(0)",
                  }}
                >
                  <path
                    d="M606.509 75.4076H42.4773V639.439H606.509V75.4076Z"
                    fill="#FAF5F0"
                  />
                </g>
              </svg>

              {/* Middle layer: text + form (slides down, goes behind front folds) */}
              <div
                className="absolute left-[22px] right-[22px] top-[72px] z-10 h-[206px]"
                style={{
                  transition: "transform 400ms ease-in-out",
                  transform:
                    envelopeStep >= 1 ? "translateY(160px)" : "translateY(0)",
                }}
              >
                <p
                  className="mx-auto mt-[10px] w-[75%] text-center text-[22px] leading-[24px] text-[#231f20]"
                  style={{ fontFamily: "var(--font-solar)" }}
                >
                  Užsiregistruok ir būk ten, kur viskas prasidės.
                </p>
              </div>

              <form
                className="absolute left-[17px] right-[17px] top-[289px] z-30"
                onSubmit={handleSubmit}
                style={{
                  transition: "opacity 300ms ease-out",
                  opacity: envelopeStep >= 1 ? 0 : 1,
                  pointerEvents: envelopeStep >= 1 ? "none" : "auto",
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Vardas"
                  autoComplete="name"
                  className="h-[34.23px] w-full rounded-[40.07px] border-[1.67px] border-[#faf5f0] bg-transparent px-[17.53px] text-[13.36px] leading-[17px] text-white placeholder:text-white/95 focus:outline-none"
                  style={{ fontFamily: "var(--font-solar)" }}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="El. paštas"
                  autoComplete="email"
                  className="mt-[10px] h-[34.23px] w-full rounded-[40.07px] border-[1.67px] border-[#faf5f0] bg-transparent px-[17.53px] text-[13.36px] leading-[17px] text-white placeholder:text-white/95 focus:outline-none"
                  style={{ fontFamily: "var(--font-solar)" }}
                />

                <button
                  type="submit"
                  className="mx-auto mt-[10px] flex h-[34px] w-[63px] cursor-pointer items-center justify-center rounded-[40.07px] border-[1.67px] border-[#faf5f0] bg-transparent text-[13.36px] leading-[17px] text-white transition-colors duration-200 hover:bg-[#faf5f0] hover:text-[#dc321e]"
                  style={{ fontFamily: "var(--font-solar)" }}
                >
                  Siųsti
                </button>
              </form>

              {/* Front layer: envelope front folds (on top of text) */}
              <svg
                viewBox="0 0 649 830"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute inset-0 z-20 h-full w-full"
              >
                <path
                  d="M0.000249646 816.11L0.00025936 705L649 705L649 816.111C649 821.492 649 819.005 649 830L335.508 830C226.505 830 197.505 830 239.006 830L4.29168e-06 830C0.000144822 823.345 0.000249176 821.492 0.000249646 816.11Z"
                  fill="#DC321E"
                />
                <path
                  d="M648.985 287.706V705.4H0.000244141V287.706L52.1298 305.82C59.7518 308.466 66.7288 312.691 72.5999 318.207L283.553 516.431H365.433L576.373 318.207C582.257 312.691 589.234 308.466 596.843 305.82L648.985 287.706Z"
                  fill="#DC321E"
                />
                <path
                  d="M648.985 705.4H0.000244141L17.958 674.225C21.1549 668.676 25.2581 663.7 30.0975 659.505L213.108 500.853C223.545 491.806 236.895 486.825 250.708 486.825H398.278C412.091 486.825 425.441 491.806 435.878 500.853L618.888 659.505C623.728 663.7 627.831 668.676 631.028 674.226L648.985 705.4Z"
                  fill="#DC321E"
                />
              </svg>
            </div>
          </div>

          {/* Steps 1-3: commented out while focusing on paper slide animation
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-400"
            style={{
              opacity: envelopeStep === 1 ? 1 : 0,
              pointerEvents: "none",
              transitionTimingFunction: "ease-out",
            }}
          >
            <img
              src="/envelope-closing.svg"
              alt=""
              className="h-auto w-full"
            />
          </div>

          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-400"
            style={{
              opacity: envelopeStep === 2 ? 1 : 0,
              pointerEvents: "none",
              transitionTimingFunction: "ease-in",
            }}
          >
            <img
              src="/envelope-closed.svg"
              alt=""
              className="h-auto w-full"
            />
          </div>

          <div
            className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-600"
            style={{
              opacity: envelopeStep === 3 ? 1 : 0,
              pointerEvents: "none",
              transitionTimingFunction: "ease-in",
            }}
          >
            <h2
              className="text-center text-[80px] leading-[0.9] tracking-[-0.02em] text-[#faf5f0]"
              style={{ fontFamily: "var(--font-marlfield)" }}
            >
              IKI GREITO!
            </h2>
            <p
              className="mt-6 text-center text-[22px] leading-[28px] text-[#faf5f0]"
              style={{ fontFamily: "var(--font-solar)" }}
            >
              Registracija
              <br />
              sėkminga.
            </p>
          </div>
          */}
        </div>
      </section>
    </div>
  );
}
