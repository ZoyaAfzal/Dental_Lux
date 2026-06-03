import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — DentaLux" }, { name: "description", content: "Meet the team and philosophy behind DentaLux." }] }),
  component: About,
});

function About() {
  return (
    <div className="pt-32 pb-24 container mx-auto px-4 max-w-4xl">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">About DentaLux</span>
        <h1 className="mt-3 font-display text-5xl lg:text-6xl font-bold">Dentistry, reimagined for how you actually feel.</h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">DentaLux opened in 2018 with a simple idea: the dentist's office could be a calm, beautiful place, not a clinical one. Eight years and 34,000+ patients later, we still believe that.</p>
        <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400" alt="Clinic" className="mt-10 rounded-3xl shadow-elegant w-full aspect-[16/9] object-cover" />
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[["08+", "Years"], ["45+", "Specialists"], ["34k+", "Patients"]].map(([v, l]) => (
            <div key={l} className="rounded-2xl bg-brand-soft p-6 text-center">
              <div className="font-display text-3xl font-bold text-primary">{v}</div>
              <div className="text-sm text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild className="rounded-full bg-gradient-brand"><Link to="/booking">Book a Visit</Link></Button>
        </div>
      </motion.div>
    </div>
  );
}
