import HeroBanner from "@/components/home/HeroBanner";
import PressStrip from "@/components/home/PressStrip";
import ActionCards from "@/components/home/ActionCards";
import TrustBar from "@/components/home/TrustBar";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import BakerySpotlight from "@/components/home/BakerySpotlight";
import SocialProofQuotes from "@/components/home/SocialProofQuotes";
import Reviews from "@/components/home/Reviews";
import InstagramSection from "@/components/home/InstagramSection";
import FAQSection from "@/components/home/FAQSection";
import OurLocation from "@/components/home/OurLocation";
import SchemaInjector from "@/components/shared/SchemaInjector";
import { restaurantSchema, faqSchema } from "@/data/schema";
import { FAQS } from "@/data/faqs";

const HOME_FAQS = FAQS.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <SchemaInjector schema={[restaurantSchema(), faqSchema(HOME_FAQS)]} />
      <HeroBanner />
      <PressStrip />
      <ActionCards />
      <TrustBar />
      <FeaturedDishes />
      <BakerySpotlight />
      <SocialProofQuotes />
      <Reviews />
      <InstagramSection />
      <FAQSection faqs={HOME_FAQS} />
      <OurLocation />
    </>
  );
}
