import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { services, team } from "@/lib/site-data";

export const Route = createFileRoute("/booking")({
  head: () => ({ meta: [{ title: "Book an Appointment — DentaLux" }, { name: "description", content: "Schedule your visit with DentaLux in a few easy steps." }] }),
  component: Booking,
});

const stepTitles = ["Service", "Doctor", "Date & Time", "Your Info", "Confirm"];
const times = ["8:30 AM", "10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"];

function Booking() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<any>({});
  const next = () => setStep(s => Math.min(s + 1, 4));
  const back = () => setStep(s => Math.max(s - 1, 0));

  return (
    <div className="pt-32 pb-24 container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-10">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Booking</span>
        <h1 className="mt-2 font-display text-4xl lg:text-5xl font-bold">Schedule your appointment</h1>
      </div>
      <div className="flex items-center justify-between mb-10">
        {stepTitles.map((t, i) => (
          <div key={t} className="flex-1 flex items-center">
            <div className={`grid h-10 w-10 place-items-center rounded-full font-semibold text-sm transition ${i <= step ? "bg-gradient-brand text-primary-foreground" : "bg-brand-soft text-muted-foreground"}`}>{i < step ? <Check className="h-5 w-5" /> : i + 1}</div>
            {i < stepTitles.length - 1 && <div className={`flex-1 h-0.5 mx-2 transition ${i < step ? "bg-primary" : "bg-border"}`} />}
          </div>
        ))}
      </div>
      <Card className="p-8 min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -30, opacity: 0 }} transition={{ duration: 0.25 }}>
            <h2 className="font-display text-2xl font-bold mb-6">{stepTitles[step]}</h2>
            {step === 0 && (
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map(s => (
                  <button key={s.slug} onClick={() => { setData({ ...data, service: s.slug }); next(); }} className={`text-left p-4 rounded-2xl border-2 transition hover:border-primary ${data.service === s.slug ? "border-primary bg-brand-soft" : "border-border"}`}>
                    <div className="text-2xl">{s.icon}</div>
                    <div className="mt-2 font-semibold">{s.title}</div>
                  </button>
                ))}
              </div>
            )}
            {step === 1 && (
              <div className="grid sm:grid-cols-2 gap-3">
                {team.map(d => (
                  <button key={d.id} onClick={() => { setData({ ...data, doctor: d.id }); next(); }} className={`text-left p-4 rounded-2xl border-2 flex gap-3 items-center transition hover:border-primary ${data.doctor === d.id ? "border-primary bg-brand-soft" : "border-border"}`}>
                    <img src={d.img} alt={d.name} className="h-14 w-14 rounded-full object-cover" />
                    <div><div className="font-semibold">{d.name}</div><div className="text-xs text-muted-foreground">{d.specialty}</div></div>
                  </button>
                ))}
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4">
                <Input type="date" onChange={e => setData({ ...data, date: e.target.value })} />
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {times.map(t => (
                    <button key={t} onClick={() => setData({ ...data, time: t })} className={`p-3 rounded-xl border-2 text-sm transition ${data.time === t ? "border-primary bg-brand-soft" : "border-border hover:border-primary"}`}>{t}</button>
                  ))}
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-4">
                <Input placeholder="Full name" onChange={e => setData({ ...data, name: e.target.value })} />
                <Input type="email" placeholder="Email" onChange={e => setData({ ...data, email: e.target.value })} />
                <Input type="tel" placeholder="Phone" onChange={e => setData({ ...data, phone: e.target.value })} />
                <Textarea rows={3} placeholder="Notes (optional)" onChange={e => setData({ ...data, notes: e.target.value })} />
              </div>
            )}
            {step === 4 && (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }} className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
                  <Check className="h-10 w-10" />
                </motion.div>
                <h3 className="mt-6 font-display text-2xl font-bold">You're all set, {data.name || "friend"}!</h3>
                <p className="mt-2 text-muted-foreground">Confirmation sent to {data.email || "your inbox"}. See you on {data.date || "your selected date"} at {data.time || "your slot"}.</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
        {step < 4 && (
          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={back} disabled={step === 0} className="rounded-full"><ArrowLeft className="h-4 w-4 mr-1" /> Back</Button>
            <Button onClick={next} className="rounded-full bg-gradient-brand">{step === 3 ? "Confirm" : "Continue"} <ArrowRight className="h-4 w-4 ml-1" /></Button>
          </div>
        )}
      </Card>
    </div>
  );
}
