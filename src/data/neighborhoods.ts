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
    metaTitle: "Iraqi Bakery Plano TX, Halal Sweets & Breakfast | Al-Baghdady",
    metaDescription:
      "Authentic Iraqi bakery, breakfast and sweets for Plano residents, fresh samoon, baklava, kunafa and kahi & qeimar. A 12-minute drive from Plano, delivery available.",
    keywords: [
      "iraqi bakery plano",
      "halal bakery plano tx",
      "iraqi food plano",
      "iraqi sweets plano",
      "kanafa plano",
      "arabic sweets plano",
      "baklava plano",
      "iraqi breakfast plano",
      "halal cafe plano",
    ],
    heroHeadline: "Iraqi Bakery & Breakfast for Plano",
    heroSubheadline:
      "12 minutes from downtown Plano. Fresh samoon, baklava, kunafa and traditional Iraqi breakfast.",
    driveTime: "12 minutes from downtown Plano",
    intro:
      "Plano residents have been driving to Al-Baghdady for over a decade for authentic Iraqi baking they can't find anywhere closer. We're a short drive south on Greenville Ave, and we deliver across Plano daily.",
    body: "Whether you're stopping in for a traditional Iraqi breakfast, a box of baklava and kunafa, or a custom sweets order for an Eid celebration, Al-Baghdady serves Plano with the same family recipes that have earned us 1,899 verified reviews. Our in-house bakery makes everything from scratch, samoon baked throughout the day, kahi and qeimar every morning, baklava, mabrouma and kunafa made fresh. We also cater corporate breakfasts and weddings across the Plano area.",
    popularDishes: ["Baklava", "Kanafa", "Kahi & Qeimar", "Mabrouma"],
  },
  {
    slug: "garland-tx",
    city: "Garland",
    state: "TX",
    metaTitle: "Iraqi Bakery Garland TX, Halal Sweets | Al-Baghdady",
    metaDescription:
      "Authentic Iraqi bakery and breakfast café near Garland TX. Fresh baklava, kunafa, ladyfingers, samoon and traditional Iraqi breakfast. Halal certified.",
    keywords: [
      "iraqi bakery garland",
      "iraqi food garland",
      "halal food garland tx",
      "iraqi sweets garland",
      "kanafa garland",
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
    body: "Our in-house bakery produces fresh baklava, kunafa, burma, mabrouma, ladyfingers, fatayer and samoon every single day. Every morning except Monday we serve a full traditional Iraqi breakfast, Kahi & Qeimar, Baqila, Kubba and the Albaghdady Plate, paired with hot chai. Halal across the entire menu and Zabihah-verified. We also cater weddings, Eid celebrations and corporate events throughout Garland.",
    popularDishes: ["Baklava", "Kanafa", "Fatayer", "Manakish"],
  },
  {
    slug: "addison-tx",
    city: "Addison",
    state: "TX",
    metaTitle: "Halal Iraqi Bakery Addison TX, Sweets & Café | Al-Baghdady",
    metaDescription:
      "Halal Iraqi bakery and breakfast café 9 minutes from Addison, fresh samoon, baklava, kunafa, ladyfingers and traditional Iraqi breakfast. Zabihah-verified.",
    keywords: [
      "halal bakery addison",
      "iraqi bakery addison tx",
      "middle eastern food addison",
      "kanafa addison",
      "iraqi food addison",
      "arabic sweets addison",
      "baklava addison",
      "iraqi breakfast addison",
      "halal cafe addison",
    ],
    heroHeadline: "Halal Iraqi Bakery Near Addison",
    heroSubheadline:
      "9 minutes from Addison. Halal across our entire menu, with an in-house Arabic bakery.",
    driveTime: "9 minutes from Addison",
    intro:
      "Addison diners looking for halal options that go beyond fast-casual Mediterranean head to Al-Baghdady. We're a quick drive across the tollway and offer delivery across Addison.",
    body: "Al-Baghdady has been Zabihah-verified halal since day one. The whole operation, from the bakery to every breakfast plate, is fully halal, which has made us a destination for Addison's Muslim community and anyone seeking authentic Iraqi baking. Our bakery offers fresh kanafa, baklava, mabrouma and ladyfingers daily, and we cater weddings and corporate breakfasts throughout Addison.",
    popularDishes: ["Kanafa", "Ladyfingers (Znood Al Sit)", "Baklava", "Mabrouma"],
  },
  {
    slug: "north-dallas-tx",
    city: "North Dallas",
    state: "TX",
    metaTitle: "Iraqi Bakery North Dallas, Halal Sweets & Breakfast | Al-Baghdady",
    metaDescription:
      "Authentic Iraqi bakery and breakfast in North Dallas, fresh samoon, baklava, kunafa, mabrouma and traditional Iraqi breakfast. 1,899 reviews, Zabihah-verified halal.",
    keywords: [
      "iraqi food north dallas",
      "halal bakery north dallas",
      "iraqi bakery dallas",
      "best iraqi food dallas",
      "iraqi sweets north dallas",
      "arabic sweets north dallas",
      "baklava north dallas",
      "iraqi breakfast north dallas",
      "halal cafe north dallas",
    ],
    heroHeadline: "Iraqi Bakery & Breakfast for North Dallas",
    heroSubheadline:
      "The most-reviewed Iraqi bakery in Dallas. 1,899 reviews. 4.4 stars. Halal across the menu.",
    driveTime: "15 minutes from North Dallas",
    intro:
      "When North Dallas diners search for authentic Iraqi sweets and breakfast, they find Al-Baghdady. With 1,899 verified reviews, we're the most-reviewed Iraqi bakery in the DFW area.",
    body: "Authentic Iraqi baking is rare in North Dallas, there are 50+ Mediterranean spots, but only a handful that make real Iraqi sweets like mabrouma, burma and bird's nest, or a traditional Iraqi breakfast of kahi, qeimar and baqila. Al-Baghdady has been doing it the right way for over a decade: family recipes since 1919, fresh samoon from the tandoor all day, and a full in-house bakery for baklava, kunafa and ladyfingers. Reviewers consistently call us 'the best Iraqi food in Dallas' and we cater across all of North Dallas.",
    popularDishes: ["Kanafa", "Baklava", "Kahi & Qeimar", "Mabrouma"],
  },
  {
    slug: "allen-tx",
    city: "Allen",
    state: "TX",
    metaTitle: "Halal Iraqi Bakery Allen TX, Sweets & Breakfast | Al-Baghdady",
    metaDescription:
      "Fresh Iraqi sweets, samoon and traditional breakfast for Allen TX, baklava, kunafa, mabrouma and more. 22 minutes from Allen, with full catering.",
    keywords: [
      "iraqi bakery allen tx",
      "iraqi food allen",
      "halal food allen tx",
      "iraqi sweets allen",
      "kanafa allen",
      "arabic sweets allen",
      "baklava allen",
      "iraqi breakfast allen",
      "halal cafe allen",
    ],
    heroHeadline: "Halal Iraqi Bakery & Sweets for Allen",
    heroSubheadline:
      "22 minutes from Allen TX. Halal across the menu, with full catering for Allen events.",
    driveTime: "22 minutes from Allen",
    intro:
      "Allen residents who care about authentic flavor and halal sourcing make the trip to Al-Baghdady worth it. Our fresh Iraqi sweets, samoon and traditional breakfast have earned us a steady following from Allen and Fairview.",
    body: "We cater corporate breakfasts, weddings and Eid parties throughout Allen and surrounding areas. The mixed baklava and kunafa are reliable favorites; mabrouma and custom sweets orders make every celebration better. Allen guests often combine a morning breakfast with a bakery pickup of samoon and sweets to take home.",
    popularDishes: ["Baklava", "Kanafa", "Albaghdady Plate", "Manakish"],
  },
  {
    slug: "mckinney-tx",
    city: "McKinney",
    state: "TX",
    metaTitle: "Iraqi Bakery McKinney TX, Halal Sweets & Breakfast | Al-Baghdady",
    metaDescription:
      "Authentic Iraqi bakery and breakfast for McKinney TX, fresh samoon, baklava, kunafa, fatayer and traditional Iraqi breakfast. Full catering, Zabihah-verified.",
    keywords: [
      "middle eastern bakery mckinney",
      "iraqi bakery mckinney",
      "halal food mckinney tx",
      "iraqi sweets mckinney",
      "kanafa mckinney",
      "arabic sweets mckinney",
      "baklava mckinney",
      "iraqi breakfast mckinney",
      "halal cafe mckinney",
    ],
    heroHeadline: "Middle Eastern & Iraqi Bakery for McKinney",
    heroSubheadline:
      "25 minutes from McKinney. Authentic Iraqi baking and a full Arabic bakery.",
    driveTime: "25 minutes from McKinney",
    intro:
      "McKinney's Middle Eastern food fans drive to Al-Baghdady for the bakery and the traditional breakfast. From fresh samoon and manakish to a full Iraqi sweets case, we offer baking that isn't available locally.",
    body: "Our McKinney guests often book us for catering, weddings, baby showers, corporate breakfasts and Eid parties. Fresh baklava, kunafa, fatayer and custom sweets trays make for an authentic Iraqi spread. Halal across the menu and Zabihah-verified.",
    popularDishes: ["Baklava", "Kanafa", "Fatayer", "Mabrouma"],
  },
  {
    slug: "far-north-dallas-tx",
    city: "Far North Dallas",
    state: "TX",
    metaTitle: "Iraqi Bakery Far North Dallas, Halal Sweets | Al-Baghdady",
    metaDescription:
      "Searching for the best Iraqi bakery near you in Far North Dallas? Al-Baghdady serves 1,899-review halal Iraqi sweets, breakfast and a full Arabic bakery.",
    keywords: [
      "best iraqi food near me",
      "iraqi bakery far north dallas",
      "halal food far north dallas",
      "best middle eastern food dallas",
      "iraqi sweets far north dallas",
      "arabic sweets far north dallas",
      "baklava far north dallas",
      "iraqi breakfast far north dallas",
      "halal cafe far north dallas",
    ],
    heroHeadline: "Best Iraqi Bakery in Far North Dallas",
    heroSubheadline:
      "1,899 reviews. 4.4 stars. The DFW area's most-reviewed Iraqi bakery.",
    driveTime: "15 minutes from Far North Dallas",
    intro:
      "Far North Dallas diners searching for authentic Iraqi sweets and breakfast don't have to settle for generic Mediterranean. Al-Baghdady is a short drive south and bakes the real thing.",
    body: "Authentic Iraqi baking, samoon, kanafa, baklava, mabrouma, burma, is genuinely rare in DFW, and Al-Baghdady is one of the only bakeries doing it across a full traditional menu. With 1,899 verified reviews and Zabihah-verified halal sourcing, we're the trusted choice for Far North Dallas's halal-conscious diners and Iraqi-food lovers. Delivery available across Far North Dallas.",
    popularDishes: ["Kanafa", "Baklava", "Kahi & Qeimar", "Ladyfingers (Znood Al Sit)"],
  },
  {
    slug: "irving-tx",
    city: "Irving",
    state: "TX",
    metaTitle: "Iraqi Bakery Irving TX, Halal Sweets | Al-Baghdady",
    metaDescription:
      "Authentic Iraqi bakery and breakfast café serving Irving TX. Fresh baklava, kunafa, samoon and traditional Iraqi breakfast. Halal certified.",
    keywords: [
      "iraqi bakery irving tx",
      "halal bakery irving",
      "arabic sweets irving",
      "iraqi breakfast irving",
      "baklava irving tx",
      "halal cafe irving",
    ],
    heroHeadline: "Halal Iraqi Bakery & Café near Irving",
    heroSubheadline:
      "Fresh baklava, kunafa, samoon and traditional Iraqi breakfast, delivered across Irving.",
    driveTime: "25 minutes from Irving",
    intro:
      "Irving's halal-conscious diners and Iraqi food lovers have discovered Al-Baghdady as their go-to for authentic Iraqi sweets and breakfast. We deliver across Irving daily.",
    body: "From our in-house bakery come fresh baklava, kunafa, ladyfingers, fatayer and samoon baked daily. Every morning except Monday we serve a full traditional Iraqi breakfast, Kahi & Qeimar, Baqila, Kubba and the Albaghdady Plate, paired with hot chai. Halal across the entire menu and Zabihah-verified. We also cater weddings, Eid celebrations and corporate events throughout Irving.",
    popularDishes: ["Baklava", "Kanafa", "Kahi & Qeimar", "Fatayer"],
  },
  {
    slug: "carrollton-tx",
    city: "Carrollton",
    state: "TX",
    metaTitle: "Iraqi Bakery Carrollton TX, Halal Sweets | Al-Baghdady",
    metaDescription:
      "Authentic Iraqi bakery and breakfast café serving Carrollton TX. Fresh baklava, kunafa, samoon, ladyfingers and traditional Iraqi breakfast. 100% halal, Zabihah-verified.",
    keywords: [
      "iraqi bakery carrollton tx",
      "halal bakery carrollton",
      "iraqi food carrollton",
      "middle eastern food carrollton",
      "arabic sweets carrollton",
      "baklava carrollton tx",
      "kunafa carrollton",
      "iraqi breakfast carrollton",
      "halal cafe carrollton",
      "iraqi catering carrollton",
    ],
    heroHeadline: "Halal Iraqi Bakery & Café for Carrollton",
    heroSubheadline:
      "20 minutes from Carrollton. Fresh baklava, kunafa, samoon and Iraqi breakfast, delivered across Carrollton daily.",
    driveTime: "20 minutes from Carrollton",
    intro:
      "Carrollton's halal-conscious diners and Middle Eastern food lovers drive to Al-Baghdady for the real thing, Iraqi bakery from a family who's been doing this since 1919. We deliver across Carrollton and cater all kinds of events.",
    body: "Carrollton has plenty of Mediterranean and Indo-Pak options, but authentic Iraqi baking is rare, and that's where Al-Baghdady fills the gap. Our in-house bakery turns out fresh samoon from the tandoor, paper-thin baklava layered with pistachios, kunafa made to order, fatayer (cheese, spinach, meat), manakish, and the Iraqi sweets you can't find anywhere else in DFW: mabrouma, burma, ladyfingers (znood al sit), bird's nest, awama (luqaimat). Every morning except Monday we serve a full traditional Iraqi breakfast, Albaghdady Plate, Kahi & Qeimar, Baqila, Kubba, paired with hot karak chai. Halal across the entire menu, Zabihah-verified. We cater weddings, Eid celebrations, Ramadan iftars and corporate events throughout Carrollton.",
    popularDishes: ["Baklava", "Kanafa", "Fatayer", "Mabrouma"],
  },
  {
    slug: "frisco-tx",
    city: "Frisco",
    state: "TX",
    metaTitle: "Iraqi Bakery Frisco TX, Halal Sweets | Al-Baghdady",
    metaDescription:
      "Authentic Iraqi bakery and breakfast café serving Frisco TX. Fresh baklava, kunafa, samoon and traditional Iraqi breakfast. Halal certified.",
    keywords: [
      "iraqi bakery frisco tx",
      "halal bakery frisco",
      "arabic sweets frisco",
      "iraqi breakfast frisco",
      "baklava frisco tx",
      "halal cafe frisco",
    ],
    heroHeadline: "Halal Iraqi Bakery & Café near Frisco",
    heroSubheadline:
      "Fresh baklava, kunafa, samoon and traditional Iraqi breakfast, delivered across Frisco.",
    driveTime: "20 minutes from Frisco",
    intro:
      "Frisco's growing Muslim community and Middle Eastern food lovers have made Al-Baghdady a trusted destination for authentic Iraqi sweets and breakfast.",
    body: "Our in-house bakery produces fresh baklava, kunafa, burma, mabrouma, fatayer and samoon every day. Every morning except Monday we serve a full traditional Iraqi breakfast paired with hot chai. Halal across the entire menu, Zabihah-verified, and available for catering across Frisco for weddings, Ramadan iftars and corporate events.",
    popularDishes: ["Baklava", "Kanafa", "Albaghdady Plate", "Bird's Nest (Osh Al Asfour)"],
  },
  {
    slug: "coppell-tx",
    city: "Coppell",
    state: "TX",
    metaTitle: "Iraqi Bakery Coppell TX, Halal Sweets | Al-Baghdady",
    metaDescription:
      "Authentic Iraqi bakery, sweets and breakfast for Coppell, fresh baklava, knafeh, samoon and kahi & qeimar. Halal, Zabihah-verified, with delivery across Coppell.",
    keywords: [
      "iraqi bakery coppell",
      "halal bakery coppell tx",
      "baklava coppell",
      "knafeh coppell",
      "iraqi sweets coppell",
      "arabic sweets coppell",
      "halal food coppell",
      "iraqi breakfast coppell",
    ],
    heroHeadline: "Iraqi Bakery & Sweets for Coppell",
    heroSubheadline:
      "Halal baklava, knafeh and traditional Iraqi breakfast, baked fresh in Richardson and delivered across Coppell.",
    driveTime: "about 25 minutes from Coppell",
    intro:
      "Coppell's families and food-lovers order Al-Baghdady for the authentic Iraqi sweets and breakfast that are hard to find on the northwest side of the metroplex. We bake everything fresh in Richardson and deliver across Coppell.",
    body: "From custom baklava and knafeh trays for Eid and weddings to a weekend box of fresh samoon and fatayer, Al-Baghdady brings a century of Iraqi family baking to Coppell. Our in-house bakery fires samoon in the tandoor through the day, makes kahi and qeimar every morning, and layers baklava, mabrouma and knafeh by hand. Halal across the entire menu and Zabihah-verified, with catering for corporate breakfasts and celebrations across the Coppell area.",
    popularDishes: ["Baklava", "Knafeh", "Mabrouma", "Fatayer"],
  },
  {
    slug: "euless-tx",
    city: "Euless",
    state: "TX",
    metaTitle: "Iraqi Bakery near Euless TX, Halal Sweets | Al-Baghdady",
    metaDescription:
      "Halal Iraqi bakery, sweets and breakfast for Euless and the Mid-Cities, fresh baklava, knafeh, manakish and samoon. Zabihah-verified, delivery across DFW.",
    keywords: [
      "iraqi bakery euless",
      "halal bakery euless tx",
      "baklava euless",
      "knafeh euless",
      "halal food euless",
      "iraqi sweets euless",
      "middle eastern bakery mid-cities",
      "manakish euless",
    ],
    heroHeadline: "Halal Iraqi Bakery for Euless & the Mid-Cities",
    heroSubheadline:
      "Authentic baklava, knafeh, manakish and Iraqi breakfast for the Euless halal community, delivered across DFW.",
    driveTime: "about 30 minutes from Euless",
    intro:
      "Euless and the Mid-Cities have one of DFW's strongest halal communities, and Al-Baghdady is the Iraqi bakery they order from for authentic sweets, breads and breakfast. We bake fresh in Richardson and deliver across the Euless area.",
    body: "Whether it's a tray of baklava and knafeh for a gathering, fresh za'atar manakish for the weekend, or a full Iraqi breakfast spread, Al-Baghdady serves Euless with recipes carried from Baghdad since 1919. Everything is 100% halal and Zabihah-verified, baked in-house daily: samoon from the tandoor, kahi and qeimar each morning, hand-layered baklava and mabrouma. We also cater weddings, Eid celebrations and Ramadan iftars across the Mid-Cities.",
    popularDishes: ["Baklava", "Knafeh", "Manakish", "Samoon"],
  },
  {
    slug: "dallas-tx",
    city: "Dallas",
    state: "TX",
    metaTitle: "Iraqi Bakery Dallas, Halal Sweets & Breakfast | Al-Baghdady",
    metaDescription:
      "Dallas's authentic Iraqi bakery, fresh baklava, knafeh, samoon, manakish and traditional Iraqi breakfast. Halal, Zabihah-verified, with delivery across Dallas.",
    keywords: [
      "iraqi bakery dallas",
      "halal bakery dallas",
      "baklava dallas",
      "knafeh dallas",
      "iraqi sweets dallas",
      "iraqi breakfast dallas",
      "arabic bakery dallas",
      "middle eastern bakery dallas",
    ],
    heroHeadline: "Dallas's Authentic Iraqi Bakery & Breakfast Café",
    heroSubheadline:
      "Fresh baklava, knafeh, samoon and traditional Iraqi breakfast, baked daily just north in Richardson and delivered across Dallas.",
    driveTime: "about 20 minutes from central Dallas",
    intro:
      "For authentic Iraqi sweets, bread and breakfast in Dallas, Al-Baghdady has been the metroplex's go-to for over a decade. We're just north in Richardson, and we deliver across Dallas every day.",
    body: "Dallas's Iraqi and Middle-Eastern community, and anyone who loves real baklava, comes to Al-Baghdady for a century of family baking. Our in-house bakery makes samoon in the tandoor throughout the day, kahi and qeimar every morning, and hand-layered baklava, knafeh and mabrouma made fresh. Halal across the entire menu and Zabihah-verified, with catering for weddings, Eid, corporate breakfasts and Ramadan iftars across Dallas.",
    popularDishes: ["Baklava", "Knafeh", "Samoon", "Kahi & Qeimar"],
  },
];

export const NEIGHBORHOOD_SLUGS = NEIGHBORHOODS.map((n) => n.slug);
