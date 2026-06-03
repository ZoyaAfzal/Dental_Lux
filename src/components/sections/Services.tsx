import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl text-left">
            <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/20 text-primary bg-primary/5 hover:bg-primary/10 transition-colors uppercase tracking-widest text-[10px] font-bold">
              Complete Care, All in One Place
            </Badge>
            <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              Services built around <br className="hidden md:block" />
              your <span className="text-primary italic">natural smile</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-lg leading-relaxed border-l-2 border-primary/20 pl-6 hidden lg:block">
            Experience the next generation of dentistry with our state-of-the-art treatments and compassionate expert care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
            >
              <Card className="group p-8 h-full bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/40 hover:shadow-elegant transition-all duration-500 flex flex-col relative overflow-hidden">
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex justify-between items-start mb-8">
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-4xl shadow-inner border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors duration-500"
                  >
                    {s.icon}
                  </motion.div>
                  {s.price && (
                    <Badge variant="secondary" className="bg-secondary/50 backdrop-blur-md text-primary font-semibold group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                      From {s.price}
                    </Badge>
                  )}
                </div>

                <div className="relative z-10 flex-grow">
                  <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground/80 transition-colors duration-300">
                    {s.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-10 pt-6 border-t border-border/50 flex items-center justify-between">
                  <Link 
                    to="/services/$slug" 
                    params={{ slug: s.slug }} 
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm group/link"
                  >
                    Explore Service 
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <div className="flex -space-x-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="w-7 h-7 rounded-full border-2 border-card bg-primary/20 shadow-sm" />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
