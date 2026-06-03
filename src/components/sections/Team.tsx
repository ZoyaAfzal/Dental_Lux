import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { team } from "@/lib/site-data";

export function Team() {
  return (
    <section id="team" className="py-24 container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Specialists</span>
        <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">Meet the DentaLux Team</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((d, i) => (
          <motion.div
            key={d.id}
            initial={{ x: i % 2 ? 40 : -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <Card className="overflow-hidden bg-card hover:shadow-elegant transition-shadow">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={d.img} alt={d.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{d.name}</h3>
                <p className="text-sm text-muted-foreground">{d.specialty}</p>
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-semibold">{d.rating}</span>
                  <span className="text-muted-foreground">({d.reviews})</span>
                </div>
                <Link to="/team/$id" params={{ id: d.id }} className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all">
                  View Profile <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
