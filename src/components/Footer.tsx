import { Link } from "@tanstack/react-router";
import { Sparkles, Twitter, Instagram, Facebook, AtSign, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 font-display text-2xl font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
              <Sparkles className="h-5 w-5" />
            </span>
            DentaLux
          </div>
          <p className="mt-4 max-w-md text-primary-foreground/80">
            Expert care, real comfort, and a smile you'll love. Modern dentistry in a calm, welcoming clinic.
          </p>
          <div className="mt-6 flex gap-3">
            {[Twitter, Instagram, AtSign, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-primary-foreground/80 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#team">Team</a></li>
            <li><Link to="/booking">Book</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Reach Us</h4>
          <ul className="space-y-3 text-primary-foreground/80 text-sm">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@dentalux.care</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-primary-foreground/70">
          <div className="hidden sm:block" />
          <p className="flex items-center gap-1.5 hover:text-white transition-colors">
            Powered by 
            <a 
              href="https://axistechgroup.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-semibold underline underline-offset-4 decoration-white/20 hover:decoration-white"
            >
              AxisTechGroup
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
