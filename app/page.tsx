import Image from "next/image";

const CREAM_WHITE = "#faf5f0";

export default function Home() {
  return (
    <div
      className="h-dvh overflow-hidden"
      style={{ backgroundColor: CREAM_WHITE }}
    >
      {/* Title - fixed at top */}
      <header
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

      {/* Sliding wrapper - translateY is GPU-accelerated */}
      <div className="animate-hero-slide flex h-[165vh] flex-col">
        {/* Subtext - starts at bottom of first viewport */}
        <div className="flex h-screen shrink-0 flex-col justify-end px-8">
          <p
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

        {/* Image - takes the rest of the space */}
        <div className="relative h-[65vh] shrink-0 overflow-hidden">
          <Image
            src="/hero-image-mobile.png"
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
