import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image src="/websiteImages/bg/homeBg.jpg" alt="Background" fill priority className="object-cover" />

      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="relative z-10 flex h-[100dvh] w-full flex-col items-center justify-center px-5 text-center text-white backdrop-blur-[8px] sm:px-8 lg:px-10">

        <h1 className="ibm-title text-[clamp(2.5rem,10vw,6rem)] uppercase tracking-[0.12em] sm:tracking-[0.18em] lg:tracking-[0.22em]">
          HRAVIRAT
        </h1>

        <p className="ibm-text mt-3 text-[11px] uppercase tracking-[0.2em] text-white/90 sm:mt-4 sm:text-sm sm:tracking-[0.35em] lg:text-base lg:tracking-[0.45em]">
          Digital Invitations
        </p>

        <h2 className="ibm-heading mt-10 text-[clamp(1.75rem,6vw,4rem)] italic sm:mt-14 lg:mt-16">Coming Soon</h2>

        <p className="ibm-text mt-4 max-w-[320px] text-xs leading-6 text-white/80 sm:mt-5 sm:max-w-md sm:text-sm sm:leading-7 lg:text-base">
          We are crafting a new experience for timeless digital invitations. Stay connected and be the first to discover
          it.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:mt-12 sm:gap-8">
          <Link
            href="https://instagram.com/hravirat"
            target="_blank"
            className="ibm-text text-xs uppercase tracking-[0.12em] transition-opacity hover:opacity-70 sm:text-sm sm:tracking-[0.15em]"
          >
            Instagram
          </Link>

          <span className="hidden h-1 w-1 rounded-full bg-white/60 sm:block" />

          <Link
            href="https://t.me/ruver13"
            target="_blank"
            className="ibm-text text-xs uppercase tracking-[0.12em] transition-opacity hover:opacity-70 sm:text-sm sm:tracking-[0.15em]"
          >
            Telegram
          </Link>
        </div>
      </div>
    </main>
  );
}
