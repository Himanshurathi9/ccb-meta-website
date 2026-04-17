export const ASSETS = {
  // Categorized Assets from user provided images
  drinks: [
    "https://public.blob.vercel-storage.com/ccb-beverages-1.jpg", // Latte/Mocha glass
    "https://public.blob.vercel-storage.com/ccb-cappuccino-3.jpg", // Heart art cappuccino
    "https://public.blob.vercel-storage.com/ccb-drinks-4.jpg", // Pink shakes
  ],
  desserts: [
    "https://public.blob.vercel-storage.com/ccb-freakshake-2.jpg", // Oreo freakshake
    "https://public.blob.vercel-storage.com/ccb-shake-5.jpg", // Mason jar shake
  ],
  interiors: [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2047", // Luxury cafe indoor
    "https://images.unsplash.com/photo-1502472911538-4e897914041d?auto=format&fit=crop&q=80&w=2072", // Modern restaurant vibes
    "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=2071", // Evening cafe setting
  ],
  food: [
    "https://images.unsplash.com/photo-1544070282-59ad53a39e65?auto=format&fit=crop&q=80&w=2070", // Premium Pasta
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2070", // Luxury Margherita Pizza
    "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?auto=format&fit=crop&q=80&w=1933", // Grilled Salmon
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1974", // Gourmet Burger
  ]
};

// Note: Using Unsplash for placeholders where specific interior/food shots are needed 
// to complement the user's provided assets and achieve that "10L+ quality".

export const MENU_CATEGORIES = ["All", "Pizza", "Pasta", "Beverages", "Snacks", "Desserts", "Signature"];

export const MENU_ITEMS = [
  // PIZZA
  { id: 1, category: "Pizza", name: "CCB Royale Truffle", price: 850, rating: 5.0, description: "Fresh truffles, mozzarella di bufala, and 24-month aged parmesan.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800" },
  { id: 2, category: "Pizza", name: "Fiery Pepperoni", price: 620, rating: 4.8, description: "Spicy Italian pepperoni with a blend of four volcanic cheeses.", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800" },
  
  // PASTA
  { id: 3, category: "Pasta", name: "Linguine al Pesto Noir", price: 580, rating: 4.9, description: "Handmade linguine tossed in black basil pesto and pine nuts.", image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800" },
  { id: 4, category: "Pasta", name: "Golden Carbonara", price: 650, rating: 5.0, description: "Traditional roman carbonara with organic egg yolks and guanciale.", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800" },
  
  // BEVERAGES (Provided Assets)
  { id: 5, category: "Beverages", name: "Rich Indulgence Mocha", price: 320, rating: 4.9, description: "Premium beans layered with heavy creamy foam and dark chocolate.", image: ASSETS.drinks[0] },
  { id: 6, category: "Beverages", name: "Heartwood Cappuccino", price: 280, rating: 4.7, description: "Silky smooth foam with master-crafted latte art.", image: ASSETS.drinks[1] },
  { id: 7, category: "Beverages", name: "Pink Velvet Shakes", price: 450, rating: 4.8, description: "Two luxurious berry-infused cold beverages with vanilla peaks.", image: ASSETS.drinks[2] },
  
  // DESSERTS (Provided Assets)
  { id: 8, category: "Desserts", name: "Oreo Freakshake Supreme", price: 550, rating: 5.0, description: "The ultimate indulgence with crushed oreos and molten ganache.", image: ASSETS.desserts[0] },
  { id: 9, category: "Desserts", name: "Midnight Mason Shake", price: 480, rating: 4.9, description: "Chocolate swirls in a rustic mason jar topped with whipped clouds.", image: ASSETS.desserts[1] },

  // SIGNATURE (Top-tier highlights)
  { id: 10, category: "Signature", name: "The Gold Leaf Burger", price: 1200, rating: 5.0, description: "Wagyu beef patty with edible 24k gold leaf and truffle mayo.", image: "https://images.unsplash.com/photo-1550317138-10000687ad32?auto=format&fit=crop&w=800" },
];
