import Grainient from "@/components/ui/Grainient";

/** Full-viewport WebGL gradient with tuned render cost. */
export default function GrainientBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 w-full h-full"
      aria-hidden
    >
      <Grainient
        color1="#8FBFD9"
        color2="#1a5a8a"
        color3="#001a3a"
        timeSpeed={0}
        grainAnimated={false}
        maxDpr={1.25}
        fallbackClassName="bg-grainient-blue"
        className="w-full h-full"
      />
    </div>
  );
}
