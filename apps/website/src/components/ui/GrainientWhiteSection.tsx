import Grainient from "@/components/ui/Grainient";

/** White section WebGL gradient, lazily initialized near viewport. */
export default function GrainientWhiteSection({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`.trim()}>
      <Grainient
        color1="#FFFFFF"
        color2="#F5F5F5"
        color3="#E8E8E8"
        timeSpeed={0}
        grainAnimated={false}
        maxDpr={1}
        lazy
        fallbackClassName="bg-grainient-white"
        className="w-full h-full"
      />
    </div>
  );
}
