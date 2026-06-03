import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-brand-soft">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Reviews</span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">What Our Patients Say</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }}>
              <Card className="p-7 h-full bg-card">
                <Quote className="h-8 w-8 text-primary/30" />
                <div className="mt-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">"{t.quote}"</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-semibold text-sm">{t.name}</span>
                  <Badge variant="secondary" className="bg-brand-soft text-primary">{t.specialty}</Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
