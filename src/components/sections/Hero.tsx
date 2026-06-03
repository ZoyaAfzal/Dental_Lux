import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 20 });
  const rounded = useTransform(spring, (v) => Math.floor(v).toLocaleString() + suffix);
  useEffect(() => { if (inView) mv.set(to); }, [inView, to, mv]);
  useEffect(() => rounded.on("change", (v) => { if (ref.current) ref.current.textContent = v; }), [rounded]);
  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 8, suffix: "+", label: "Years of Care" },
  { value: 235, suffix: "", label: "Specialists" },
  { value: 34000, suffix: "+", label: "Happy Patients" },
];

const stagger = { animate: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { initial: { y: 30, opacity: 0 }, animate: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" as const } } };

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1800" alt="Modern dental clinic" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-primary-glow/60" />
      </div>
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="container relative mx-auto px-4 pt-32 pb-20 text-primary-foreground"
      >
        <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-sm">
          ⭐ #1 Dental Clinic · Online Booking Available
        </motion.span>
        <motion.h1 variants={fadeUp} className="mt-6 max-w-4xl font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
          Dental Care That <em className="not-italic text-white/90">Feels Right.</em>
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg text-primary-foreground/85">
          Expert care, real comfort, and a smile you'll love - delivered by a team that treats you like family.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
          <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 shadow-elegant">
            <Link to="/booking">Book an Appointment <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20">
            <a href="#services">Explore Services</a>
          </Button>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-14 grid grid-cols-3 max-w-xl gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-4">
              <div className="font-display text-3xl font-bold">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs text-primary-foreground/75 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
