export type FAQ = { question: string; answer: string };

// Inline links use markdown-style syntax: [anchor text](/url/).
// FAQSection renders these as <Link> elements; faqSchema strips them to plain text.
export const FAQS: FAQ[] = [
  {
    question: "Is everything on your menu halal?",
    answer:
      "Yes. Every meat dish at Al-Baghdady is 100% halal and Zabihah-verified. We source only from halal-certified suppliers and [our entire kitchen is halal](/our-story/).",
  },
  {
    question: "Where are you located?",
    answer:
      "We're at 327-329 N Greenville Ave, Richardson, TX 75081 — minutes from [Plano](/near/plano-tx/), [Garland](/near/garland-tx/), [Addison](/near/addison-tx/) and [North Dallas](/near/north-dallas-tx/). Free parking on site.",
  },
  {
    question: "Do you offer catering for weddings and corporate events?",
    answer:
      "Yes — Al-Baghdady caters weddings, corporate lunches, Ramadan iftars, Eid celebrations and private events across Dallas-Fort Worth. Visit our [Catering page](/catering/) or call (972) 238-9200 to request a quote.",
  },
  {
    question: "What is samoon bread?",
    answer:
      "Samoon is the traditional Iraqi oval-shaped bread, with a crisp crust and pillowy interior. We bake it fresh in our [in-house stone oven](/bakery/) throughout the day. It's the perfect partner to [kabob, shawarma and dips](/menu/).",
  },
  {
    question: "What is kanafa?",
    answer:
      "Kanafa is a beloved Iraqi-Levantine dessert — shredded phyllo dough layered with melted cheese, soaked in rose-water syrup and topped with crushed pistachios. We make it fresh in [our bakery](/bakery/) daily.",
  },
  {
    question: "Do you have a bakery on site?",
    answer:
      "Yes. [Our in-house bakery](/bakery/) makes fresh samoon bread, kanafa, baklava, ladyfingers (znood al sit), ma'amoul and [custom dessert trays for parties and Eid](/catering/).",
  },
  {
    question: "Do you offer delivery?",
    answer:
      "Yes — order delivery directly through our website or via DoorDash. We deliver across Richardson, [Plano](/near/plano-tx/), [Garland](/near/garland-tx/), [Addison](/near/addison-tx/) and most of [North Dallas](/near/north-dallas-tx/).",
  },
  {
    question: "Do you take reservations?",
    answer:
      "Walk-ins are welcome and most parties are seated within 15 minutes. For groups of 8 or more, please call (972) 238-9200 to reserve.",
  },
  {
    question: "Are you family-friendly?",
    answer:
      "Absolutely. Al-Baghdady is a [family-owned restaurant](/our-story/) and we welcome guests of all ages. We have a [kids menu](/menu/) and high chairs available.",
  },
  {
    question: "Do you have vegetarian options?",
    answer:
      "Yes. Our hummus, baba ganoush, tabouleh, falafel, mutabbal and [mezze platters](/menu/) are all vegetarian. Many can be made vegan on request.",
  },
  {
    question: "What's the difference between Iraqi and Mediterranean food?",
    answer:
      "Iraqi cuisine has its own distinct character — heavier on slow-cooked stews like tashreeb, dolma and quzi, traditional grilled fish (masgoof), unique breads like samoon, and spice blends rooted in Mesopotamian cooking. While there's overlap with Lebanese and Mediterranean food, [dishes like masgoof, samoon and Iraqi biryani](/iraqi-cuisine/) are uniquely ours.",
  },
  {
    question: "Do you offer custom dessert trays for parties?",
    answer:
      "Yes — we make [custom trays of baklava, kanafa, ladyfingers and ma'amoul](/bakery/) for [weddings, Eid and Ramadan](/catering/) and any celebration. Trays start at $45. Call ahead at least 24 hours.",
  },
  {
    question: "What time do you serve dinner?",
    answer:
      "We're open 11 AM to 10 PM Sunday-Thursday, and 11 AM to 11 PM Friday-Saturday. Sunday opens at 12 PM.",
  },
  {
    question: "Do you offer gluten-free options?",
    answer:
      "Our [grilled kabobs and shawarma plates](/menu/) and most appetizers can be served without bread. Please let your server know about allergies and we'll accommodate where possible.",
  },
  {
    question: "Where can I park?",
    answer:
      "Free parking is available in our lot on N Greenville Ave and on adjacent streets.",
  },
  {
    question: "Do you serve breakfast?",
    answer:
      "We open at 11 AM with a [full lunch and dinner menu](/menu/). For Iraqi-style breakfast and traditional bakery items, [our bakery](/bakery/) offers fresh samoon and pastries throughout the day.",
  },
  {
    question: "Are there really two Al-Baghdady locations?",
    answer:
      "We have one restaurant and one bakery, both at 327-329 N Greenville Ave [under the same ownership](/our-story/). The [bakery](/bakery/) serves fresh samoon, kanafa and traditional sweets; the [restaurant](/menu/) serves the full menu of Iraqi specialties.",
  },
  {
    question: "Do you accept large catering orders?",
    answer:
      "Yes, we cater events from 20 to 500+ guests. Wedding banquets, corporate lunches, Ramadan iftars and Eid parties are all welcome. Submit a [catering inquiry on our Catering page](/catering/).",
  },
  {
    question: "Is your samoon bread baked daily?",
    answer:
      "Fresh samoon comes out of [our stone oven](/bakery/) every few hours, all day long. You can buy loaves to take home or have it served warm with your meal.",
  },
  {
    question: "What is masgoof?",
    answer:
      "Masgoof is Iraq's national dish — a freshwater fish that's butterflied, seasoned with tamarind, salt and pepper, then slow-cooked over an open fire. It's a centerpiece dish for special occasions and one of the [most authentic Iraqi specialties](/iraqi-cuisine/) we serve.",
  },
];
