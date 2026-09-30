// SAMPLE DATA ONLY. Every brand, product, price and rating below is invented
// for the concept prototype. In the full build this file is replaced by data
// from the Amazon Creators API plus the agency's own editorial notes.

export const BRAND = {
  name: 'Shortlist',
  tagline: 'The top 10 in every category, without the endless scrolling.',
}

export const PRICE_AS_OF = '30 Sep 2026'

// Mirrors Amazon's "Shop by Category" layout. Only categories with `live: true`
// have pages in the prototype; the rest show the intended structure.
export const DEPARTMENTS = [
  {
    name: 'Kitchen',
    icon: 'pot',
    categories: [
      { name: 'Kitchen Essentials', slug: 'kitchen', live: true },
      { name: 'Cookware', live: false },
      { name: 'Small Appliances', live: false },
      { name: 'Storage', live: false },
    ],
  },
  {
    name: 'Pet Supplies',
    icon: 'paw',
    categories: [
      { name: 'Pet Supplies', slug: 'pet-supplies', live: true },
      { name: 'Dog Food', live: false },
      { name: 'Cat Litter', live: false },
      { name: 'Toys', live: false },
    ],
  },
  {
    name: 'Grocery',
    icon: 'cup',
    categories: [
      { name: 'Coffee & Tea', slug: 'coffee-tea', live: true },
      { name: 'Snacks', live: false },
      { name: 'Breakfast', live: false },
      { name: 'Pantry Staples', live: false },
    ],
  },
  {
    name: 'Home',
    icon: 'lamp',
    categories: [
      { name: 'Bedding', live: false },
      { name: 'Bath', live: false },
      { name: 'Cleaning', live: false },
      { name: 'Decor', live: false },
    ],
  },
  {
    name: 'Beauty',
    icon: 'bottle',
    categories: [
      { name: 'Skincare', live: false },
      { name: 'Hair Care', live: false },
      { name: 'Makeup', live: false },
      { name: 'Fragrance', live: false },
    ],
  },
  {
    name: 'Sports & Outdoors',
    icon: 'ball',
    categories: [
      { name: 'Fitness', live: false },
      { name: 'Camping', live: false },
      { name: 'Cycling', live: false },
      { name: 'Water Bottles', live: false },
    ],
  },
]

const p = (rank, id, name, brand, icon, hue, rating, reviews, price, reason, extra = {}) => ({
  rank, id, name, brand, icon, hue, rating, reviews, price, reason, ...extra,
})

export const CATEGORIES = [
  {
    slug: 'kitchen',
    name: 'Kitchen Essentials',
    department: 'Kitchen',
    icon: 'pot',
    intro:
      'The kitchen tools people buy most, narrowed to ten. We looked at bestseller rank, long-term ratings and how often each item is bought again, then wrote a one-line reason for each pick.',
    related: ['coffee-tea', 'pet-supplies'],
    featured: p(0, 'k-feat', 'ProSear 12" Carbon Steel Pan', 'Hearthline', 'pan', 28, 4.7, 2140, 54.0,
      'Pre-seasoned carbon steel that heats faster than cast iron and weighs half as much.'),
    products: [
      p(1, 'k1', 'CrispAir 5.8 qt Air Fryer', 'Voltina', 'fryer', 210, 4.7, 48210, 89.99,
        'The best balance of basket size, even cooking and easy cleaning at this price.',
        {
          summary: {
            overview:
              'A mid-size air fryer with a square basket that fits a whole chicken or two portions of fries. It is the most consistent performer in its price band and the one buyers most often recommend to friends.',
            features: ['5.8 qt square nonstick basket', '8 one-touch presets', 'Dishwasher-safe basket and tray', 'Shake reminder at the halfway point'],
            pros: ['Very even browning', 'Quiet compared with rivals', 'Basket is easy to clean'],
            cons: ['Takes up a lot of counter space', 'Presets run a little hot'],
            suits: 'Households of 2 to 4 who want quick weeknight meals without heating the oven.',
          },
        }),
      p(2, 'k2', 'Everyday 8" Chef Knife', 'Kanto Steel', 'knife', 0, 4.8, 22035, 34.95,
        'A sharp, well-balanced knife that stays sharp far longer than its price suggests.'),
      p(3, 'k3', 'Classic 10.25" Cast Iron Skillet', 'Oakridge Foundry', 'pan', 20, 4.8, 61420, 24.9,
        'Near-indestructible, oven safe and pre-seasoned. Improves with every use.'),
      p(4, 'k4', 'QuickBoil 1.7L Electric Kettle', 'Voltina', 'kettle', 190, 4.6, 30811, 29.99,
        'Boils a full kettle in under five minutes and switches off reliably.'),
      p(5, 'k5', 'Bamboo Cutting Board Set (3)', 'Greenfold', 'board', 90, 4.6, 18502, 22.99,
        'Three sizes, juice grooves and gentle on knife edges.'),
      p(6, 'k6', 'Stackable Glass Storage Set (18 pc)', 'Clearkeep', 'box', 180, 4.5, 27190, 39.99,
        'Leak-proof lids and glass that goes from freezer to microwave.'),
      p(7, 'k7', 'BlendPro 1000W Countertop Blender', 'Kinetic', 'blender', 350, 4.5, 15644, 79.0,
        'Crushes ice and frozen fruit smoothly without the premium price.'),
      p(8, 'k8', 'Precision Digital Kitchen Scale', 'Measurely', 'scale', 160, 4.7, 40233, 13.99,
        'Accurate to 1 g, slim enough to store in a drawer.'),
      p(9, 'k9', '10-Piece Nonstick Cookware Set', 'Hearthline', 'pot', 30, 4.4, 12087, 119.99,
        'A full starter kitchen in one box with solid everyday nonstick.'),
      p(10, 'k10', 'Silicone Utensil Set (12 pc)', 'Greenfold', 'spoon', 120, 4.6, 9820, 19.99,
        'Heat-resistant, safe on nonstick and easy to wash.'),
    ],
  },
  {
    slug: 'pet-supplies',
    name: 'Pet Supplies',
    department: 'Pet Supplies',
    icon: 'paw',
    intro:
      'Everyday essentials for dogs and cats that owners rate highly and keep buying. Picks favour durability and safety over novelty.',
    related: ['kitchen', 'coffee-tea'],
    featured: p(0, 'p-feat', 'CalmNest Orthopedic Dog Bed', 'Pawline', 'bed', 25, 4.8, 3380, 69.99,
      'Memory foam base with a washable cover, designed for older dogs and big breeds.'),
    products: [
      p(1, 'p1', 'FreshFlow Pet Water Fountain', 'Whiskerly', 'fountain', 200, 4.6, 35120, 32.99,
        'Encourages pets to drink more and runs quietly enough for a bedroom.',
        {
          summary: {
            overview:
              'A 2.5 L filtered water fountain for cats and small dogs. It keeps water moving and cool, which helps picky drinkers, and the pump is near silent.',
            features: ['2.5 L capacity', 'Triple filter with replaceable cartridges', 'Low-water auto shut-off', 'BPA-free body'],
            pros: ['Very quiet pump', 'Easy to take apart and clean', 'Cheap replacement filters'],
            cons: ['Needs cleaning every 1 to 2 weeks', 'Cord is on the short side'],
            suits: 'Cat owners, and anyone whose pet does not drink enough from a bowl.',
          },
        }),
      p(2, 'p2', 'No-Pull Adjustable Dog Harness', 'Trailmate', 'harness', 10, 4.6, 52310, 24.99,
        'Front clip reduces pulling, and the fit adjusts at four points.'),
      p(3, 'p3', 'Clumping Unscented Cat Litter 40 lb', 'Whiskerly', 'bag', 45, 4.7, 44210, 21.49,
        'Tight clumps, low dust and good odour control without perfume.'),
      p(4, 'p4', 'Slow Feeder Dog Bowl', 'Pawline', 'bowl', 150, 4.6, 29987, 12.99,
        'Slows fast eaters down to reduce bloating and vomiting.'),
      p(5, 'p5', 'Self-Grooming Slicker Brush', 'Groomwell', 'brush', 280, 4.7, 61230, 15.99,
        'Removes loose fur easily, and a push button clears the bristles.'),
      p(6, 'p6', 'Tough Chew Toy 3-Pack', 'Trailmate', 'bone', 35, 4.4, 18350, 17.99,
        'Durable enough for strong chewers, with no squeakers to rip out.'),
      p(7, 'p7', '5-Level Cat Tree with Scratching Posts', 'Whiskerly', 'tree', 30, 4.5, 14520, 59.99,
        'Stable, sisal-wrapped posts and two hideaways for multi-cat homes.'),
      p(8, 'p8', 'HD Pet Camera with Treat Toss', 'Kinetic', 'camera', 220, 4.3, 9870, 49.99,
        'Two-way audio and treat tossing without a mandatory subscription.'),
      p(9, 'p9', 'Leak-Proof Puppy Training Pads (100)', 'Pawline', 'pad', 190, 4.5, 38410, 26.99,
        'Absorbent, quick drying and built-in attractant for house training.'),
      p(10, 'p10', 'Grain-Free Salmon Dog Treats', 'Groomwell', 'bone', 15, 4.6, 12440, 11.99,
        'Single-protein treats that suit dogs with sensitive stomachs.'),
    ],
  },
  {
    slug: 'coffee-tea',
    name: 'Coffee & Tea',
    department: 'Grocery',
    icon: 'cup',
    intro:
      'The coffees and teas that top the bestseller charts and hold up on flavour. Covers beans, ground, pods and loose leaf so there is a pick for every setup.',
    related: ['kitchen', 'pet-supplies'],
    featured: p(0, 'c-feat', 'Single Origin Colombia Whole Bean 2 lb', 'Altura Roasters', 'beans', 25, 4.7, 1920, 27.99,
      'Small-batch medium roast with caramel and citrus notes, roasted to order.'),
    products: [
      p(1, 'c1', 'House Blend Medium Roast Whole Bean 2 lb', 'Morning Ritual', 'beans', 28, 4.6, 71220, 17.99,
        'A smooth, crowd-pleasing everyday coffee at a very fair price per cup.',
        {
          summary: {
            overview:
              'A medium roast blend of Central and South American beans. Balanced, not bitter, and forgiving in any brewer, which is why it tops so many repeat-purchase lists.',
            features: ['2 lb resealable bag with valve', '100% Arabica', 'Medium roast', 'Works in drip, French press and espresso'],
            pros: ['Consistent from bag to bag', 'Low price per cup', 'Good in both black and milky drinks'],
            cons: ['Not for people who like bold dark roasts', 'Roast date not printed on every bag'],
            suits: 'Daily drinkers who want reliable coffee without paying specialty prices.',
          },
        }),
      p(2, 'c2', 'Cold Brew Coffee Concentrate 32 oz', 'Chillbrew', 'bottle', 210, 4.5, 22340, 12.99,
        'Mix with water or milk for smooth iced coffee in seconds.'),
      p(3, 'c3', 'Dark Roast Coffee Pods (72 ct)', 'Morning Ritual', 'pod', 20, 4.6, 58410, 32.49,
        'Compatible with most single-serve brewers and bolder than most pods.'),
      p(4, 'c4', 'Organic Japanese Green Tea (100 bags)', 'Leafhouse', 'leaf', 110, 4.7, 19870, 14.99,
        'Clean, grassy flavour and individually wrapped for freshness.'),
      p(5, 'c5', 'Espresso Roast Whole Bean 2.2 lb', 'Altura Roasters', 'beans', 15, 4.5, 27650, 21.99,
        'Rich crema and chocolate notes at a price that suits daily espresso.'),
      p(6, 'c6', 'Masala Chai Loose Leaf 1 lb', 'Leafhouse', 'jar', 30, 4.6, 8120, 16.49,
        'Real spices, bold black tea and great with milk.'),
      p(7, 'c7', 'Instant Coffee Classic Roast 12 oz', 'QuickCup', 'jar', 25, 4.4, 33420, 9.99,
        'The best-tasting instant in our shortlist, handy for travel and office.'),
      p(8, 'c8', 'Herbal Tea Sampler (6 flavours, 60 bags)', 'Leafhouse', 'leaf', 330, 4.6, 11230, 13.99,
        'Caffeine-free variety pack that makes an easy gift.'),
      p(9, 'c9', 'Swiss Water Decaf Ground 12 oz', 'Morning Ritual', 'bag', 30, 4.5, 9870, 11.49,
        'Chemical-free decaf that still tastes like real coffee.'),
      p(10, 'c10', 'Earl Grey Black Tea (100 bags)', 'Leafhouse', 'cup', 260, 4.6, 16540, 10.99,
        'Fragrant bergamot without being perfumey.'),
    ],
  },
]

export const categoryBySlug = (slug) => CATEGORIES.find((c) => c.slug === slug)

export const ALL_PRODUCTS = CATEGORIES.flatMap((c) => [
  { ...c.featured, featured: true, category: c },
  ...c.products.map((prod) => ({ ...prod, category: c })),
])

export const productById = (id) => ALL_PRODUCTS.find((prod) => prod.id === id)

// Concept data for the admin wireframe.
export const ADMIN_SLOTS = CATEGORIES.map((c, i) => ({
  category: c.name,
  asin: ['B0SAMPLE01', 'B0SAMPLE02', 'B0SAMPLE03'][i],
  product: c.featured.name,
  client: c.featured.brand,
  start: '01 Oct 2026',
  end: '31 Dec 2026',
  clicks: [1284, 942, 1567][i],
  ctr: ['6.8%', '5.1%', '7.4%'][i],
}))
