export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image?: string;
  popular?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  description: string;
  image: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "kabob-platters",
    name: "Kabob & Grill Platters",
    description:
      "Char-grilled kabobs marinated in traditional Iraqi spices and served with samoon bread, basmati rice and salad.",
    image: "/Images/menu/kabob-platters.webp",
    items: [
      {
        name: "Mixed Grill Platter",
        description:
          "Beef kabob, lamb kabob, chicken kabob and tikka served with rice, samoon and grilled vegetables.",
        price: "$26.99",
        popular: true,
      },
      {
        name: "Beef Kabob Platter",
        description:
          "Two skewers of marinated ground beef kabob, char-grilled and served with rice and samoon.",
        price: "$18.99",
      },
      {
        name: "Lamb Kabob Platter",
        description:
          "Tender lamb cubes marinated overnight, char-grilled and served with rice and samoon.",
        price: "$22.99",
        popular: true,
      },
      {
        name: "Chicken Tikka Platter",
        description:
          "Boneless chicken thighs marinated in yogurt and Iraqi spices, char-grilled.",
        price: "$17.99",
      },
      {
        name: "Chicken Kabob Platter",
        description: "Ground chicken kabob seasoned with traditional spices.",
        price: "$16.99",
      },
      {
        name: "Lamb Chops",
        description:
          "Four marinated lamb chops grilled to order. Served with rice and samoon.",
        price: "$28.99",
      },
    ],
  },
  {
    id: "iraqi-breakfast",
    name: "Iraqi Breakfast",
    description:
      "Traditional Iraqi breakfast served every day except Monday, 10:00 AM – 12:30 PM. Every plate paired with hot chai and fresh samoon.",
    image: "/Images/menu/breakfast.webp",
    items: [
      {
        name: "Albaghdady Plate (طبق البغدادي)",
        description:
          "Our signature breakfast spread. Ground meat kabab, golden potatoes, eggplant tomato stew, and two pieces of handmade kubbah — all on one tray.",
        price: "$23.99",
        popular: true,
      },
      {
        name: "Kahi & Qeimar (كاهي وقيمر)",
        description:
          "Iraq's most beloved sweet breakfast. Layers of flaky golden kahi pastry drizzled with syrup, served with rich clotted cream (qeimar).",
        price: "$12.99",
        popular: true,
      },
      {
        name: "Baqila (باقلاء بالدهن)",
        description:
          "Tender fava beans simmered in their own broth, served with eggs, crispy fried onions, and warm bread soaked in the broth. A national Iraqi tradition.",
        price: "$14.99 / plate",
        popular: true,
      },
      {
        name: "Kubba (كبة)",
        description:
          "Four hand-rolled pieces of Iraqi kubba — bulgur shells stuffed with seasoned meat, onions, and herbs, fried until golden and crisp.",
        price: "$15.99 / plate · $7.99 / sandwich",
      },
      {
        name: "Qeimar & Debes (قيمر ودبس)",
        description:
          "Fresh clotted cream and pure date syrup, served with warm samoon. Simple, ancient, unforgettable.",
        price: "$7.99 / plate · $4.99 / sandwich",
      },
      {
        name: "Chelfry (جلفراي)",
        description:
          "Traditional Iraqi morning hash of slow-cooked lamb pieces, golden potatoes, onions, and tomatoes. Bold and warming.",
        price: "$15.99 / plate · $7.99 / sandwich",
      },
      {
        name: "Omlet (مخلمة)",
        description:
          "Iraqi-style omelette with ground meat, fresh tomatoes, onions, and eggs cooked together until tender and rich.",
        price: "$15.99 / plate · $7.99 / sandwich",
      },
      {
        name: "Bastirma (باسترما بالبيض)",
        description:
          "Spiced cured beef sausage sizzled with eggs until the edges crisp. Deep, smoky flavor in every bite.",
        price: "$14.99 / plate · $7.99 / sandwich",
      },
      {
        name: "Lamb Liver (معلاك غنم)",
        description:
          "Fresh lamb liver sautéed with onions and tomatoes until tender. The way Baghdadi mornings have started for generations.",
        price: "$15.99 / plate · $7.99 / sandwich",
      },
      {
        name: "Beef & Egg (لحم وبيض)",
        description:
          "Tender beef shawarma topped with a perfectly cooked egg. Savory, satisfying, ready to fuel your whole morning.",
        price: "$16.99 / plate · $7.99 / sandwich",
      },
      {
        name: "Potato with Egg (بطاطا مع بيض)",
        description:
          "Pan-fried potatoes scrambled with farm-fresh eggs. Simple, comforting, pairs perfectly with hot chai.",
        price: "$9.99 / plate · $5.99 / sandwich",
      },
      {
        name: "Tomato with Egg (طماطم مع بيض)",
        description:
          "Ripe tomatoes slow-cooked with eggs into a rich, savory scramble. Light, fresh, a Middle Eastern breakfast staple.",
        price: "$9.99 / plate · $5.99 / sandwich",
      },
      {
        name: "Fried Kabab (كباب عروق)",
        description:
          "Hand-formed patties of seasoned ground meat with fresh parsley and onions, pan-fried golden and crisp.",
        price: "$15.99 / plate · $7.99 / sandwich",
      },
    ],
  },
  {
    id: "shawarma-sandwiches",
    name: "Shawarma & Sandwiches",
    description:
      "Hand-stacked shawarma carved from the spit, wrapped in fresh samoon or pita.",
    image: "/Images/menu/shawarma.webp",
    items: [
      {
        name: "Beef Shawarma Wrap",
        description:
          "Slow-roasted spiced beef wrapped with tahini, pickles, tomato and onion.",
        price: "$10.99",
        popular: true,
      },
      {
        name: "Chicken Shawarma Wrap",
        description: "Spiced chicken with garlic sauce and pickles in a fresh samoon wrap.",
        price: "$9.99",
        popular: true,
      },
      {
        name: "Falafel Wrap",
        description: "Crispy chickpea falafel with tahini, pickles and salad.",
        price: "$8.99",
        vegetarian: true,
      },
      {
        name: "Shawarma Plate",
        description: "Shawarma served on a plate with rice, salad and pita.",
        price: "$14.99",
      },
      {
        name: "Kafta Sandwich",
        description: "Ground beef kafta kabob with grilled vegetables.",
        price: "$10.99",
      },
    ],
  },
  {
    id: "traditional-iraqi",
    name: "Traditional Iraqi Specialties",
    description:
      "Heritage dishes you can rarely find outside Iraq — masgoof, dolma, biryani and more.",
    image: "/Images/menu/traditional.webp",
    items: [
      {
        name: "Masgoof",
        description:
          "Traditional Iraqi grilled fish — open butterflied, seasoned with tamarind and slow-cooked over fire. Iraq's national dish.",
        price: "$32.99",
        popular: true,
      },
      {
        name: "Dolma",
        description:
          "Grape leaves, peppers, onions and zucchini stuffed with seasoned rice and lamb, slow-cooked in tomato.",
        price: "$16.99",
      },
      {
        name: "Tashreeb",
        description:
          "Slow-braised lamb served over torn samoon bread soaked in rich broth.",
        price: "$18.99",
      },
      {
        name: "Iraqi Biryani",
        description:
          "Long-grain basmati layered with chicken or lamb, raisins, almonds and Iraqi spice blend.",
        price: "$17.99",
      },
      {
        name: "Quzi",
        description:
          "Slow-roasted lamb shank served on a bed of spiced rice with raisins and pine nuts.",
        price: "$24.99",
        popular: true,
      },
      {
        name: "Maqluba",
        description:
          "Upside-down rice dish layered with chicken, eggplant and potato.",
        price: "$16.99",
      },
    ],
  },
  {
    id: "appetizers",
    name: "Appetizers & Mezze",
    description: "Cold and hot starters made fresh daily.",
    image: "/Images/menu/appetizers.webp",
    items: [
      {
        name: "Hummus",
        description: "Creamy chickpea dip with tahini, olive oil and fresh-baked samoon.",
        price: "$6.99",
        vegetarian: true,
      },
      {
        name: "Baba Ganoush",
        description: "Smoky roasted eggplant with tahini and lemon.",
        price: "$7.99",
        vegetarian: true,
      },
      {
        name: "Tabouleh",
        description: "Fresh parsley salad with bulgur, tomato and lemon.",
        price: "$7.99",
        vegetarian: true,
      },
      {
        name: "Falafel (5 pcs)",
        description: "Crispy chickpea fritters served with tahini.",
        price: "$6.99",
        vegetarian: true,
      },
      {
        name: "Mutabbal",
        description: "Charred eggplant whipped with yogurt and garlic.",
        price: "$7.99",
        vegetarian: true,
      },
      {
        name: "Mezze Platter",
        description: "Hummus, baba ganoush, tabouleh, falafel and samoon bread.",
        price: "$16.99",
        vegetarian: true,
        popular: true,
      },
      {
        name: "Samosa",
        description:
          "Hand-folded and pan-fried golden. Choose from seasoned ground meat or vegetable filling — crispy on the outside, savory inside. Perfect as a quick snack, an appetizer, or by the tray for your next gathering.",
        price: "$2.75 / pc",
      },
      {
        name: "Kibbeh",
        description:
          "Fried bulgur shell stuffed with spiced ground meat, onions, and pine nuts. Crispy outside, rich and savory inside.",
        price: "$3.99 / pc",
      },
      {
        name: "Egg Roll",
        description:
          "Crispy rolled pastry with a savory filling, fried golden and served hot.",
        price: "$1.99 / pc",
      },
      {
        name: "Sour Kibbeh (Bowl)",
        description:
          "Kibbeh served in a tangy tamarind-based broth. A beloved Iraqi comfort dish, best eaten with fresh samoon.",
        price: "$9.99",
        popular: true,
      },
      {
        name: "Chickpea Soup (Leblebi)",
        description:
          "Hearty chickpea soup seasoned with cumin and lemon, served with toasted bread. A classic Iraqi street-food staple.",
        price: "$3.99",
        vegetarian: true,
      },
    ],
  },
  {
    id: "bakery-sweets",
    name: "Bakery & Iraqi Sweets",
    description:
      "Baked fresh in our in-house bakery — kanafa, baklava, ladyfingers and more.",
    image: "/Images/menu/bakery.webp",
    items: [
      {
        name: "Kanafa",
        description:
          "Sticky shredded phyllo with melted cheese, soaked in rose-water syrup and topped with crushed pistachios.",
        price: "$15.00",
        popular: true,
      },
      {
        name: "Pistachio Baklava",
        description:
          "Our most-ordered variety. Generous layers of fresh-ground pistachios between paper-thin phyllo, soaked in just enough syrup.",
        price: "$17.99",
        popular: true,
      },
      {
        name: "Walnut Baklava",
        description:
          "A traditional baklava variety made with fresh walnuts. Layers of paper-thin phyllo, walnuts, and our family's signature honey syrup. The recipe we've been making since 1919.",
        price: "$15.99",
      },
      {
        name: "Mixed Baklava",
        description:
          "Layers of phyllo, walnut, pistachio and honey. A mixed selection of our house baklava varieties.",
        price: "$17.99",
        popular: true,
      },
      {
        name: "Bread Baklava",
        description:
          "A Richardson favorite and a signature Iraqi twist on traditional baklava. A golden bread base, soaked in honey syrup, layered with sweet cream and chopped pistachios. Rich, comforting, and one of the most-requested desserts in our case.",
        price: "$3.50 / pc",
        popular: true,
      },
      {
        name: "Ladyfingers (Znood Al Sit)",
        description:
          "Crispy phyllo rolls filled with sweet cream and dipped in syrup.",
        price: "$12.00",
      },
      {
        name: "Awama (Luqaimat)",
        description:
          "Bite-sized fried dough fritters, crisp on the outside, soft inside, soaked in our family's honey syrup. A celebration favorite at every Iraqi gathering — most often spotted on Eid and wedding trays.",
        price: "$12.00",
      },
      {
        name: "Burma (Turkish Style)",
        description:
          "Long, cigar-rolled phyllo packed with pistachios and finished with syrup. Crisp, nutty, and one of the lesser-known Iraqi sweets.",
        price: "$20.00",
      },
      {
        name: "Mabrouma",
        description:
          "A coiled phyllo pastry layered with pistachios, baked until deep gold. A traditional Iraqi dessert most often spotted on celebration trays.",
        price: "$3.00 / pc",
      },
      {
        name: "Mabrouma with Cream",
        description:
          "Our classic coiled phyllo pastry filled with luscious sweet cream and pistachios, baked until golden.",
        price: "$20.00",
        popular: true,
      },
      {
        name: "Pistachio Mabrouma",
        description:
          "A premium version of our house mabrouma — loaded with fresh-ground pistachios throughout, baked deep gold and finished with syrup.",
        price: "$25.00",
      },
      {
        name: "Bird's Nest (Osh Al Asfour)",
        description:
          "Delicate shredded phyllo nests filled with pistachios and soaked in floral syrup. A beautiful and festive Iraqi sweet.",
        price: "$21.99",
      },
      {
        name: "Dehena (Iraqi Dessert)",
        description:
          "A traditional Iraqi sweet made with date syrup and butter — warm, rich, and deeply comforting. A true taste of Baghdad.",
        price: "$12.00",
      },
      {
        name: "Ma'amoul",
        description:
          "Buttery semolina cookies stuffed with date paste, walnut or pistachio.",
        price: "$2.50 / pc",
      },
      {
        name: "Manakish",
        description:
          "Flatbread topped with za'atar, cheese, or meat — Middle Eastern breakfast at its most authentic. A weekend staple in our Richardson bakery.",
        price: "$3.50",
        popular: true,
      },
      {
        name: "Fatayer — Spinach",
        description:
          "Hand-folded savory pies with spinach filling, baked fresh daily. Soft, golden, perfect with chai.",
        price: "$3.50 / pc",
        vegetarian: true,
      },
      {
        name: "Fatayer — Cheese",
        description:
          "Hand-folded savory pies with cheese filling, baked fresh daily.",
        price: "$3.50 / pc",
        vegetarian: true,
      },
      {
        name: "Fatayer — Meat",
        description:
          "Hand-folded savory pies with seasoned ground meat, baked fresh daily.",
        price: "$3.50 / pc",
      },
      {
        name: "Iraqi Samoon (4 pc)",
        description:
          "Iraq's traditional oval-shaped bread, baked fresh in our stone oven throughout the day.",
        price: "$4.49",
        popular: true,
      },
      {
        name: "Tandoor Bread (6 pc)",
        description:
          "Traditional flatbread baked in our tandoor oven. Soft, chewy, and perfect with any meal.",
        price: "$6.99",
      },
      {
        name: "Iraqi Bread (3 pc)",
        description:
          "Classic Iraqi-style round bread, baked fresh daily.",
        price: "$3.99",
      },
      {
        name: "Bread (1 pc)",
        description:
          "Single piece of freshly baked bread.",
        price: "$1.99",
      },
      {
        name: "Samoon (1 pc)",
        description:
          "Single piece of our signature Iraqi samoon bread.",
        price: "$1.25",
      },
      {
        name: "Custom Dessert Tray",
        description:
          "Mixed tray of our signature sweets — perfect for parties, weddings and Eid celebrations. Order ahead.",
        price: "From $45",
      },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    description: "Traditional Iraqi tea, fresh juices and cold drinks.",
    image: "/Images/menu/beverages.webp",
    items: [
      {
        name: "Iraqi Chai",
        description: "Strong black tea with cardamom — served Iraqi-style.",
        price: "$2.99",
      },
      {
        name: "Karak Chai",
        description:
          "Our signature variety. Rich, creamy black tea slowly steeped with cardamom, milk, and a touch of sweetness — the way Iraqi mornings are meant to start.",
        price: "$3.99",
        popular: true,
      },
      {
        name: "Turkish Coffee",
        description: "Fresh-ground, slow-brewed with cardamom.",
        price: "$3.99",
      },
      {
        name: "Yemeni Coffee",
        description:
          "Aromatic spiced coffee brewed Yemeni-style — warm, fragrant, and deeply satisfying.",
        price: "$3.99",
      },
      {
        name: "Apricot Drink (Torshana)",
        description:
          "A traditional Iraqi dried-apricot drink — sweet, tangy, and refreshing. A Ramadan and celebration staple.",
        price: "$4.99",
      },
      {
        name: "Raisin Juice",
        description:
          "Naturally sweet juice made from soaked raisins. Light, refreshing, and full of flavor.",
        price: "$4.99",
      },
      {
        name: "Dried Lime Juice (Loomi)",
        description:
          "A uniquely Iraqi drink made from dried black limes. Tart, earthy, and unlike anything else.",
        price: "$4.99",
      },
      {
        name: "Mint Lemonade",
        description: "Fresh lemons blended with mint and a touch of sugar.",
        price: "$4.99",
      },
      {
        name: "Mango Juice",
        description: "Fresh mango, served chilled.",
        price: "$4.99",
      },
      {
        name: "Soft Drinks",
        description: "Coke, Diet Coke, Sprite, Fanta.",
        price: "$2.99",
      },
    ],
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    description: "Cool off with our classic ice cream — available by the cone or cup.",
    image: "/Images/menu/beverages.webp",
    items: [
      {
        name: "Small Cone",
        description: "A single scoop of creamy ice cream in a classic crispy cone.",
        price: "$1.50",
      },
      {
        name: "Large Cone",
        description: "A generous scoop of creamy ice cream in a large crispy cone.",
        price: "$2.99",
      },
      {
        name: "Ice Cream Cup",
        description: "Creamy ice cream served in a cup — no cone, just the good stuff.",
        price: "$3.00",
      },
    ],
  },
];
