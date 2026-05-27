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

export const products: Product[] = [
  {
    id: 1,
    name: "Raw Organic Cacao Beans",
    price: 800,
    unit: "kg",
    description: "Single-origin Tanzania organic cacao — unroasted and nutrient-dense.",
    longDesc: "Whole raw cacao beans sourced from single-origin farms in Tanzania. Unroasted to preserve natural enzymes, antioxidants, and flavour complexity.",
    benefits: ["Highest antioxidant levels", "Pure ceremonial flavour", "Rich in magnesium & iron", "Supports mood and focus"],
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2070",
    category: "raw"
  },
  {
    id: 2,
    name: "Roasted Shelled Cacao Beans",
    price: 850,
    unit: "kg",
    description: "Shelled and lightly roasted single-origin Tanzania beans for deep flavour.",
    longDesc: "Carefully roasted and shelled to unlock chocolatey notes while maintaining excellent nutrient density — ideal for snacking or grinding.",
    benefits: ["Deeper roasted flavour", "Easy to use in recipes", "Still rich in flavanols", "Great for confections"],
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?q=80&w=2070",
    category: "roasted"
  },
  {
    id: 3,
    name: "Cacao Nibs",
    price: 900,
    unit: "kg",
    description: "Crunchy cacao nibs from single-origin Tanzania — perfect topping or snack.",
    longDesc: "Broken pieces of roasted cacao bean offering intense flavour and texture. Use in smoothies, yoghurt, baking, or as a high-energy snack.",
    benefits: ["Versatile in recipes", "High fibre & healthy fats", "Natural theobromine boost", "No added sugar"],
    image: "https://images.unsplash.com/photo-1606313561344-9a2f7f0e8e2e?q=80&w=2070",
    category: "nibs"
  },
  {
    id: 4,
    name: "Cacao Powder",
    price: 850,
    unit: "kg",
    description: "Finely milled single-origin Tanzania cacao powder — perfect for lattes & baking.",
    longDesc: "Cold-pressed and finely milled to retain volatile nutrients and deliver a rich, velvety chocolate flavour without added sugars or fillers.",
    benefits: ["High flavanol content", "Great for beverages & baking", "Supports cardiovascular health", "Pure, unsweetened"],
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2070",
    category: "powder"
  },
  {
    id: 5,
    name: "Cacao Paste",
    price: 1000,
    unit: "kg",
    description: "100% single-origin Tanzania cacao paste — the base for artisan chocolate.",
    longDesc: "Stone-ground paste made from whole cacao beans. Use as a base for chocolate making or to add depth to recipes.",
    benefits: ["Concentrated flavour", "Ideal for chocolate-making", "Maximum theobromine and healthy fats", "Used by chefs and chocolatiers"],
    image: "https://images.unsplash.com/photo-1606313561344-9a2f7f0e8e2e?q=80&w=2070",
    category: "paste"
  }
];