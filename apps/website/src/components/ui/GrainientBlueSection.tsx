import Grainient from "@/components/ui/Grainient";

/** Blue section WebGL gradient, lazily initialized near viewport. */
export default function GrainientBlueSection({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`.trim()}>
      <Grainient
        color1="#8FBFD9"
        color2="#1a5a8a"
        color3="#001a3a"
        timeSpeed={0}
        grainAnimated={false}
        maxDpr={1}
        lazy
        fallbackClassName="bg-grainient-blue"
        className="w-full h-full"
      />
    </div>
  );
}
