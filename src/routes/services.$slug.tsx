import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { services, faqs } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find(s => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.service.title} — DentaLux` },
      { name: "description", content: loaderData?.service.desc },
    ],
  }),
  notFoundComponent: () => <div className="pt-32 text-center"><h1 className="font-display text-3xl">Service not found</h1></div>,
  errorComponent: ({ error }) => <div className="pt-32 text-center">{error.message}</div>,
  component: ServicePage,
});

const steps = ["Consultation & exam", "Personalized treatment plan", "Comfort-first procedure", "Follow-up & aftercare"];

function ServicePage() {
  const { service } = Route.useLoaderData();
  return (
    <div className="pt-24">
      <section className="relative h-[55vh] flex items-end">
        <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1800" alt={service.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative container mx-auto px-4 pb-12 text-primary-foreground">
          <div className="text-5xl">{service.icon}</div>
          <h1 className="mt-3 font-display text-5xl lg:text-6xl font-bold">{service.title}</h1>
          <p className="mt-3 max-w-xl text-primary-foreground/85">{service.desc}</p>
        </motion.div>
      </section>
      <section className="py-20 container mx-auto px-4 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="font-display text-3xl font-bold">Full description</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">Our {service.title.toLowerCase()} program combines board-certified specialists with the latest digital tools and a calm, modern environment. Every plan is tailored to your goals, your budget, and your timeline - no upselling, no surprises.</p>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold">Process</h2>
            <ol className="mt-6 space-y-4">
              {steps.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-brand text-primary-foreground font-bold">{i+1}</span>
                  <div className="pt-1.5">{s}</div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold">FAQs</h2>
            <Accordion type="single" collapsible className="mt-6 space-y-3">
              {faqs.slice(0, 4).map((f, i) => (
                <AccordionItem key={i} value={`q-${i}`} className="rounded-2xl bg-brand-soft border-none px-5">
                  <AccordionTrigger className="hover:no-underline font-display text-lg">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-3xl bg-brand-soft p-6 sticky top-28">
            <div className="text-sm text-muted-foreground">Starting at</div>
            <div className="font-display text-4xl font-bold text-primary">{service.price}</div>
            <table className="mt-6 w-full text-sm">
              <tbody className="divide-y divide-border">
                <tr><td className="py-2">Initial consult</td><td className="py-2 text-right">$75</td></tr>
                <tr><td className="py-2">Standard visit</td><td className="py-2 text-right">{service.price}</td></tr>
                <tr><td className="py-2">Follow-up</td><td className="py-2 text-right">Included</td></tr>
              </tbody>
            </table>
            <Button asChild className="mt-6 w-full rounded-full bg-gradient-brand"><Link to="/booking">Book this service</Link></Button>
          </div>
        </aside>
      </section>
    </div>
  );
}
