import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, Award, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { team, testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/team/$id")({
  loader: ({ params }) => {
    const member = team.find(t => t.id === params.id);
    if (!member) throw notFound();
    return { member };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.member.name} — DentaLux` }, { name: "description", content: `${loaderData?.member.name}, ${loaderData?.member.specialty} at DentaLux.` }],
  }),
  notFoundComponent: () => <div className="pt-32 text-center"><h1 className="font-display text-3xl">Doctor not found</h1></div>,
  errorComponent: ({ error }) => <div className="pt-32 text-center">{error.message}</div>,
  component: TeamMember,
});

function TeamMember() {
  const { member } = Route.useLoaderData();
  return (
    <div className="pt-32 pb-24 container mx-auto px-4">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
        <img src={member.img} alt={member.name} className="rounded-3xl shadow-elegant aspect-[4/5] object-cover" />
        <div>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">{member.specialty}</span>
          <h1 className="mt-2 font-display text-5xl font-bold">{member.name}</h1>
          <div className="mt-3 flex items-center gap-2">
            <Star className="h-5 w-5 fill-primary text-primary" />
            <span className="font-semibold">{member.rating}</span>
            <span className="text-muted-foreground">({member.reviews} reviews)</span>
          </div>
          <p className="mt-6 text-muted-foreground leading-relaxed">{member.name} brings over a decade of experience in {member.specialty.toLowerCase()}, blending technical precision with a warm, patient-first approach. Trained at top dental schools and continuously certified in the latest techniques.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-brand-soft p-5">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold">Education</h3>
              <p className="text-sm text-muted-foreground mt-1">DDS, UCSF School of Dentistry</p>
            </div>
            <div className="rounded-2xl bg-brand-soft p-5">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold">Certifications</h3>
              <p className="text-sm text-muted-foreground mt-1">Board-Certified · ADA Member</p>
            </div>
          </div>
          <Button asChild className="mt-8 rounded-full bg-gradient-brand"><Link to="/booking">Book with {member.name.split(" ")[1]}</Link></Button>
        </div>
      </motion.div>
      <div className="mt-20">
        <h2 className="font-display text-3xl font-bold">Patient reviews</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {testimonials.map(t => (
            <Card key={t.name} className="p-6">
              <div className="flex gap-1">{Array.from({length:5}).map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary"/>)}</div>
              <h3 className="mt-3 font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">"{t.quote}"</p>
              <p className="mt-3 text-sm font-medium">— {t.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
