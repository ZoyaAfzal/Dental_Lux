import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Whitening } from "@/components/sections/Whitening";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { FAQ } from "@/components/sections/FAQ";
import { BookingCTA } from "@/components/sections/BookingCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DentaLux - Dental Care That Feels Right" },
      { name: "description", content: "Expert care, real comfort, and a smile you'll love. Book your appointment with our modern dental clinic." },
      { property: "og:title", content: "DentaLux - Dental Care That Feels Right" },
      { property: "og:description", content: "Expert care, real comfort, and a smile you'll love." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Whitening />
      <Team />
      <Testimonials />
      <Blog />
      <FAQ />
      <BookingCTA />
    </>
  );
}
