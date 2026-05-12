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
    text: "Best Iraqi bakery in Dallas — maybe the entire US. The samoon is the real deal, baked fresh in the tandoor every morning. Reminds me of home in Baghdad.",
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
    text: "Authentic Iraqi breakfast done right. Kahi & qeimar that tastes exactly like my mom's, fresh samoon, hot karak chai — this is what Sunday mornings should be.",
    source: "Google",
  },
  {
    author: "Fatima R.",
    rating: 5,
    text: "We catered our daughter's wedding through Albaghdady — baklava trays, kunafa platters, and a full custom dessert spread for 200+ guests. Every tray was perfect. Multiple aunts have asked for the bakery's number.",
    source: "Google",
  },
  {
    author: "David L.",
    rating: 5,
    text: "Tried this place on a recommendation and now we drive 40 minutes from Frisco every weekend. The pistachio baklava and bread baklava are perfection, and the breakfast plates are unreal.",
    source: "Google",
  },
  {
    author: "Layla H.",
    rating: 5,
    text: "Warm hospitality, traditional decor, and food that tastes exactly like my grandmother used to make. The baqila for breakfast and ladyfingers in the afternoon take me back.",
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
