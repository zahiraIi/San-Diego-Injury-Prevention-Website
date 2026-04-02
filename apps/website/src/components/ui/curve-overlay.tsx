export default function CurveOverlay({
  position = "right",
  color = "bg-white",
  className = "",
}: {
  position?: "left" | "right" | "top" | "bottom";
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 z-10 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div
        className={`absolute w-[200vw] h-[200vw] sm:w-[150vw] sm:h-[150vw] lg:w-[120vw] lg:h-[120vw] rounded-[100%] ${color}
        ${
          position === "right"
            ? "-right-[100vw] sm:-right-[60vw] lg:-right-[40vw] -top-[50vw]"
            : position === "left"
            ? "-left-[100vw] sm:-left-[60vw] lg:-left-[40vw] -top-[50vw]"
            : position === "top"
            ? "-top-[150vw] sm:-top-[100vw] lg:-top-[80vw] left-1/2 -translate-x-1/2"
            : "-bottom-[150vw] sm:-bottom-[100vw] lg:-bottom-[80vw] left-1/2 -translate-x-1/2"
        }`}
      />
    </div>
  );
}
