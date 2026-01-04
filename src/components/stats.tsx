import BlurFade from "@/components/magicui/blur-fade";

interface StatItemProps {
  value: string;
  label: string;
  delay: number;
}

const StatItem = ({ value, label, delay }: StatItemProps) => (
  <BlurFade delay={delay}>
    <div className="flex flex-col items-center space-y-2">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm text-muted-foreground text-center">{label}</div>
    </div>
  </BlurFade>
);

export default function Stats() {
  return (
    <section className="w-full py-12" id="stats" >
      <BlurFade delay={0.1}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              My Stats
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Achievements & Experience Overview
            </h2>
          </div>
        </div>
      </BlurFade>

      <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto">
        <StatItem value="3+" label="Years of Experience" delay={0.2} />
        <StatItem value="10+" label="Projects Completed" delay={0.3} />
        <StatItem value="7+" label="Happy Clients" delay={0.4} />
        <StatItem value="100%" label="Client Satisfaction" delay={0.5} />
      </div>
    </section>
  );
}