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
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (!isDesktop) {
      const header = headerRef.current;
      const subtext = subtextRef.current;
      if (!header || !subtext) return;

      const headerHeight = header.getBoundingClientRect().height;
      const subtextTop = subtext.getBoundingClientRect().top;
      const gap = subtextTop - headerHeight - 60;
      setSlideDistance(gap);
    }

    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (envelopeStep !== 0) return;

    setEnvelopeStep(1);
    setTimeout(() => setEnvelopeStep(2), 420);
    setTimeout(() => setEnvelopeStep(3), 900);
  };

  return (
    <div style={{ backgroundColor: CREAM_WHITE }}>
      <section
        className="relative h-dvh overflow-hidden"
        style={{ backgroundColor: CREAM_WHITE }}
      >
        {/* === DESKTOP HERO (lg+) === */}
        <div className="hidden h-full md:block">
          {/* Left panel: title + subtitle */}
          <div
            className="relative z-10 flex h-full w-1/2 flex-col justify-between px-12 pb-12 pt-10"
            style={{
              transition: "transform 1s cubic-bezier(0.62, 0.01, 0.03, 1)",
              transform: animate ? "translateX(0)" : "translateX(50%)",
            }}
          >
            <Image
              src="/logo/logo-black.svg"
              alt="Mainai"
              width={2500}
              height={740}
              priority
              className="h-auto w-full"
            />
            <p
              className="text-center text-[28px] leading-tight text-black/90"
              style={{ fontFamily: "var(--font-solar)" }}
            >
              Kur svetimi tampa
              <br />
              pažįstamais, o paprasti
              <br />
              dalykai sujungia.
            </p>
          </div>

          {/* Right panel: photo slides in from right */}
          <div
            className="absolute bottom-0 right-0 top-0 w-1/2 overflow-hidden"
            style={{
              transition: "transform 1s cubic-bezier(0.62, 0.01, 0.03, 1)",
              transform: animate ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <img
              src="/hero-image.jpg"
              alt=""
              className="h-full w-full object-cover animate-hero-image-zoom"
            />
          </div>
        </div>

        {/* === MOBILE HERO (< lg) === */}
        <div className="relative md:hidden">
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
        </div>
      </section>

      <section
        className="flex min-h-[80dvh] items-center justify-center px-4 py-16 md:min-h-dvh md:py-24"
        style={{ backgroundColor: DARK_BG }}
      >
        <div className="relative flex w-[341px] max-w-full items-center justify-center md:w-[460px] md:min-h-[583px]">
          {/* Step 0: Open envelope + form */}
          <div className="w-full md:origin-center md:scale-[1.35] xl:scale-[1.45]">
            <div
              className="relative h-[432px] w-full"
              style={{
                perspective: "800px",
                transition: "transform 400ms ease-in-out",
                transform:
                  envelopeStep >= 2 ? "translateY(-100px)" : "translateY(0)",
              }}
            >
              {/* Back layer: envelope back + paper */}
              <svg
                viewBox="0 0 649 830"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 z-0 h-full w-full"
                preserveAspectRatio="none"
              >
                {/* Red fill behind the flap area */}
                <rect x="0" y="268" width="649" height="562" fill="#DC321E" />
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

              {/* Flap layer: triangle that folds closed with 3D rotation */}
              <div
                style={{
                  position: "absolute",
                  top: "-11.5px",
                  left: 0,
                  right: 0,
                  zIndex: envelopeStep >= 2 ? 40 : -1,
                  height: "35%",
                  overflow: "hidden",
                  transformOrigin: "center bottom",
                  transition: "transform 400ms ease-in-out",
                  transform:
                    envelopeStep >= 2 ? "rotateX(180deg)" : "rotateX(0deg)",
                }}
              >
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                  overflow="hidden"
                >
                  <polygon points="50,0 100,100 0,100" fill="#DC321E" />
                </svg>
              </div>

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
                  className="mx-auto mt-[30px] w-[85%] text-center text-[23px] leading-[1.05] text-[#231f20] md:text-[28px] lg:text-[30px]"
                  style={{ fontFamily: "var(--font-solar)" }}
                >
                  Užsiregistruok ir būk ten, <br /> kur viskas prasidės.
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

                <div className="mt-[10px] flex w-full items-center gap-3">
                  <p
                    className="w-[60%] text-[7px] font-medium tracking-[0.05em] leading-[124%] text-white/90 md:w-[80%] md:text-[9px] lg:text-[9px]"
                    style={{ fontFamily: "var(--font-solar)" }}
                  >
                    Pateikdami savo duomenis sutinkate gauti mūsų
                    naujienlaiškius bei pasiūlymus ir patvirtinate, kad
                    susipažinote su mūsų{" "}
                    <a
                      href="/privatumo-politika"
                      className="underline underline-offset-2"
                    >
                      Privatumo politika.
                    </a>
                  </p>
                  <button
                    type="submit"
                    className="ml-auto shrink-0 flex h-[34px] w-[63px] cursor-pointer items-center justify-center rounded-[40.07px] border-[1.67px] border-[#faf5f0] bg-transparent text-[13.36px] leading-[17px] text-white transition-colors duration-200 hover:bg-[#faf5f0] hover:text-[#dc321e]"
                    style={{ fontFamily: "var(--font-solar)" }}
                  >
                    Siųsti
                  </button>
                </div>
              </form>

              {/* Front layer: envelope front folds (on top of text) */}
              <svg
                viewBox="0 0 649 830"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute inset-0 z-20 h-full w-full"
                preserveAspectRatio="none"
              >
                <rect x="0" y="700" width="649" height="130" fill="#DC321E" />
                <path
                  d="M648.985 287.706V705.4H0.000244141V287.706L52.1298 305.82C59.7518 308.466 66.7288 312.691 72.5999 318.207L283.553 516.431H365.433L576.373 318.207C582.257 312.691 589.234 308.466 596.843 305.82L648.985 287.706Z"
                  fill="#DC321E"
                />
                <path
                  d="M648.985 705.4H0.000244141L17.958 674.225C21.1549 668.676 25.2581 663.7 30.0975 659.505L213.108 500.853C223.545 491.806 236.895 486.825 250.708 486.825H398.278C412.091 486.825 425.441 491.806 435.878 500.853L618.888 659.505C623.728 663.7 627.831 668.676 631.028 674.226L648.985 705.4Z"
                  fill="#DC321E"
                />
              </svg>
              {/* Step 3: Success text */}
              <div
                className="absolute bottom-0 left-0 top-[140px] right-0 z-50 flex flex-col items-center justify-between"
                style={{
                  opacity: envelopeStep === 3 ? 1 : 0,
                  pointerEvents: "none",
                  transition: "opacity 600ms ease-in",
                }}
              >
                <h2
                  className="whitespace-nowrap pt-[10px] text-center text-[65px] text-[#faf5f0]"
                  style={{
                    fontFamily: "var(--font-marlfield)",
                    transform: "scaleY(1.5)",
                  }}
                >
                  IKI GREITO!
                </h2>
                <p
                  className="pb-[10px] text-center text-[25px] leading-[26px] text-[#faf5f0]"
                  style={{ fontFamily: "var(--font-solar)" }}
                >
                  Registracija
                  <br />
                  sėkminga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="-mt-px px-6 pb-[52px] pt-16 sm:px-8 md:pb-10 md:pt-0"
        style={{ backgroundColor: DARK_BG }}
      >
        {/* Mobile footer */}
        <div className="md:hidden">
          <div className="mx-auto max-w-[745px]">
            <Image
              src="/logo/logo-white.svg"
              alt="Mainai"
              width={2500}
              height={740}
              className="h-auto w-full"
            />
          </div>

          <div className="mx-auto mt-10 flex max-w-[745px] items-end justify-between gap-8">
            <div
              className="text-[15px] leading-[1.4] sm:text-[17px]"
              style={{
                fontFamily: "var(--font-solar)",
                color: CREAM_WHITE,
              }}
            >
              <p>
                Tel. nr.:
                <br />
                <a
                  href="tel:+37069131019"
                  className="underline underline-offset-2"
                >
                  +37069131019
                </a>
              </p>
              <p className="mt-3">
                Savanorių pr. 178B, Vilnius,
                <br />
                03154 Vilniaus m. sav.
              </p>
            </div>

            <div className="flex flex-col items-end gap-4">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/mainai.social/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Image
                    src="/icon-instagram.svg"
                    alt=""
                    width={22}
                    height={22}
                  />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61586391449827"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Image
                    src="/icon-facebook.svg"
                    alt=""
                    width={22}
                    height={22}
                  />
                </a>
              </div>
              <a
                href="/privatumo-politika"
                className="text-[15px] sm:text-[17px]"
                style={{
                  fontFamily: "var(--font-solar)",
                  color: CREAM_WHITE,
                }}
              >
                Privatumo politika
              </a>
            </div>
          </div>
        </div>

        {/* Desktop/tablet footer */}
        <div className="relative hidden items-center justify-between md:flex">
          {/* Left: contact info */}
          <div
            className="flex gap-8 text-[14px] leading-[1.4]"
            style={{
              fontFamily: "var(--font-solar)",
              color: CREAM_WHITE,
            }}
          >
            <p>
              Savanorių pr. 178B, Vilnius,
              <br />
              03154 Vilniaus m. sav.
            </p>
            <p>
              Tel. nr.:
              <br />
              <a
                href="tel:+37069131019"
                className="underline underline-offset-2"
              >
                +37069131019
              </a>
            </p>
          </div>

          {/* Center: logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/logo/logo-white.svg"
              alt="Mainai"
              width={2500}
              height={740}
              className="h-auto w-[154px]"
            />
          </div>

          {/* Right: privacy + socials */}
          <div className="flex items-center gap-6">
            <a
              href="/privatumo-politika"
              className="text-[14px]"
              style={{
                fontFamily: "var(--font-solar)",
                color: CREAM_WHITE,
              }}
            >
              Privatumo politika
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/mainai.social/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/icon-instagram.svg"
                  alt=""
                  width={22}
                  height={22}
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61586391449827"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Image src="/icon-facebook.svg" alt="" width={22} height={22} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
