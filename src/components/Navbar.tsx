import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/#services", label: "Services" },
  { to: "/#team", label: "Team" },
  { to: "/#blog", label: "Blog" },
  { to: "/#reviews", label: "Reviews" },
  { to: "/#faq", label: "FAQs" },
  { to: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-md bg-background/80 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
            <Sparkles className="h-5 w-5" />
          </span>
          <span>DentaLux</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.to} href={l.to} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild className="rounded-full bg-gradient-brand hover:opacity-95 shadow-elegant">
            <Link to="/booking">Book Now</Link>
          </Button>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.to} href={l.to} onClick={() => setOpen(false)} className="py-2 text-foreground/80">
                  {l.label}
                </a>
              ))}
              <Button asChild className="rounded-full bg-gradient-brand">
                <Link to="/booking">Book Now</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
