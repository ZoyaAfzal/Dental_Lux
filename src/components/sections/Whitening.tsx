import { motion } from "framer-motion";

const features = [
  { title: "In-Clinic", desc: "Up to 8 shades whiter in a single visit." },
  { title: "At-Home Kits", desc: "Custom trays + clinical-grade gel." },
  { title: "Stain Removal", desc: "Targeted treatment for coffee, wine, and tea." },
];

export function Whitening() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1800" alt="Whitening" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
      </div>
      <div className="container relative mx-auto px-4 text-primary-foreground">
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="max-w-2xl">
          <span className="text-white/80 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">Whiten Your Smile, Your Way.</h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">Three approaches, one goal - a brighter, more confident you.</p>
        </motion.div>
        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6"
            >
              <h3 className="font-display text-2xl font-bold">{f.title}</h3>
              <p className="mt-2 text-primary-foreground/80 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
