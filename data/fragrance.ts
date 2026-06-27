// Fragrance schema
export interface Fragrance {
id: string;
name: string;

category: string[];
season: string[];
occasion: string[];
notes: string[];

longevity: number;
projection: number;

concentration: string;

gender: string[];

inspiration?: string[];

price: number;

image: string;

featured: boolean;

recommendation: string;

bestFor: string[];

personality: string;
}

// Fragrance dataset
export const fragrance: Fragrance[] = [
{
id: "gin-tastic",
name: "Gin-Tastic",


category: [
  "fresh",
  "citrus",
  "clean"
],

season: [
  "summer",
  "spring"
],

occasion: [
  "office",
  "casual",
  "daytime"
],

notes: [
  "juniper",
  "bergamot",
  "citrus",
  "green"
],

longevity: 7,
projection: 6,

concentration: "EDP",

gender: [
  "men",
  "unisex"
],

price: 999,

image: "/perfumes/gin-tastic.webp",

featured: true,

recommendation:
  "A fresh citrus fragrance perfect for office wear and warm weather.",

bestFor: [
  "office",
  "summer",
  "daily wear",
  "casual outings"
],

personality:
  "fresh clean energetic professional"


},

{
id: "blue-incense",
name: "Blue Incense",


category: [
  "blue",
  "woody",
  "smoky",
  "luxury"
],

season: [
  "autumn",
  "winter"
],

occasion: [
  "party",
  "evening",
  "night out"
],

notes: [
  "incense",
  "leather",
  "cedar",
  "woods"
],

longevity: 8,
projection: 7,

concentration: "EDP",

gender: [
  "men",
  "unisex"
],

inspiration: [
  "blue laverne",
  "laverne"
],

price: 850,

image: "/perfumes/blue-incense.webp",

featured: true,

recommendation:
  "A smoky woody fragrance built for evenings and special occasions.",

bestFor: [
  "parties",
  "winter",
  "night wear",
  "evening outings"
],

personality:
  "bold mysterious confident sophisticated"


},

{
id: "vintage-library",
name: "Vintage Library",


category: [
  "woody",
  "warm",
  "luxury",
  "elegant"
],

season: [
  "autumn",
  "winter"
],

occasion: [
  "formal",
  "evening",
  "special occasion"
],

notes: [
  "wood",
  "vanilla",
  "amber",
  "spices"
],

longevity: 9,
projection: 8,

concentration: "EDP",

gender: [
  "men",
  "unisex"
],

price: 1999,

image: "/perfumes/vintage-library.webp",

featured: true,

recommendation:
  "A refined woody fragrance with warm amber and spice nuances.",

bestFor: [
  "formal events",
  "winter evenings",
  "luxury occasions"
],

personality:
  "elegant mature classy intellectual"


},

{
id: "ombre-rose",
name: "Ombre Rose",


category: [
  "rose",
  "floral",
  "luxury",
  "romantic"
],

season: [
  "spring",
  "autumn"
],

occasion: [
  "date night",
  "evening",
  "special occasion"
],

notes: [
  "rose",
  "oud",
  "amber",
  "floral"
],

longevity: 9,
projection: 8,

concentration: "EDP",

gender: [
  "women",
  "unisex"
],

price: 1999,

image: "/perfumes/ombre-rose.webp",

featured: true,

recommendation:
  "A luxurious rose fragrance crafted for romantic evenings.",

bestFor: [
  "date nights",
  "romantic occasions",
  "special events"
],

personality:
  "romantic elegant luxurious charming"


},

{
id: "oud-greatness",
name: "Oud Greatness",


category: [
  "oud",
  "luxury",
  "dark",
  "powerful"
],

season: [
  "winter",
  "autumn"
],

occasion: [
  "formal",
  "luxury",
  "evening"
],

notes: [
  "oud",
  "saffron",
  "musk",
  "amber"
],

longevity: 10,
projection: 10,

concentration: "EDP",

gender: [
  "men",
  "unisex"
],

inspiration: [
  "oud for greatness",
  "initio",
  "initio oud for greatness"
],

price: 2499,

image: "/perfumes/oud-greatness.webp",

featured: true,

recommendation:
  "An intense oud fragrance with exceptional performance and luxury appeal.",

bestFor: [
  "luxury events",
  "winter nights",
  "formal occasions"
],

personality:
  "powerful dominant luxurious elite"


},

{
id: "qamrah-fresh",
name: "Qamrah Fresh",


category: [
  "fresh",
  "aquatic",
  "clean",
  "summer"
],

season: [
  "summer",
  "spring"
],

occasion: [
  "daily",
  "casual",
  "vacation"
],

notes: [
  "bergamot",
  "yuzu",
  "juniper",
  "musk"
],

longevity: 10,
projection: 8,

concentration: "EXTRAIT",

gender: [
  "men",
  "women",
  "unisex"
],

price: 1999,

image: "/perfumes/qamrah-fresh.webp",

featured: true,

recommendation:
  "A fresh aquatic fragrance with excellent performance and versatility.",

bestFor: [
  "summer",
  "travel",
  "daily wear"
],

personality:
  "fresh energetic vibrant carefree"


},

{
id: "goddess",
name: "Goddess",


category: [
  "sweet",
  "vanilla",
  "feminine",
  "luxury"
],

season: [
  "autumn",
  "winter",
  "spring"
],

occasion: [
  "date night",
  "evening",
  "special occasion"
],

notes: [
  "vanilla",
  "lavender",
  "cacao",
  "ginger"
],

longevity: 9,
projection: 8,

concentration: "EDP",

gender: [
  "women"
],

inspiration: [
  "burberry goddess",
  "goddess",
  "burberry"
],

price: 1999,

image: "/perfumes/goddess.webp",

featured: true,

recommendation:
  "A rich vanilla fragrance with a sophisticated feminine signature.",

bestFor: [
  "date nights",
  "special occasions",
  "evening wear"
],

personality:
  "feminine elegant confident modern"


},

{
id: "bold-vetiver",
name: "Bold Vetiver",


category: [
  "woody",
  "vetiver",
  "dark",
  "masculine"
],

season: [
  "autumn",
  "winter"
],

occasion: [
  "office",
  "formal",
  "evening"
],

notes: [
  "vetiver",
  "incense",
  "wood",
  "cypress",
  "musk"
],

longevity: 9,
projection: 8,

concentration: "EDP",

gender: [
  "men",
  "unisex"
],

inspiration: [
  "encre noire",
  "lalique encre noire"
],

price: 1999,

image: "/perfumes/bold-vetiver.webp",

featured: false,

recommendation:
  "A dark woody vetiver fragrance with a refined masculine character.",

bestFor: [
  "office",
  "formal wear",
  "winter evenings"
],

personality:
  "masculine sophisticated dark confident"


}
];

//export interface fragrance {



//   id: string;
//   name: string;

//   category: string[];
//   season: string[];
//   occasion: string[];
//   notes: string[];

//   longevity: number;
//   projection: number;

//   concentration: string;

//   gender: string[];

//   inspiration?: string[];

//   price: number;

//   image: string;

//   featured: boolean;

//   recommendation: string;
// }

// export const fragrance: fragrance[] = [
//   {
//     id: "gin-tastic",
//     name: "Gin-Tastic",

//     category: ["fresh", "citrus", "summer"],

//     season: ["summer", "spring"],

//     occasion: ["office", "casual", "daytime"],

//     notes: [
//       "juniper",
//       "citrus",
//       "bergamot",
//       "green"
//     ],

//     longevity: 7,
//     projection: 6,

//     concentration: "EDP",

//     gender: ["men", "unisex"],

//     price: 999,

//     image: "/perfumes/gin-tastic.webp",

//     featured: true,

//     recommendation:
//       "Fresh citrus fragrance ideal for summer days and office wear."
//   },

//   {
//     id: "blue-incense",
//     name: "Blue Incense",

//     category: [
//       "fresh",
//       "blue",
//       "aquatic",
//       "versatile"
//     ],

//     season: [
//       "summer",
//       "spring",
//       "autumn"
//     ],

//     occasion: [
//       "party",
//       "incence",
//       "casual",
//       "night"
//     ],

//     notes: [
//       "incence",
//       "heavy",
//       "leather",
//       "cedar wood"
//     ],

//     longevity: 8,
//     projection: 7,

//     concentration: "EDP",

//     gender: [
//       "men",
//       "unisex"
//     ],

//     inspiration: [
//       "blue laverne laverne"
//     ],

//     price: 850,

//     image: "/perfumes/blue-incense.webp",

//     featured: true,

//     recommendation:
//       "INSPIRED BY Blue Laverne Laverne but we have done fusion in it"
//   },

//   {
//     id: "vintage-library",
//     name: "Vintage Library",

//     category: [
//       "woody",
//       "warm",
//       "luxury",
//       "elegant"
//     ],

//     season: [
//       "autumn",
//       "winter"
//     ],

//     occasion: [
//       "evening",
//       "formal",
//       "special occasion"
//     ],

//     notes: [
//       "wood",
//       "vanilla",
//       "amber",
//       "spices"
//     ],

//     longevity: 9,
//     projection: 8,

//     concentration: "EDP",

//     gender: [
//       "men",
//       "unisex"
//     ],

//     price: 1999,

//     image: "/perfumes/vintage-library.webp",

//     featured: true,

//     recommendation:
//       "Sophisticated and refined, ideal for evening wear and cooler weather."
//   },

//   {
//     id: "ombre-rose",
//     name: "Ombre Rose",

//     category: [
//       "floral",
//       "rose",
//       "luxury",
//       "romantic"
//     ],

//     season: [
//       "spring",
//       "autumn"
//     ],

//     occasion: [
//       "date night",
//       "evening",
//       "special occasion"
//     ],

//     notes: [
//       "rose",
//       "oud",
//       "amber",
//       "floral"
//     ],

//     longevity: 9,
//     projection: 8,

//     concentration: "EDP",

//     gender: [
//       "women",
//       "unisex"
//     ],

//     price: 1999,

//     image: "/perfumes/ombre-rose.webp",

//     featured: true,

//     recommendation:
//       "A luxurious rose fragrance perfect for romantic evenings and elegant occasions."
//   },

//   {
//     id: "oud-greatness",
//     name: "Oud Greatness",

//     category: [
//       "oud",
//       "luxury",
//       "dark",
//       "powerful"
//     ],

//     season: [
//       "winter",
//       "autumn"
//     ],

//     occasion: [
//       "evening",
//       "formal",
//       "luxury"
//     ],

//     notes: [
//       "oud",
//       "saffron",
//       "musk",
//       "amber"
//     ],

//     longevity: 10,
//     projection: 10,

//     concentration: "EDP",

//     gender: [
//       "men",
//       "unisex"
//     ],

//     inspiration: [
//       "oud for greatness"
//     ],

//     price: 2499,

//     image: "/perfumes/oud-greatness.webp",

//     featured: true,

//     recommendation:
//       "A powerful oud fragrance with exceptional longevity and strong presence."
//   },

//   {
//     id: "qamrah-fresh",
//     name: "Qamrah Fresh",

//     category: [
//       "fresh",
//       "aquatic",
//       "clean",
//       "summer"
//     ],

//     season: [
//       "summer",
//       "spring"
//     ],

//     occasion: [
//       "casual",
//       "daily",
//       "vacation",
//       "daytime"
//     ],

//     notes: [
//       "bergamot",
//       "yuzu",
//       "juniper",
//       "ginger",
//       "sea salt",
//       "sage",
//       "musk"
//     ],

//     longevity: 10,
//     projection: 8,

//     concentration: "EXTRAIT",

//     gender: [
//       "men",
//       "women",
//       "unisex"
//     ],

//     price: 1999,

//     image: "/perfumes/qamrah-fresh.webp",

//     featured: true,

//     recommendation:
//       "Fresh aquatic fragrance with a clean summer vibe and excellent performance."
//   },

//   {
//     id: "goddess",
//     name: "Goddess",

//     category: [
//       "vanilla",
//       "sweet",
//       "feminine",
//       "luxury"
//     ],

//     season: [
//       "autumn",
//       "winter",
//       "spring"
//     ],

//     occasion: [
//       "date night",
//       "evening",
//       "special occasion"
//     ],

//     notes: [
//       "vanilla",
//       "lavender",
//       "cacao",
//       "ginger"
//     ],

//     longevity: 9,
//     projection: 8,

//     concentration: "EDP",

//     gender: [
//       "women"
//     ],

//     inspiration: [
//       "burberry goddess"
//     ],

//     price: 1999,

//     image: "/perfumes/goddess.webp",

//     featured: true,

//     recommendation:
//       "Warm vanilla fragrance designed for elegant evenings and romantic occasions."
//   },

//   {
//     id: "bold-vetiver",
//     name: "Bold Vetiver",

//     category: [
//       "woody",
//       "vetiver",
//       "dark",
//       "masculine"
//     ],

//     season: [
//       "autumn",
//       "winter"
//     ],

//     occasion: [
//       "office",
//       "formal",
//       "evening"
//     ],

//     notes: [
//       "vetiver",
//       "incense",
//       "wood",
//       "cypress",
//       "musk"
//     ],

//     longevity: 9,
//     projection: 8,

//     concentration: "EDP",

//     gender: [
//       "men",
//       "unisex"
//     ],

//     inspiration: [
//       "encre noire"
//     ],

//     price: 1999,

//     image: "/perfumes/bold-vetiver.webp",

//     featured: false,

//     recommendation:
//       "A sophisticated woody vetiver fragrance with a dark and masculine personality."
//   }
// ];