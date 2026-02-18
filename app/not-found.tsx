import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B0F19] px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
        <p className="text-white/40 text-lg mb-2">Page Not Found</p>
        <p className="text-white/20 text-sm mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] text-black font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
