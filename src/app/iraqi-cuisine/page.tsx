import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema } from "@/data/schema";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import SmartImage from "@/components/shared/SmartImage";

export const metadata: Metadata = createMetadata({
  title: "Iraqi Cuisine Guide — Samoon, Masgoof, Kanafa, Baklava | Al-Baghdady",
  description:
    "A guide to authentic Iraqi cuisine — samoon bread, masgoof, tashreeb, quzi, dolma, Iraqi biryani, kanafa, baklava and more. Served daily at our Iraqi bakery and breakfast café in Richardson, TX.",
  path: "/iraqi-cuisine/",
  keywords: [
    "best iraqi food dallas",
    "traditional iraqi food near me",
    "samoon bread dallas",
    "masgoof dallas",
    "iraqi cuisine guide",
    "iraqi sweets dallas",
  ],
});

const SPECIALTY_LINKS: Record<string, { href: string; label: string }> = {
  "Samoon": { href: "/specialties/bread/", label: "Read more about our samoon →" },
  "Kanafa": { href: "/specialties/kunafa/", label: "Read more about our kunafa →" },
  "Baklava": { href: "/specialties/baklava/", label: "Read more about our baklava →" },
  "Ladyfingers (Znood Al Sit)": {
    href: "/specialties/lady-fingers/",
    label: "Read more about our ladyfingers →",
  },
};

const DISHES = [
  {
    name: "Samoon",
    summary: "Iraq's traditional oval-shaped bread.",
    body: "Samoon is what holds an Iraqi meal together. It's an oval-shaped, diamond-faceted bread baked at high heat — crisp on the outside, pillowy and chewy inside. We bake fresh samoon throughout the day in our in-house stone oven. It's the perfect partner to kabob, shawarma, hummus, baba ganoush, and especially tashreeb (where torn samoon soaks up rich braised lamb broth).",
  },
  {
    name: "Kabob & Mixed Grill",
    summary: "Char-grilled meats, marinated in traditional Iraqi spices.",
    body: "Iraqi kabob is distinctive — ground meats (beef, lamb or chicken) seasoned with fresh herbs and spices, hand-shaped onto skewers, and char-grilled over open flame until smoky and juicy. Our mixed grill platter brings together beef kabob, lamb kabob, chicken tikka and chicken kabob, served with basmati rice, samoon and grilled vegetables. It's the centerpiece of any Iraqi feast.",
  },
  {
    name: "Masgoof",
    summary: "Iraq's national dish — traditional grilled fish.",
    body: "Masgoof is the dish Iraqis travel home for. A whole freshwater fish is butterflied, seasoned with tamarind and salt, and slow-cooked vertically beside an open fire until the skin chars and the flesh is meltingly tender. It's a dish for celebrations, gatherings, and anyone who wants to taste Iraq the way it's been eaten for centuries. We're one of the only restaurants in Dallas serving it.",
  },
  {
    name: "Tashreeb",
    summary: "Slow-braised lamb served over torn samoon bread.",
    body: "Tashreeb is comfort food, Iraqi-style. We slow-braise lamb until it falls apart, then ladle the rich broth over torn pieces of samoon bread. The bread soaks up everything — fat, spices, broth — and turns into something between a stew and a bread pudding. It's the dish you ask your grandmother to make.",
  },
  {
    name: "Quzi",
    summary: "Slow-roasted lamb shank on spiced rice.",
    body: "Quzi is the showstopper. A whole lamb shank, slow-roasted until the meat falls off the bone, served on a bed of fragrant basmati rice studded with raisins, pine nuts and toasted almonds. It's a wedding dish, a holiday dish, a 'we're celebrating something' dish.",
  },
  {
    name: "Dolma",
    summary: "Stuffed vegetables in tomato broth.",
    body: "Iraqi dolma is a labor of love. Grape leaves, peppers, onions, zucchini and sometimes tomato are hollowed out and stuffed with a seasoned mixture of rice, ground lamb, herbs and spices, then slow-cooked together in a tomato broth. The flavors meld for hours. We make it every single day.",
  },
  {
    name: "Iraqi Biryani",
    summary: "Layered basmati with chicken or lamb.",
    body: "Different from Indian biryani — Iraqi biryani is gentler in heat but rich in spice, with long-grain basmati rice layered with chicken or lamb, raisins, almonds and a unique Iraqi spice blend. Often served at celebrations and large family gatherings.",
  },
  {
    name: "Kanafa",
    summary: "Sticky cheese pastry soaked in syrup.",
    body: "Kanafa is the dessert that's having a moment everywhere — and we've been making it the right way for years. Shredded phyllo dough, melted cheese, rose-water syrup and crushed pistachios. The trick is the contrast: crispy top, gooey cheese center, syrupy sweetness. Reviewers consistently call ours the best in Dallas.",
  },
  {
    name: "Baklava",
    summary: "Layered phyllo with nuts and honey.",
    body: "Our baklava is made fresh in the bakery — paper-thin phyllo layered with walnut, pistachio and honey-syrup. We sell it by the piece or by the tray (perfect for parties, Eid, weddings).",
  },
  {
    name: "Ladyfingers (Znood Al Sit)",
    summary: "Crispy phyllo rolls filled with sweet cream.",
    body: "Crispy phyllo rolls stuffed with sweet cream and dipped in fragrant syrup. Light, crunchy and beautifully sweet. A bakery favorite.",
  },
];

export default function IraqiCuisinePage() {
  return (
    <>
      <SchemaInjector
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Iraqi Cuisine", url: "/iraqi-cuisine/" },
        ])}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Iraqi Cuisine", url: "/iraqi-cuisine/" },
        ]}
      />

      <section className="container-pad py-10 md:py-16 max-w-3xl">
        <div className="eyebrow">From Baghdad to Richardson</div>
        <h1 className="mb-6">Iraqi Cuisine — A Guide to the Foods of Baghdad</h1>
        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
          Iraqi cuisine is its own world. Distinct breads like samoon, slow-cooked stews, traditional grilled fish, and a bakery tradition stretching back centuries — all rooted in Mesopotamia. While Iraqi food shares some dishes with neighboring cuisines, the techniques, spice blends, and family recipes carry their own heritage. Here&apos;s a guide to what we serve at Albaghdady.
        </p>
      </section>

      <section className="container-pad pb-16 md:pb-24">
        <div className="grid gap-6">
          {DISHES.map((dish, i) => {
            const images = ["/Images/hero.webp", "/Images/dish-1.webp", "/Images/dish-2.webp", "/Images/dish-3.webp", "/Images/dish-4.webp", "/Images/bakery.webp"];
            const reverse = i % 2 === 1;
            const specialtyLink = SPECIALTY_LINKS[dish.name];
            return (
              <article
                key={dish.name}
                className={`card p-7 md:p-10 grid md:grid-cols-3 gap-7 md:gap-12 items-center ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="card-img aspect-square rounded-2xl overflow-hidden">
                  <SmartImage
                    src={images[i % images.length]}
                    alt={dish.name}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="w-full h-full"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="text-[11px] font-semibold text-[var(--color-text-muted)] uppercase tracking-[0.2em] mb-3">
                    {String(i + 1).padStart(2, "0")} — Dish
                  </div>
                  <h2 className="!text-2xl md:!text-3xl mb-3">{dish.name}</h2>
                  <div className="text-[var(--color-primary)] font-medium mb-4">{dish.summary}</div>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">{dish.body}</p>
                  {specialtyLink && (
                    <Link
                      href={specialtyLink.href}
                      className="text-sm font-medium text-[var(--color-primary)] hover:underline mt-3 inline-flex"
                    >
                      {specialtyLink.label}
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-16 flex flex-wrap gap-3 justify-center">
          <ThemeBtn href="/menu/" variant="primary">See Everything on the Menu</ThemeBtn>
          <ThemeBtn href="/specialties/" variant="secondary">Explore Our Specialties</ThemeBtn>
        </div>
      </section>
    </>
  );
}
