import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const fadeUp = { hidden: { y: 30, opacity: 0 }, show: { y: 0, opacity: 1 } };

export function About() {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.15 } } }}>
          <motion.span variants={fadeUp} className="text-primary font-semibold text-sm uppercase tracking-widest">Why Choose Us</motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 font-display text-4xl lg:text-5xl font-bold">
            Modern dentistry, designed around how you actually feel.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-muted-foreground text-lg leading-relaxed">
            From the moment you walk in, every detail - the lighting, the music, the way we explain things - is built to take the tension out of dentistry. Backed by a team of board-certified specialists and the latest digital tools.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {[["08+", "Years"], ["45+", "Specialists"], ["34k+", "Patients"]].map(([v, l]) => (
              <div key={l} className="rounded-xl bg-brand-soft p-4">
                <div className="font-display text-2xl font-bold text-primary">{v}</div>
                <div className="text-xs text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8">
            <Button asChild className="rounded-full bg-gradient-brand">
              <Link to="/about">Learn More About Us <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600" alt="Clinic" className="rounded-3xl shadow-card object-cover aspect-[3/4]" />
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600" alt="Treatment" className="rounded-3xl shadow-card object-cover aspect-[3/4] mt-10" />
        </motion.div>
      </div>
    </section>
  );
}
