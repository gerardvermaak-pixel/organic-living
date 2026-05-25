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
    name: "Raw Cacao Beans",
    price: 850,
    unit: "kg",
    description: "The purest form — unroasted, unprocessed, maximum nutrients.",
    longDesc: "Our raw cacao beans are harvested at peak ripeness from organic farms in South America. Retaining all natural enzymes, antioxidants, and mood-enhancing compounds.",
    benefits: ["Highest antioxidant levels", "Natural mood elevation", "Sustained energy without crash", "Rich in magnesium & iron"],
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2070",
    category: "raw"
  },
  {
    id: 2,
    name: "Roasted Shelled Cacao Beans",
    price: 900,
    unit: "kg",
    description: "Roasted for deeper flavour while preserving 85% of nutrients.",
    longDesc: "Gently roasted to unlock rich chocolate notes while maintaining exceptional nutritional density. Perfect for snacking or grinding fresh.",
    benefits: ["Enhanced flavour profile", "Easier digestion", "Still extremely high in flavanols", "Ideal for daily consumption"],
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?q=80&w=2070",
    category: "roasted"
  },
  {
    id: 3,
    name: "Cacao Nibs",
    price: 1000,
    unit: "kg",
    description: "Crunchy, versatile superfood — nature's dark chocolate chips.",
    longDesc: "Pure broken cacao beans. Add to smoothies, yogurt, salads or eat straight. The most convenient way to enjoy raw cacao daily.",
    benefits: ["Versatile in recipes", "High fibre & healthy fats", "Natural theobromine boost", "No added sugar"],
    image: "https://images.unsplash.com/photo-1606313561344-9a2f7f0e8e2e?q=80&w=2070",
    category: "nibs"
  },
  {
    id: 4,
    name: "Cacao Powder",
    price: 1000,
    unit: "kg",
    description: "Cold-pressed for maximum nutrient retention. Perfect for lattes & baking.",
    longDesc: "Our premium cacao powder is cold-pressed to preserve heat-sensitive nutrients. Rich, velvety texture with intense chocolate flavour.",
    benefits: ["Highest flavanol content", "Perfect for smoothies & lattes", "Supports cardiovascular health", "Natural pre-workout"],
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2070",
    category: "powder"
  },
  {
    id: 5,
    name: "Cacao Paste",
    price: 1200,
    unit: "kg",
    description: "100% pure cacao liquor — the foundation of all fine chocolate.",
    longDesc: "Stone-ground cacao beans turned into rich paste. The ultimate ingredient for making your own chocolate or adding intense flavour to recipes.",
    benefits: ["Most concentrated form", "Ideal for homemade chocolate", "Maximum theobromine & mood support", "Used by top chefs worldwide"],
    image: "https://images.unsplash.com/photo-1606313561344-9a2f7f0e8e2e?q=80&w=2070",
    category: "paste"
  }
];