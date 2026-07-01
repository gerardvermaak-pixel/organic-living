export interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  description: string;
  longDesc: string;
  benefits: string[];
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Raw Organic Cacao Beans",
    price: 800,
    unit: "kg",
    description: "Organic, single-origin Tanzania cacao — unroasted and nutrient-dense.",
    longDesc: "Whole organic raw cacao beans sourced from smallholder farms in Tanzania's Mbeya region. Unroasted to preserve natural enzymes, antioxidants, and flavour complexity.",
    benefits: ["Highest antioxidant levels", "Pure ceremonial flavour", "Rich in magnesium & iron", "Supports mood and focus"],
    image: "/Cacao1%20(5).jpg",
    category: "raw"
  },
  {
    id: 2,
    name: "Roasted Shelled Cacao Beans",
    price: 850,
    unit: "kg",
    description: "Organic, shelled and lightly roasted single-origin Tanzania beans for deep flavour.",
    longDesc: "Carefully roasted organic beans, shelled to unlock chocolatey notes while maintaining excellent nutrient density — ideal for snacking or grinding.",
    benefits: ["Deeper roasted flavour", "Easy to use in recipes", "Still rich in flavanols", "Great for confections"],
    image: "/Cacao1%20(9).jpg",
    category: "roasted"
  },
  {
    id: 3,
    name: "Cacao Nibs",
    price: 900,
    unit: "kg",
    description: "Organic cacao nibs from single-origin Tanzania — perfect topping or snack.",
    longDesc: "Broken pieces of roasted organic cacao bean offering intense flavour and texture. Use in smoothies, yoghurt, baking, or as a high-energy snack.",
    benefits: ["Versatile in recipes", "High fibre & healthy fats", "Natural theobromine boost", "No added sugar"],
    image: "/Cacao1%20(10).jpg",
    category: "nibs"
  },
  {
    id: 4,
    name: "Cacao Powder",
    price: 850,
    unit: "kg",
    description: "Organic, finely milled single-origin Tanzania cacao powder — perfect for lattes & baking.",
    longDesc: "Cold-pressed and finely milled organic cacao powder to retain volatile nutrients and deliver a rich, velvety chocolate flavour without added sugars or fillers.",
    benefits: ["High flavanol content", "Great for beverages & baking", "Supports cardiovascular health", "Pure, unsweetened"],
    image: "/Cacao1%20(11).jpg",
    category: "powder"
  },
  {
    id: 5,
    name: "Cacao Paste",
    price: 1000,
    unit: "kg",
    description: "100% organic single-origin Tanzania cacao paste — the base for artisan chocolate.",
    longDesc: "Stone-ground paste made from whole organic cacao beans. Use as a base for chocolate making or to add depth to recipes.",
    benefits: ["Concentrated flavour", "Ideal for chocolate-making", "Maximum theobromine and healthy fats", "Used by chefs and chocolatiers"],
    image: "/Cacao1%20(17).jpg",
    category: "paste"
  }
];