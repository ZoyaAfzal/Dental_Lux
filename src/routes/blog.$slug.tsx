import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { posts } from "@/lib/site-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find(p => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title} — DentaLux Journal` },
      { name: "description", content: loaderData?.post.excerpt },
      { property: "og:image", content: loaderData?.post.img },
    ],
  }),
  notFoundComponent: () => <div className="pt-32 text-center"><h1 className="font-display text-3xl">Article not found</h1></div>,
  errorComponent: ({ error }) => <div className="pt-32 text-center">{error.message}</div>,
  component: BlogPost,
});

const toc = ["Why this matters", "The science", "What we recommend", "Final thoughts"];

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = posts.filter(p => p.slug !== post.slug);
  return (
    <article className="pt-32 pb-24 container mx-auto px-4">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="max-w-3xl mx-auto">
        <Badge className="bg-brand-soft text-primary hover:bg-brand-soft">{post.category}</Badge>
        <h1 className="mt-4 font-display text-5xl lg:text-6xl font-bold leading-tight">{post.title}</h1>
        <p className="mt-4 text-muted-foreground">{post.read} read · DentaLux Editorial</p>
        <img src={post.img} alt={post.title} className="mt-8 rounded-3xl shadow-elegant w-full aspect-[16/9] object-cover" />
      </motion.div>
      <div className="mt-12 grid lg:grid-cols-[1fr_3fr] gap-12 max-w-6xl mx-auto">
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <div className="font-display text-sm font-semibold text-primary uppercase tracking-widest">On this page</div>
            <ul className="mt-4 space-y-3 text-sm">
              {toc.map(t => <li key={t} className="text-muted-foreground hover:text-primary cursor-pointer">{t}</li>)}
            </ul>
          </div>
        </aside>
        <div className="prose prose-lg max-w-none space-y-6 text-foreground/90 leading-relaxed">
          <p className="text-xl">{post.excerpt}</p>
          {toc.map((t, i) => (
            <div key={i}>
              <h2 className="font-display text-2xl font-bold mt-8">{t}</h2>
              <p className="text-muted-foreground">A confident smile is one of the most underrated forms of self-care in modern life. Yet most people deprioritize their dental health until something hurts. In this piece we share what our clinicians wish every patient knew, backed by current research and a decade of practice.</p>
              <p className="text-muted-foreground">From daily routine adjustments to in-clinic interventions, small consistent choices compound into lifelong oral health.</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 max-w-6xl mx-auto">
        <h2 className="font-display text-3xl font-bold">Related articles</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          {related.map(r => (
            <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }}>
              <Card className="overflow-hidden p-0 hover:shadow-elegant transition-shadow">
                <div className="grid sm:grid-cols-[140px_1fr]">
                  <img src={r.img} alt={r.title} className="h-full w-full object-cover aspect-square" />
                  <div className="p-5">
                    <Badge className="bg-brand-soft text-primary hover:bg-brand-soft text-xs">{r.category}</Badge>
                    <h3 className="mt-2 font-display font-semibold">{r.title}</h3>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
