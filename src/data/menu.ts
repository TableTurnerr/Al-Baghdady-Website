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
        price: "$8.99",
        popular: true,
      },
      {
        name: "Baklava (Mixed Tray)",
        description:
          "Layers of phyllo, walnut, pistachio and honey. Available by the piece or tray.",
        price: "$3.50 / pc",
        popular: true,
      },
      {
        name: "Ladyfingers (Znood Al Sit)",
        description:
          "Crispy phyllo rolls filled with sweet cream and dipped in syrup.",
        price: "$3.50 / pc",
      },
      {
        name: "Ma'amoul",
        description:
          "Buttery semolina cookies stuffed with date paste, walnut or pistachio.",
        price: "$2.50 / pc",
      },
      {
        name: "Samoon Bread",
        description:
          "Iraq's traditional oval-shaped bread, baked fresh in our stone oven throughout the day.",
        price: "$1.50 / pc",
        popular: true,
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
        name: "Turkish Coffee",
        description: "Fresh-ground, slow-brewed with cardamom.",
        price: "$3.99",
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
];
