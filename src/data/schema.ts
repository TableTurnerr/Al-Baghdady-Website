import { RESTAURANT } from "./restaurant";
import { MENU } from "./menu";
import { FAQS, type FAQ } from "./faqs";

const BASE_URL = RESTAURANT.url;

const openingHoursSpecification = RESTAURANT.hours.map((h) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: h.day,
  opens: h.open,
  closes: h.close,
}));

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: RESTAURANT.address.street,
  addressLocality: RESTAURANT.address.city,
  addressRegion: RESTAURANT.address.state,
  postalCode: RESTAURANT.address.zip,
  addressCountry: RESTAURANT.address.country,
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: RESTAURANT.legalName,
    alternateName: [
      "Al-Baghdady Bakery & Café",
      "Al-Baghdady Restaurant",
      "Al-Baghdady",
      "Albaghdady",
      "Salam Grill",
    ],
    url: BASE_URL,
    logo: `${BASE_URL}/Images/logo.webp`,
    image: `${BASE_URL}/Images/og-default.jpg`,
    telephone: RESTAURANT.phone,
    email: RESTAURANT.email,
    address: postalAddress,
    foundingDate: RESTAURANT.founded,
    description: `Family-owned Iraqi bakery and breakfast café in Richardson, TX. Founded ${RESTAURANT.founded}; family recipes since ${RESTAURANT.familyRecipeSince}.`,
    sameAs: Object.values(RESTAURANT.socials),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: RESTAURANT.name,
    description: RESTAURANT.shortDescription,
    publisher: { "@id": `${BASE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function restaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${BASE_URL}/#restaurant`,
    name: RESTAURANT.name,
    alternateName: ["Al-Baghdady", "Albaghdady Restaurant", "Salam Grill"],
    description: RESTAURANT.longDescription,
    url: BASE_URL,
    telephone: RESTAURANT.phone,
    email: RESTAURANT.email,
    priceRange: RESTAURANT.priceRange,
    image: [
      `${BASE_URL}/Images/og-default.jpg`,
      `${BASE_URL}/Images/hero-mixed-grill.webp`,
      `${BASE_URL}/Images/bakery-spread.webp`,
    ],
    logo: `${BASE_URL}/Images/logo.webp`,
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: RESTAURANT.geo.latitude,
      longitude: RESTAURANT.geo.longitude,
    },
    servesCuisine: RESTAURANT.cuisine,
    paymentAccepted: RESTAURANT.paymentAccepted,
    currenciesAccepted: RESTAURANT.currenciesAccepted,
    openingHoursSpecification,
    hasMenu: `${BASE_URL}/menu/`,
    acceptsReservations: "True",
    areaServed: RESTAURANT.areasServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RESTAURANT.ratingValue,
      reviewCount: RESTAURANT.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: Object.values(RESTAURANT.socials),
  };
}

export function menuSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${BASE_URL}/menu/#menu`,
    name: `${RESTAURANT.name} Menu`,
    description:
      "Authentic Iraqi cuisine: kabob platters, shawarma, traditional specialties, mezze, fresh-baked samoon and Iraqi sweets.",
    hasMenuSection: MENU.map((category) => ({
      "@type": "MenuSection",
      name: category.name,
      description: category.description,
      hasMenuItem: category.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        offers: {
          "@type": "Offer",
          price: item.price.replace(/[^0-9.]/g, ""),
          priceCurrency: "USD",
        },
        suitableForDiet: [
          ...(item.vegetarian ? ["https://schema.org/VegetarianDiet"] : []),
          "https://schema.org/HalalDiet",
        ],
      })),
    })),
  };
}

function stripMarkdownLinks(text: string) {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
}

export function faqSchema(faqs: FAQ[] = FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripMarkdownLinks(faq.answer),
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#localbusiness`,
    name: RESTAURANT.name,
    image: `${BASE_URL}/Images/og-default.jpg`,
    telephone: RESTAURANT.phone,
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: RESTAURANT.geo.latitude,
      longitude: RESTAURANT.geo.longitude,
    },
    url: BASE_URL,
    priceRange: RESTAURANT.priceRange,
    openingHoursSpecification,
  };
}
