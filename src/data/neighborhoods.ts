export type Neighborhood = {
  slug: string;
  city: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroHeadline: string;
  heroSubheadline: string;
  driveTime: string;
  intro: string;
  body: string;
  popularDishes: string[];
};

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    slug: "plano-tx",
    city: "Plano",
    state: "TX",
    metaTitle: "Iraqi Restaurant Plano TX | Al-Baghdady — Halal Kabob & Bakery",
    metaDescription:
      "Authentic Iraqi food, halal kabobs and fresh kanafa for Plano residents. Al-Baghdady is a 12-minute drive from Plano with delivery available.",
    keywords: [
      "iraqi restaurant plano",
      "halal restaurant plano tx",
      "iraqi food plano",
      "kabob plano tx",
      "iraqi bakery plano",
      "arabic sweets plano",
      "baklava plano",
      "iraqi breakfast plano",
      "halal cafe plano",
    ],
    heroHeadline: "Authentic Iraqi Food for Plano",
    heroSubheadline:
      "12 minutes from downtown Plano. Halal kabobs, fresh samoon and the best kanafa in DFW.",
    driveTime: "12 minutes from downtown Plano",
    intro:
      "Plano residents have been driving to Al-Baghdady for over a decade for authentic Iraqi cooking they can't find anywhere closer. We're a short drive south on Greenville Ave, and we deliver across Plano daily.",
    body: "Whether you're looking for a halal restaurant for a family dinner, a kabob platter to feed the kids, or a custom dessert tray for an Eid celebration, Al-Baghdady serves Plano with the same authentic Iraqi recipes that have earned us 1,892 verified reviews. Our kitchen makes everything from scratch — samoon bread baked throughout the day, kabobs char-grilled to order, kanafa and baklava made fresh in our in-house bakery. We also cater corporate lunches and weddings across the Plano area.",
    popularDishes: ["Baklava", "Kanafa", "Kahi & Qeimar", "Custom Dessert Tray"],
  },
  {
    slug: "garland-tx",
    city: "Garland",
    state: "TX",
    metaTitle:
      "Iraqi Bakery & Café Garland TX | Al-Baghdady — Halal Iraqi Food",
    metaDescription:
      "Authentic Iraqi bakery and breakfast café near Garland TX. Fresh baklava, kunafa, ladyfingers, samoon and traditional Iraqi breakfast. Halal certified.",
    keywords: [
      "mediterranean restaurant garland",
      "iraqi restaurant garland",
      "halal food garland tx",
      "shawarma garland",
      "iraqi bakery garland",
      "arabic sweets garland",
      "baklava garland",
      "iraqi breakfast garland",
      "halal cafe garland",
    ],
    heroHeadline: "Halal Iraqi Bakery & Café near Garland",
    heroSubheadline:
      "10 minutes from downtown Garland. Fresh baklava, kunafa, samoon and traditional Iraqi breakfast daily.",
    driveTime: "10 minutes from downtown Garland",
    intro:
      "Garland's halal-conscious diners and Iraqi sweet lovers have made Al-Baghdady a weekly tradition. We serve the full range of Iraqi bakery favorites and a traditional breakfast every day except Monday, with delivery across Garland.",
    body: "Our in-house bakery produces fresh baklava, kunafa, Burma, Mabrouma, ladyfingers, fatayer and samoon every single day. Every morning except Monday we serve a full traditional Iraqi breakfast — Kahi & Qeimar, Baqila, Kubba and the Albaghdady Plate — paired with hot chai. Halal across the entire menu and Zabihah-verified. We also cater weddings, Eid celebrations and corporate events throughout Garland.",
    popularDishes: ["Baklava", "Kanafa", "Fatayer", "Manakish"],
  },
  {
    slug: "addison-tx",
    city: "Addison",
    state: "TX",
    metaTitle:
      "Halal Restaurant Addison TX | Al-Baghdady Iraqi Cuisine & Bakery",
    metaDescription:
      "Halal Iraqi restaurant 9 minutes from Addison. Authentic kabobs, shawarma, fresh samoon and the best kanafa in DFW.",
    keywords: [
      "halal restaurant addison",
      "iraqi restaurant addison tx",
      "middle eastern food addison",
      "kanafa addison",
      "iraqi bakery addison",
      "arabic sweets addison",
      "baklava addison",
      "iraqi breakfast addison",
      "halal cafe addison",
    ],
    heroHeadline: "Halal Iraqi Food Near Addison",
    heroSubheadline:
      "9 minutes from Addison. Halal across our entire menu, with an in-house Arabic bakery.",
    driveTime: "9 minutes from Addison",
    intro:
      "Addison diners looking for halal options that go beyond fast-casual Mediterranean head to Al-Baghdady. We're a quick drive across the tollway and offer delivery across Addison.",
    body: "Al-Baghdady has been Zabihah-verified halal since day one. The whole kitchen — from kabobs to bakery — is fully halal, which has made us a destination for Addison's Muslim community and anyone seeking authentic Iraqi cuisine. Our bakery offers fresh kanafa, baklava and ladyfingers daily, and we cater weddings and corporate lunches throughout Addison.",
    popularDishes: ["Kanafa", "Ladyfingers (Znood Al Sit)", "Baklava", "Custom Dessert Tray"],
  },
  {
    slug: "north-dallas-tx",
    city: "North Dallas",
    state: "TX",
    metaTitle: "Iraqi Food North Dallas | Al-Baghdady Halal Restaurant & Bakery",
    metaDescription:
      "Authentic Iraqi food in North Dallas. Halal kabobs, traditional masgoof, fresh samoon and the best kanafa in Dallas.",
    keywords: [
      "iraqi food north dallas",
      "halal restaurant north dallas",
      "iraqi restaurant dallas",
      "best iraqi food dallas",
      "iraqi bakery north dallas",
      "arabic sweets north dallas",
      "baklava north dallas",
      "iraqi breakfast north dallas",
      "halal cafe north dallas",
    ],
    heroHeadline: "Iraqi Food for North Dallas",
    heroSubheadline:
      "The most-reviewed Iraqi restaurant in Dallas. 1,892 reviews. 4.4 stars. Halal across the menu.",
    driveTime: "15 minutes from North Dallas",
    intro:
      "When North Dallas diners search for authentic Iraqi food, they find Al-Baghdady. With 1,892 verified reviews, we're the most-reviewed Iraqi restaurant in the DFW area.",
    body: "Iraqi cuisine is rare in North Dallas — there are 50+ Mediterranean spots, but only a handful that serve real Iraqi specialties like masgoof, tashreeb, quzi and Iraqi biryani. Al-Baghdady has been doing it the right way for over a decade: traditional spices, slow-cooked stews, char-grilled kabobs and a full in-house bakery for samoon, kanafa, baklava and ladyfingers. Reviewers consistently call us 'the best Iraqi food in Dallas' and we cater across all of North Dallas.",
    popularDishes: ["Masgoof", "Kanafa", "Kahi & Qeimar", "Custom Dessert Tray"],
  },
  {
    slug: "allen-tx",
    city: "Allen",
    state: "TX",
    metaTitle: "Kabob Restaurant Allen TX | Al-Baghdady — Halal Iraqi Cuisine",
    metaDescription:
      "Char-grilled halal kabobs, shawarma and fresh Iraqi sweets for Allen TX. 22 minutes from Allen with full catering.",
    keywords: [
      "kabob restaurant allen tx",
      "iraqi restaurant allen",
      "halal food allen tx",
      "shawarma allen",
      "iraqi bakery allen",
      "arabic sweets allen",
      "baklava allen",
      "iraqi breakfast allen",
      "halal cafe allen",
    ],
    heroHeadline: "Char-Grilled Halal Kabobs for Allen",
    heroSubheadline: "22 minutes from Allen TX. Halal across the menu, with full catering for Allen events.",
    driveTime: "22 minutes from Allen",
    intro:
      "Allen residents who care about authentic flavor and halal sourcing make the trip to Al-Baghdady worth it. Our char-grilled kabobs and Iraqi specialties have earned us a steady following from Allen and Fairview.",
    body: "We cater corporate lunches, weddings and Eid parties throughout Allen and surrounding areas. The mixed grill platter and lamb kabob are reliable favorites; the bakery's kanafa and custom dessert trays make every celebration better. Allen guests often combine a sit-down dinner with a bakery pickup of samoon and sweets to take home.",
    popularDishes: ["Baklava", "Kanafa", "Albaghdady Plate", "Manakish"],
  },
  {
    slug: "mckinney-tx",
    city: "McKinney",
    state: "TX",
    metaTitle:
      "Middle Eastern Restaurant McKinney TX | Al-Baghdady Iraqi & Bakery",
    metaDescription:
      "Authentic Iraqi and Middle Eastern food for McKinney TX. Halal kabobs, fresh samoon, kanafa and full catering.",
    keywords: [
      "middle eastern restaurant mckinney",
      "iraqi restaurant mckinney",
      "halal food mckinney tx",
      "kabob mckinney",
      "iraqi bakery mckinney",
      "arabic sweets mckinney",
      "baklava mckinney",
      "iraqi breakfast mckinney",
      "halal cafe mckinney",
    ],
    heroHeadline: "Middle Eastern & Iraqi for McKinney",
    heroSubheadline:
      "25 minutes from McKinney. Authentic Iraqi cooking and a full Arabic bakery.",
    driveTime: "25 minutes from McKinney",
    intro:
      "McKinney's Middle Eastern food fans drive to Al-Baghdady for the depth of menu and the bakery. From classic shawarma wraps to traditional Iraqi tashreeb, we offer dishes that aren't available locally.",
    body: "Our McKinney guests often book us for catering — weddings, baby showers, corporate lunches and Eid parties. The full mezze, kabob platters and bakery dessert trays make for an authentic Iraqi spread. Halal across the menu and Zabihah-verified.",
    popularDishes: ["Baklava", "Kanafa", "Fatayer", "Custom Dessert Tray"],
  },
  {
    slug: "far-north-dallas-tx",
    city: "Far North Dallas",
    state: "TX",
    metaTitle:
      "Best Iraqi Food Near Me | Al-Baghdady — Far North Dallas Halal Restaurant",
    metaDescription:
      "Searching for the best Iraqi food near you in Far North Dallas? Al-Baghdady serves 1,892-review halal Iraqi food and a full Arabic bakery.",
    keywords: [
      "best iraqi food near me",
      "iraqi restaurant far north dallas",
      "halal food far north dallas",
      "best middle eastern food dallas",
      "iraqi bakery far north dallas",
      "arabic sweets far north dallas",
      "baklava far north dallas",
      "iraqi breakfast far north dallas",
      "halal cafe far north dallas",
    ],
    heroHeadline: "Best Iraqi Food in Far North Dallas",
    heroSubheadline:
      "1,892 reviews. 4.4 stars. The DFW area's most-reviewed Iraqi restaurant.",
    driveTime: "15 minutes from Far North Dallas",
    intro:
      "Far North Dallas diners searching for authentic Iraqi food don't have to settle for generic Mediterranean. Al-Baghdady is a short drive south and serves the real thing.",
    body: "Iraqi cuisine — masgoof, samoon, kanafa, tashreeb, quzi — is genuinely rare in DFW, and Al-Baghdady is one of the only restaurants doing it across the full menu. With 1,892 verified reviews and Zabihah-verified halal sourcing, we're the trusted choice for Far North Dallas's halal-conscious diners and Iraqi-food lovers. Delivery available across Far North Dallas.",
    popularDishes: ["Kanafa", "Baklava", "Kahi & Qeimar", "Ladyfingers (Znood Al Sit)"],
  },
  {
    slug: "irving-tx",
    city: "Irving",
    state: "TX",
    metaTitle: "Iraqi Bakery Irving TX | Al-Baghdady — Halal Iraqi Sweets & Breakfast",
    metaDescription:
      "Authentic Iraqi bakery and breakfast café serving Irving TX. Fresh baklava, kunafa, samoon and traditional Iraqi breakfast. Halal certified.",
    keywords: [
      "iraqi bakery irving tx",
      "halal restaurant irving",
      "arabic sweets irving",
      "iraqi breakfast irving",
      "baklava irving tx",
      "halal cafe irving",
    ],
    heroHeadline: "Halal Iraqi Bakery & Café near Irving",
    heroSubheadline:
      "Fresh baklava, kunafa, samoon and traditional Iraqi breakfast — delivered across Irving.",
    driveTime: "25 minutes from Irving",
    intro:
      "Irving's halal-conscious diners and Iraqi food lovers have discovered Al-Baghdady as their go-to for authentic Iraqi sweets and breakfast. We deliver across Irving daily.",
    body: "From our in-house bakery come fresh baklava, kunafa, ladyfingers, fatayer and samoon baked daily. Every morning except Monday we serve a full traditional Iraqi breakfast — Kahi & Qeimar, Baqila, Kubba and the Albaghdady Plate — paired with hot chai. Halal across the entire menu and Zabihah-verified. We also cater weddings, Eid celebrations and corporate events throughout Irving.",
    popularDishes: ["Baklava", "Kanafa", "Kahi & Qeimar", "Fatayer"],
  },
  {
    slug: "frisco-tx",
    city: "Frisco",
    state: "TX",
    metaTitle: "Iraqi Bakery Frisco TX | Al-Baghdady — Halal Iraqi Sweets & Breakfast",
    metaDescription:
      "Authentic Iraqi bakery and breakfast café serving Frisco TX. Fresh baklava, kunafa, samoon and traditional Iraqi breakfast. Halal certified.",
    keywords: [
      "iraqi bakery frisco tx",
      "halal restaurant frisco",
      "arabic sweets frisco",
      "iraqi breakfast frisco",
      "baklava frisco tx",
      "halal cafe frisco",
    ],
    heroHeadline: "Halal Iraqi Bakery & Café near Frisco",
    heroSubheadline:
      "Fresh baklava, kunafa, samoon and traditional Iraqi breakfast — delivered across Frisco.",
    driveTime: "20 minutes from Frisco",
    intro:
      "Frisco's growing Muslim community and Middle Eastern food lovers have made Al-Baghdady a trusted destination for authentic Iraqi sweets and breakfast.",
    body: "Our in-house bakery produces fresh baklava, kunafa, Burma, Mabrouma, fatayer and samoon every day. Every morning except Monday we serve a full traditional Iraqi breakfast paired with hot chai. Halal across the entire menu, Zabihah-verified, and available for catering across Frisco for weddings, Ramadan iftars and corporate events.",
    popularDishes: ["Baklava", "Kanafa", "Albaghdady Plate", "Custom Dessert Tray"],
  },
];

export const NEIGHBORHOOD_SLUGS = NEIGHBORHOODS.map((n) => n.slug);
