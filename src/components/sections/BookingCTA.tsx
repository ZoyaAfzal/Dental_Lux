import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Clock } from "lucide-react";
import { useState } from "react";
import { services } from "@/lib/site-data";

export function BookingCTA() {
  const [done, setDone] = useState(false);
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-elegant">
        <div className="relative bg-gradient-hero text-primary-foreground p-10 lg:p-12">
          <div className="absolute inset-0 opacity-30">
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="relative">
            <span className="text-white/80 font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
            <h2 className="mt-3 font-display text-4xl font-bold">Schedule your visit.</h2>
            <p className="mt-3 text-primary-foreground/80">Pick a time that works — we'll handle the rest.</p>
            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-3"><Clock className="h-5 w-5 mt-0.5" /><div><div className="font-semibold">Hours</div><div className="text-primary-foreground/75 text-sm">Mon–Fri 8am–7pm · Sat 9am–4pm</div></div></div>
            </div>
            <div className="mt-10 flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur p-4">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => <div key={i} className="h-9 w-9 rounded-full border-2 border-white/40 bg-white/20" />)}
              </div>
              <div className="text-sm"><span className="font-semibold">34k+ happy patients</span><br /><span className="text-primary-foreground/75">trust DentaLux yearly</span></div>
            </div>
          </div>
        </div>
        <div className="bg-card p-10 lg:p-12">
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div key="done" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center h-full text-center py-16">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }} className="grid h-20 w-20 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
                  <Check className="h-10 w-10" />
                </motion.div>
                <h3 className="mt-6 font-display text-2xl font-bold">Appointment requested</h3>
                <p className="mt-2 text-muted-foreground">We'll text you a confirmation within the hour.</p>
              </motion.div>
            ) : (
              <motion.form key="form" exit={{ opacity: 0 }} onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-4">
                <h3 className="font-display text-2xl font-bold mb-2">Book your appointment</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Full name" required />
                  <Input type="email" placeholder="Email" required />
                  <Input type="tel" placeholder="Phone" required />
                  <Input type="date" required />
                </div>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Service type" /></SelectTrigger>
                  <SelectContent>
                    {services.map(s => <SelectItem key={s.slug} value={s.slug}>{s.title}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Preferred time slot" /></SelectTrigger>
                  <SelectContent>
                    {["Morning (8–11am)", "Midday (11am–2pm)", "Afternoon (2–5pm)", "Evening (5–7pm)"].map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Textarea placeholder="Notes (optional)" rows={3} />
                <Button type="submit" size="lg" className="w-full rounded-full bg-gradient-brand">Schedule an Appointment</Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
