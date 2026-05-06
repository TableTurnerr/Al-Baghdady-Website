import type { Metadata } from "next";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema } from "@/data/schema";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";

export const metadata: Metadata = createMetadata({
  title: "Our Story — Family-Owned Iraqi Restaurant in Richardson | Al-Baghdady",
  description:
    "The story of Al-Baghdady — a family-owned Iraqi restaurant and bakery serving authentic Baghdady cuisine in Richardson TX since opening day. Halal certified.",
  path: "/our-story/",
  keywords: ["al-baghdady restaurant story", "iraqi family restaurant dallas", "authentic iraqi cuisine richardson"],
});

export default function OurStoryPage() {
  return (
    <>
      <SchemaInjector
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Our Story", url: "/our-story/" },
        ])}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Our Story", url: "/our-story/" },
        ]}
      />

      <section className="container-pad py-12 md:py-20 max-w-3xl">
        <div className="eyebrow">Our Story</div>
        <h1 className="mb-8">From Baghdad to Richardson — A Family Recipe</h1>

        <div className="aspect-[16/9] rounded-[var(--radius-section)] overflow-hidden mb-12 shadow-[0_30px_80px_-30px_rgba(26,20,16,0.35)]">
          <div
            className="w-full h-full bg-cover-center"
            style={{ backgroundImage: "url('/Images/hero.jpg')" }}
            role="img"
            aria-label="Al-Baghdady Restaurant family kitchen"
          />
        </div>

        <div className="prose-content space-y-6 text-[var(--color-text)] text-lg leading-relaxed">
          <p>
            Al-Baghdady was born from a simple idea: to bring the food we grew up with —
            real Iraqi cuisine, the way our mothers and grandmothers made it — to the Dallas-Fort Worth community.
            For over a decade, our family has been char-grilling kabobs, slow-cooking quzi and dolma,
            and baking samoon bread in our stone oven, all from the same recipes that have been
            passed down for generations.
          </p>

          <h2 className="!mt-12 !mb-4">Why &ldquo;Al-Baghdady&rdquo;</h2>
          <p>
            The name means &ldquo;from Baghdad&rdquo; — and that&apos;s exactly the cooking we do.
            Iraqi food is its own thing: heavier on slow-cooked stews, traditional grilled fish (masgoof),
            distinct breads like samoon, and spice blends rooted in the heritage of Mesopotamia.
            While Mediterranean and Lebanese cuisines share some dishes with us, Iraqi cooking has its
            own soul — one we wanted to share honestly with our adopted home.
          </p>

          <h2 className="!mt-12 !mb-4">The Bakery Came Home With Us</h2>
          <p>
            In Iraq, no meal is complete without freshly baked bread and sweets — and the same is true here.
            We built our in-house Arabic bakery so that every loaf of samoon, every tray of kanafa,
            every piece of baklava is made fresh on site every single day. Reviewers consistently call our
            kanafa and baklava the best in Dallas; we think it&apos;s because we make it the way it was always meant to be made.
          </p>

          <h2 className="!mt-12 !mb-4">Halal &amp; Family-First</h2>
          <p>
            From day one, Al-Baghdady has been 100% halal. Every supplier is certified, our kitchen is
            Zabihah-verified, and there is no compromise — not on the meat, not on the cooking. We&apos;re a
            family-owned business that welcomes families: high chairs, kid menus, big tables, warm
            hospitality. If you&apos;ve ever felt at home in your grandmother&apos;s kitchen, you&apos;ll feel it here.
          </p>

          <h2 className="!mt-12 !mb-4">1,892 Reviews and Counting</h2>
          <p>
            We&apos;ve been blessed with the Dallas community&apos;s support. With over 1,892 reviews on Google at a
            4.4-star average, Al-Baghdady has become the most-reviewed Iraqi restaurant in DFW. Customers
            come from Plano, Garland, Addison, Allen, McKinney and every corner of North Dallas.
            We&apos;re grateful — and we&apos;re still cooking the same way we did on day one.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-12">
          <ThemeBtn href="/menu/" variant="primary">See the Menu</ThemeBtn>
          <ThemeBtn href="/catering/" variant="secondary">Catering Inquiries</ThemeBtn>
        </div>
      </section>
    </>
  );
}
