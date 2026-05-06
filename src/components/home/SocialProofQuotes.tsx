import { PRESS_QUOTES } from "@/data/reviews";

export default function SocialProofQuotes() {
  return (
    <section className="bg-[var(--color-text)] text-white section-pad">
      <div className="container-pad">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="eyebrow text-[var(--color-gold)]">What People Are Saying</div>
          <h2 style={{ color: "#ffffff" }}>Recognized across DFW.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRESS_QUOTES.map((p) => (
            <article
              key={p.quote}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 transition-all duration-500 hover:bg-white/[0.07] hover:-translate-y-1 hover:border-white/20"
            >
              <div
                className="text-[var(--color-gold)] text-5xl leading-none mb-3 italic"
                style={{ fontFamily: "var(--font-accent)", fontWeight: 500 }}
              >
                &ldquo;
              </div>
              <blockquote className="text-lg font-medium mb-5 leading-snug tracking-tight">
                {p.quote}
              </blockquote>
              <cite className="text-[11px] not-italic opacity-70 uppercase tracking-[0.18em]">
                {p.source}
              </cite>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
