import ThemeBtn from "../shared/ThemeBtn";
import SmartImage from "../shared/SmartImage";

export default function BakerySpotlight() {
  return (
    <section className="bg-[var(--color-warm-white)] section-pad">
      <div className="container-pad grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="card-img rounded-[28px] overflow-hidden aspect-square">
          <SmartImage
            src="/Images/bakery.webp"
            alt="Fresh-baked Iraqi sweets and samoon at Al-Baghdady bakery"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full h-full"
          />
        </div>

        <div>
          <div className="eyebrow">In-House Arabic Bakery</div>
          <h2 className="mb-6">Fresh samoon, kanafa<br />& Iraqi sweets — baked daily.</h2>
          <p className="text-lg text-[var(--color-text-muted)] mb-5 leading-relaxed">
            Our bakery turns out warm samoon bread, sticky-cheese kanafa, layered baklava,
            ladyfingers (znood al sit) and ma&apos;amoul cookies — all made from traditional
            Iraqi recipes.
          </p>
          <p className="text-base text-[var(--color-text-muted)] mb-8 leading-relaxed">
            Need a custom dessert tray for a wedding, Eid celebration or office event? We make
            them to order. Reviewers consistently call our kanafa and baklava &ldquo;the best in Dallas.&rdquo;
          </p>
          <div className="flex flex-wrap gap-3">
            <ThemeBtn href="/bakery/" variant="primary">Explore the Bakery</ThemeBtn>
            <ThemeBtn href="/catering/" variant="secondary">Order a Tray</ThemeBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
