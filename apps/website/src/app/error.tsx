"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-accent-red mb-4">Oops</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-[#1B2A53] mb-6">
        Something went wrong
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center px-6 py-3 bg-[#1B2A53] text-white rounded-full font-bold hover:bg-[#E2231A] transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
