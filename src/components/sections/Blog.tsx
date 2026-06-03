import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { posts } from "@/lib/site-data";

export function Blog() {
  return (
    <section id="blog" className="py-24 container mx-auto px-4">
      <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
        <div>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">From the Journal</span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">Articles for healthier smiles</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <motion.div key={p.slug} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="overflow-hidden h-full bg-card hover:shadow-elegant transition-shadow group p-0">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <Badge className="bg-brand-soft text-primary hover:bg-brand-soft">{p.category}</Badge>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{p.excerpt}</p>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all">
                  Read Article <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
