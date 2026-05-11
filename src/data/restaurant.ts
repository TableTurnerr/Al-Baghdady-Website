export const RESTAURANT = {
  name: "Al-Baghdady Bakery & Café",
  legalName: "Al-Baghdady Restaurant & Bakery",
  tagline: "Authentic Iraqi Bakery & Breakfast Café in Richardson, TX",
  shortDescription:
    "Family-owned Iraqi bakery and breakfast café in Richardson, TX — serving authentic baklava, kunafa, samoon, ladyfingers, and traditional Iraqi breakfast since 2009, with family recipes dating back to Baghdad, 1919. Halal. Dine-in, takeout, delivery and catering.",
  longDescription:
    "Al-Baghdady has been serving the Dallas-Fort Worth community since 2009 with authentic Iraqi sweets and an in-house Arabic bakery rooted in over a century of family tradition. Our master baker Salah Hassan has spent 50 years perfecting the recipes his father passed down — baklava, kunafa, ladyfingers, burma, fatayer, and fresh samoon baked daily in our tandoor. Every morning except Monday, we serve a full traditional Iraqi breakfast: Kahi & Qeimar, Baqila, Kubba, the Albaghdady Plate, and more — paired with hot chai, the way Baghdad intended. Halal across the entire menu and Zabihah-verified.",

  address: {
    street: "327 N Greenville Ave",
    city: "Richardson",
    state: "TX",
    zip: "75081",
    country: "US",
    full: "327 N Greenville Ave, Richardson, TX 75081",
  },

  geo: {
    latitude: 32.9582,
    longitude: -96.7295,
  },

  phone: "(469) 547-2042",
  phoneRaw: "+14695472042",
  email: "albaghdady.bakery@gmail.com",
  url: "https://al-baghdady.com",

  priceRange: "$$",
  cuisine: ["Iraqi", "Middle Eastern", "Halal", "Arabic", "Bakery"],
  servesCuisine: "Iraqi",
  paymentAccepted: "Cash, Credit Card",
  currenciesAccepted: "USD",

  founded: "2012",
  familyRecipeSince: "1919",

  hours: [
    { day: "Monday",    open: "11:00", close: "21:00" },
    { day: "Tuesday",   open: "10:00", close: "21:00" },
    { day: "Wednesday", open: "10:00", close: "21:00" },
    { day: "Thursday",  open: "10:00", close: "21:00" },
    { day: "Friday",    open: "10:00", close: "22:00" },
    { day: "Saturday",  open: "10:00", close: "22:00" },
    { day: "Sunday",    open: "10:00", close: "21:00" },
  ],

  breakfastHours: {
    note: "Iraqi breakfast served every day except Monday",
    open: "10:00",
    close: "12:30",
  },

  ratingValue: 4.4,
  reviewCount: 1892,

  socials: {
    instagram:
      "https://www.instagram.com/albaghdadyrestaurant/",
    facebook:
      "https://www.facebook.com/AlBaghdadyRestaurant/",
    googleBusinessProfile:
      "https://www.google.com/maps/place/Al-Baghdady+Restaurant",
    yelp:
      "https://www.yelp.com/biz/al-baghdady-restaurant-richardson",
    postmates:
      "https://www.postmates.com/store/al-baghdady-restaurant-richardson",
    tripadvisor:
      "https://www.tripadvisor.com/Restaurant_Review-Al-Baghdady-Richardson",
    zabihah:
      "https://www.zabihah.com/biz/Richardson/Al-Baghdady-Restaurant",
  },

  orderOnline: "https://order.al-baghdady.com",

  features: [
    "Halal Certified",
    "Zabihah Verified",
    "In-House Arabic Bakery",
    "Iraqi Breakfast Served Daily (Except Monday)",
    "Catering Available",
    "Dine-In",
    "Takeout",
    "Delivery",
    "Family Owned",
    "Est. 2009 — Family Recipes Since 1919",
  ],

  areasServed: [
    "Richardson",
    "Plano",
    "Garland",
    "Addison",
    "North Dallas",
    "Far North Dallas",
    "Lake Highlands",
    "Murphy",
    "Sachse",
    "University Park",
    "Highland Park",
    "Frisco",
    "Allen",
    "McKinney",
    "Carrollton",
    "The Colony",
    "Coppell",
    "Irving",
    "Rowlett",
    "Wylie",
    "Mesquite",
    "Preston Hollow",
    "Park Cities",
  ],

  cateringAreas:
    "Richardson, Plano, Garland, Addison, Carrollton, Frisco, and the greater Dallas-Fort Worth metroplex",

  pressQuote: {
    text: "This hole-in-the-wall bakery in Richardson is a treasure.",
    source: "D Magazine",
  },
} as const;

export type RestaurantHours = (typeof RESTAURANT.hours)[number];
