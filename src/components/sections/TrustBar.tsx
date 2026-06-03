import { motion } from "framer-motion";

const brands = ["Invisalign", "Philips Sonicare", "Colgate Pro", "Oral-B", "3M ESPE", "Henry Schein", "Dentsply", "Straumann"];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-brand-soft py-8 overflow-hidden">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...brands, ...brands].map((b, i) => (
          <span key={i} className="font-display text-2xl font-semibold text-primary/40">{b}</span>
        ))}
      </motion.div>
    </section>
  );
}
