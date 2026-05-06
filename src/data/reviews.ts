export type Review = {
  author: string;
  rating: number;
  text: string;
  date?: string;
  source?: "Google" | "Yelp" | "Tripadvisor" | "Zabihah";
};

export const REVIEWS: Review[] = [
  {
    author: "Ahmed K.",
    rating: 5,
    text: "Best Iraqi food in Dallas — maybe the entire US. The mixed grill platter is unreal and the samoon bread is the real thing. Reminds me of home in Baghdad.",
    source: "Google",
  },
  {
    author: "Sara M.",
    rating: 5,
    text: "Their kanafa is the best in Dallas. We ordered a custom dessert tray for our Eid party and everyone asked where it was from. The baklava is incredible.",
    source: "Google",
  },
  {
    author: "Omar A.",
    rating: 5,
    text: "Authentic Iraqi spices, juicy kabobs, and fresh samoon out of the oven. The masgoof is a must-try if you've never had traditional Iraqi grilled fish.",
    source: "Google",
  },
  {
    author: "Fatima R.",
    rating: 5,
    text: "We catered our wedding through Al-Baghdady for 200+ guests. Everything was perfect — kabobs, biryani, dolma, the whole spread. Halal and incredible quality.",
    source: "Google",
  },
  {
    author: "David L.",
    rating: 5,
    text: "Tried this place on a recommendation and now we drive 40 minutes from Frisco every weekend. The lamb chops and quzi are perfection.",
    source: "Google",
  },
  {
    author: "Layla H.",
    rating: 5,
    text: "Warm hospitality, traditional decor and food that tastes exactly like my grandmother used to make. The dolma and tashreeb take me back.",
    source: "Google",
  },
];

export const PRESS_QUOTES = [
  {
    quote: "Best Iraqi food in Dallas",
    source: "Customer reviews — repeated across Google, Yelp and Zabihah",
  },
  {
    quote: "1,892 reviews. 4.4 stars. The most-reviewed Iraqi restaurant in DFW.",
    source: "Google Business Profile",
  },
  {
    quote: "Zabihah-verified halal across the entire menu",
    source: "Zabihah.com",
  },
  {
    quote: "Best Iraqi sweets in Dallas",
    source: "Customer reviews — Google",
  },
];
