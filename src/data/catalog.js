// SAMPLE DATA ONLY. Every brand, product, price and rating below is invented
// for the concept prototype. In the full build, product data comes from the
// Amazon Creators API and the editorial notes from the content team.
//
// Structure: department > subcategory > Top 10 list. Products only appear
// inside a subcategory list, never on home or department pages.
// Photos are sample stock images from Unsplash (public/images), named by slug or product id.

export const BRAND = {
  name: 'Bestona Mazon',
  tagline: 'Honest Top 10 lists for the things people buy most on Amazon.',
}

export const UPDATED = '1 Oct 2026'

// p(id, name, brand, rating, reviews, price, label, blurb, highlights)
const p = (id, name, brand, rating, reviews, price, label, blurb, highlights) => ({
  id, name, brand, rating, reviews, price, label, blurb, highlights,
})

const LISTS = {
  'air-fryers': {
    icon: 'fryer',
    title: 'The 10 best air fryers',
    intro: 'Air fryers crisp food with fast-moving hot air and very little oil. We compared basket size, how evenly they cook, noise and how easy they are to clean, then ranked the ten bestsellers that hold up best.',
    featured: p('af-f', 'ProCrisp Dual Zone 8 qt Air Fryer', 'Hearthline', 4.7, 3120, 129.99, 'Featured Pick',
      'Two independent baskets so mains and sides finish at the same time. A strong choice for families.',
      ['Two 4 qt baskets with sync finish', '6 cooking modes', 'Dishwasher-safe baskets']),
    products: [
      p('af1', 'CrispAir 5.8 qt Air Fryer', 'Voltina', 4.7, 48210, 89.99, 'Best overall',
        'The best balance of basket size, even cooking and easy cleaning at this price.',
        ['Fits a whole chicken', '8 one-touch presets', 'Quiet fan']),
      p('af2', 'Compact 2 qt Air Fryer', 'Kinetic', 4.6, 21330, 44.99, 'Best for one person',
        'Small footprint that suits dorms and small kitchens, and heats up in two minutes.',
        ['2 qt basket', 'Fits under cabinets', 'Simple dial controls']),
      p('af3', 'Air Fryer Oven 10-in-1, 25 qt', 'Hearthline', 4.5, 15620, 149.99, 'Best air fryer oven',
        'Air fries, roasts, bakes and dehydrates. Replaces a toaster oven too.',
        ['Fits a 12" pizza', 'Rotisserie included', 'Glass door to watch food']),
      p('af4', 'ValueFry 4 qt Air Fryer', 'Brightway', 4.4, 33410, 54.99, 'Best budget',
        'Gets the basics right for much less, with a basket big enough for two.',
        ['4 qt basket', 'Nonstick coating', 'Auto shut-off']),
      p('af5', 'SmartCrisp 6 qt with App Control', 'Voltina', 4.5, 9870, 119.99, 'Best smart air fryer',
        'Start, pause and get alerts from your phone, with 100+ guided recipes.',
        ['Wi-Fi and app control', 'Voice assistant support', 'Recipe library']),
      p('af6', 'ClearView 6 qt Air Fryer with Window', 'Kinetic', 4.6, 18230, 79.99, 'Best for beginners',
        'A viewing window and internal light mean you never need to open the basket to check.',
        ['Viewing window and light', 'Odour filter', 'Shake reminder']),
      p('af7', 'Stainless Steel 5 qt Air Fryer', 'Oakridge', 4.5, 7340, 99.99, 'Best non-plastic',
        'Stainless basket and body for people avoiding nonstick coatings.',
        ['Stainless basket', 'No coating', 'Easy to scrub']),
      p('af8', 'XL Family 9 qt Air Fryer', 'Brightway', 4.4, 11250, 109.99, 'Best large capacity',
        'Cooks for six in one go. Wide basket makes single-layer cooking easy.',
        ['9 qt basket', '1700W', 'Divider insert']),
      p('af9', 'Quiet 5 qt Air Fryer', 'Calmline', 4.5, 6120, 84.99, 'Quietest',
        'Noticeably quieter than most, which matters in open-plan homes.',
        ['Low-noise fan', 'Touch screen', 'Preheat function']),
      p('af10', 'Air Fryer Toaster Combo', 'Kinetic', 4.3, 8840, 69.99, 'Best combo',
        'A toaster and air fryer in one small unit to save counter space.',
        ['2-slice toaster slot', 'Small air fry basket', 'Compact']),
    ],
  },
  'dog-beds': {
    icon: 'bed',
    title: 'The 10 best dog beds',
    intro: 'A good dog bed supports joints, stays clean and survives scratching. We looked at foam quality, washable covers and durability across sizes and ranked the beds owners rate most.',
    featured: p('db-f', 'CalmNest Orthopedic Dog Bed, Large', 'Pawline', 4.8, 3380, 69.99, 'Featured Pick',
      'Memory foam base with a washable cover, designed for older dogs and big breeds.',
      ['4" orthopedic memory foam', 'Machine-washable cover', 'Non-slip base']),
    products: [
      p('db1', 'Bolster Orthopedic Dog Bed', 'Restpaw', 4.7, 41220, 59.99, 'Best overall',
        'Supportive foam with raised sides that dogs love to rest their heads on.',
        ['Egg-crate foam', 'Raised bolsters', 'Removable cover']),
      p('db2', 'Calming Donut Dog Bed', 'Snugglepup', 4.6, 88410, 34.99, 'Best for anxious dogs',
        'Plush round bed that helps nervous dogs settle and sleep.',
        ['Faux-fur shell', 'Raised rim', 'Machine washable']),
      p('db3', 'Elevated Cooling Dog Cot', 'Trailmate', 4.6, 29870, 29.99, 'Best for hot weather',
        'Breathable mesh raised off the floor keeps dogs cool indoors and out.',
        ['Steel frame', 'Breathable mesh', 'Indoor and outdoor']),
      p('db4', 'Chew-Resistant Crate Pad', 'Toughtail', 4.4, 12340, 39.99, 'Best for chewers',
        'Tough ballistic fabric that stands up to puppies and heavy chewers.',
        ['Ballistic nylon', 'Fits standard crates', 'Water resistant']),
      p('db5', 'Memory Foam Dog Bed, XL', 'Pawline', 4.6, 17650, 89.99, 'Best for large breeds',
        'Thick foam that does not flatten under big dogs.',
        ['5" foam', 'Waterproof liner', 'Up to 120 lb']),
      p('db6', 'Budget Pillow Dog Bed', 'Brightway', 4.3, 22110, 19.99, 'Best budget',
        'Simple, soft and easy to wash for less than the price of a bag of food.',
        ['Fibre fill', 'Washable', 'Several sizes']),
      p('db7', 'Cave Hooded Dog Bed', 'Snugglepup', 4.5, 9870, 42.99, 'Best for burrowers',
        'A hooded design for small dogs that like to tuck in and hide.',
        ['Hooded cover', 'Soft sherpa', 'Small to medium dogs']),
      p('db8', 'Waterproof Outdoor Dog Bed', 'Trailmate', 4.4, 6540, 54.99, 'Best outdoor',
        'Wipe-clean fabric for patios, cars and muddy dogs.',
        ['Waterproof shell', 'Wipe clean', 'Carry handles']),
      p('db9', 'Travel Roll-Up Dog Bed', 'Restpaw', 4.5, 5430, 32.99, 'Best for travel',
        'Rolls up small with a strap, ideal for trips and visits.',
        ['Roll-up design', 'Carry strap', 'Lightweight']),
      p('db10', 'Sofa-Style Dog Couch', 'Pawline', 4.5, 14320, 64.99, 'Best looking',
        'A couch-shaped bed that fits in with living room furniture.',
        ['Three-sided bolster', 'Neutral colours', 'Removable cover']),
    ],
  },
  'coffee-beans': {
    icon: 'beans',
    title: 'The 10 best whole bean coffees',
    intro: 'Whole beans stay fresh longer and taste better when ground just before brewing. We ranked the bestselling bags on flavour, freshness and price per cup, from smooth everyday blends to espresso roasts.',
    featured: p('cb-f', 'Single Origin Colombia, 2 lb', 'Altura Roasters', 4.7, 1920, 27.99, 'Featured Pick',
      'Small-batch medium roast with caramel and citrus notes, roasted to order.',
      ['Single origin Arabica', 'Roasted to order', 'Caramel and citrus notes']),
    products: [
      p('cb1', 'House Blend Medium Roast, 2 lb', 'Morning Ritual', 4.6, 71220, 17.99, 'Best overall',
        'Smooth, balanced and forgiving in any brewer, at a very fair price per cup.',
        ['100% Arabica', 'Medium roast', 'Resealable valve bag']),
      p('cb2', 'Espresso Roast, 2.2 lb', 'Altura Roasters', 4.5, 27650, 21.99, 'Best for espresso',
        'Rich crema and dark chocolate notes that stand up to milk.',
        ['Espresso blend', 'Dark chocolate notes', 'Great crema']),
      p('cb3', 'Organic Dark Roast, 2 lb', 'Greenleaf', 4.6, 19870, 24.99, 'Best organic',
        'Certified organic and fair trade with a bold, smoky finish.',
        ['USDA organic', 'Fair trade', 'Bold dark roast']),
      p('cb4', 'Light Roast Ethiopia, 12 oz', 'Altura Roasters', 4.7, 8120, 16.49, 'Best light roast',
        'Bright and floral with notes of berry. For pour-over fans.',
        ['Single origin', 'Floral and berry notes', 'Light roast']),
      p('cb5', 'Value Breakfast Blend, 3 lb', 'QuickCup', 4.4, 33420, 19.99, 'Best value',
        'The lowest price per cup in our list without tasting cheap.',
        ['3 lb bag', 'Medium roast', 'Everyday drinking']),
      p('cb6', 'Swiss Water Decaf, 2 lb', 'Morning Ritual', 4.5, 9870, 22.49, 'Best decaf',
        'Chemical-free decaf that still tastes like real coffee.',
        ['99.9% caffeine free', 'Swiss Water process', 'Medium roast']),
      p('cb7', 'Low Acid Smooth Blend, 2 lb', 'Calmline', 4.5, 7650, 23.99, 'Best low acid',
        'Gentler on the stomach without losing flavour.',
        ['Low acid', 'Smooth body', 'Medium roast']),
      p('cb8', 'Italian Dark Roast, 2.2 lb', 'Casa Forte', 4.5, 15420, 18.99, 'Best dark roast',
        'Classic Italian-style roast that is intense but not burnt.',
        ['Dark roast', 'Arabica and robusta', 'Intense flavour']),
      p('cb9', 'Cold Brew Coarse Blend, 2 lb', 'Chillbrew', 4.6, 11230, 21.49, 'Best for cold brew',
        'Blended and roasted to taste smooth and sweet when cold brewed.',
        ['Built for cold brew', 'Chocolate notes', 'Low bitterness']),
      p('cb10', 'Sampler Pack, 4 x 8 oz', 'Altura Roasters', 4.6, 4320, 29.99, 'Best gift',
        'Four origins in one box. A great way to find your favourite.',
        ['Four origins', 'Gift box', 'Tasting notes card']),
    ],
  },
  'bed-sheets': {
    icon: 'blanket',
    title: 'The 10 best bed sheets',
    intro: 'Good sheets feel great on day one and still feel good after fifty washes. We compared materials, fit on deep mattresses, pilling and value across the bestselling sets.',
    featured: p('bs-f', 'Organic Percale Sheet Set, Queen', 'Nestwell', 4.7, 2860, 89.0, 'Featured Pick',
      'Crisp, cool organic cotton percale that gets softer with every wash.',
      ['100% organic cotton', 'Cool, crisp percale', 'Fits up to 16" mattresses']),
    products: [
      p('bs1', 'Microfiber Sheet Set, Queen', 'Nestwell', 4.6, 88410, 29.99, 'Best overall',
        'Soft, wrinkle resistant and a fraction of the price of cotton.',
        ['Deep pockets', 'Wrinkle resistant', 'Many colours']),
      p('bs2', 'Cotton Sateen 400 TC, Queen', 'Softloom', 4.5, 31220, 59.99, 'Best cotton sateen',
        'Silky feel and subtle sheen that looks great on the bed.',
        ['400 thread count', 'Long-staple cotton', 'Silky finish']),
      p('bs3', 'Bamboo Cooling Sheets, Queen', 'Calmleaf', 4.6, 24310, 49.99, 'Best for hot sleepers',
        'Breathable viscose from bamboo that feels cool to the touch.',
        ['Cooling fabric', 'Moisture wicking', 'Very soft']),
      p('bs4', 'Linen Sheet Set, Queen', 'Softloom', 4.4, 6540, 119.99, 'Best linen',
        'Relaxed, breathable linen that softens beautifully over time.',
        ['100% French flax', 'Breathable', 'Relaxed look']),
      p('bs5', 'Flannel Sheet Set, Queen', 'Nestwell', 4.6, 17650, 44.99, 'Best for winter',
        'Warm brushed cotton that does not pill after washing.',
        ['Brushed cotton', 'Warm and cosy', 'Anti-pill finish']),
      p('bs6', 'Budget Brushed Sheets, Queen', 'Brightway', 4.4, 41020, 21.99, 'Best budget',
        'The lowest price set that still fits well and lasts.',
        ['Brushed microfiber', 'Fits up to 15"', 'Easy care']),
      p('bs7', 'Jersey Knit Sheet Set, Queen', 'Snugglesoft', 4.5, 9560, 34.99, 'Most comfortable',
        'Stretchy like a favourite T-shirt and very forgiving on fit.',
        ['Stretch jersey', 'T-shirt soft', 'Wrinkle free']),
      p('bs8', 'Hotel Collection Percale, Queen', 'Softloom', 4.5, 13870, 74.99, 'Best hotel feel',
        'Crisp white percale like a good hotel bed.',
        ['Percale weave', 'Crisp feel', 'Classic white']),
      p('bs9', 'Kids Printed Sheet Set, Twin', 'Snugglesoft', 4.6, 7650, 24.99, 'Best for kids',
        'Fun prints, soft fabric and easy to wash.',
        ['Fun prints', 'Twin size', 'Machine washable']),
      p('bs10', 'Deep Pocket Sheets, Queen', 'Nestwell', 4.5, 21340, 36.99, 'Best for thick mattresses',
        'Extra-deep pockets that stay put on mattresses up to 21".',
        ['Fits up to 21"', 'All-around elastic', 'Stays put']),
    ],
  },
  moisturizers: {
    icon: 'jar',
    title: 'The 10 best face moisturizers',
    intro: 'The right moisturizer depends on your skin type. We ranked bestselling moisturizers on hydration, how they feel on skin, ingredients and long-term ratings, with picks for dry, oily and sensitive skin.',
    featured: p('mo-f', 'Glow Daily Gel Moisturizer, 1.7 oz', 'Luminé Lab', 4.6, 4120, 24.0, 'Featured Pick',
      'Lightweight gel with hyaluronic acid that hydrates without feeling heavy.',
      ['Hyaluronic acid', 'Oil free', 'Fragrance free']),
    products: [
      p('mo1', 'Hydrating Ceramide Cream, 16 oz', 'Dermacare', 4.8, 96210, 17.49, 'Best overall',
        'Rich but non-greasy, and gentle enough for sensitive skin.',
        ['Three ceramides', 'Fragrance free', 'Face and body']),
      p('mo2', 'Oil-Free Gel Cream, 1.7 oz', 'Clearday', 4.6, 51220, 19.99, 'Best for oily skin',
        'Weightless hydration that will not clog pores.',
        ['Oil free', 'Non-comedogenic', 'Matte finish']),
      p('mo3', 'Daily Moisturizer SPF 30, 3 oz', 'Sunward', 4.6, 38220, 15.99, 'Best with SPF',
        'Moisturizer and sunscreen in one step for mornings.',
        ['Broad spectrum SPF 30', 'Lightweight', 'No white cast']),
      p('mo4', 'Barrier Repair Cream, 2 oz', 'Dermacare', 4.7, 22870, 21.99, 'Best for sensitive skin',
        'Calms redness and repairs dry, irritated skin.',
        ['Niacinamide', 'Fragrance free', 'Dermatologist tested']),
      p('mo5', 'Rich Night Cream, 1.7 oz', 'Luminé Lab', 4.5, 12560, 28.99, 'Best night cream',
        'Deeply nourishing overnight with peptides and squalane.',
        ['Peptides', 'Squalane', 'Rich texture']),
      p('mo6', 'Budget Daily Lotion, 12 oz', 'Purely', 4.5, 33450, 9.99, 'Best budget',
        'Simple, effective and very affordable for everyday use.',
        ['Glycerin based', 'Large bottle', 'Fragrance free']),
      p('mo7', 'Mineral Tinted Moisturizer, 1.7 oz', 'Sunward', 4.4, 9870, 24.99, 'Best tinted',
        'Sheer coverage, SPF and hydration in one tube.',
        ['Sheer tint', 'Mineral SPF 30', 'Several shades']),
      p('mo8', 'Men\'s Daily Face Lotion, 3.4 oz', 'Groomwell', 4.6, 14320, 14.99, 'Best for men',
        'Absorbs fast with no shine, ideal after shaving.',
        ['Fast absorbing', 'After-shave friendly', 'Light scent']),
      p('mo9', 'Retinol Moisturizer, 1.7 oz', 'Luminé Lab', 4.4, 10110, 26.99, 'Best anti-aging',
        'Gentle retinol for smoother skin without heavy irritation.',
        ['Encapsulated retinol', 'Night use', 'Hydrating base']),
      p('mo10', 'Water Cream for Dry Skin, 1.7 oz', 'Clearday', 4.5, 8760, 22.0, 'Best for dry skin',
        'Bouncy water cream that hydrates dry skin all day.',
        ['Water cream', 'Long-lasting hydration', 'Cooling feel']),
    ],
  },
  'water-bottles': {
    icon: 'bottle',
    title: 'The 10 best water bottles',
    intro: 'A great water bottle keeps drinks cold, does not leak and is easy to clean. We ranked the bestsellers on insulation, lid design, durability and how easy they are to carry.',
    featured: p('wb-f', 'Summit Insulated Bottle, 40 oz', 'Summitline', 4.7, 2980, 34.99, 'Featured Pick',
      'Big-capacity insulated bottle with a straw lid and carry handle.',
      ['Keeps cold 36 h', 'Straw and chug lids', 'Fits cup holders']),
    products: [
      p('wb1', 'Insulated Stainless Bottle, 32 oz', 'Trailmate', 4.8, 102340, 24.99, 'Best overall',
        'Keeps drinks cold for a full day and survives drops.',
        ['Cold 24 h, hot 12 h', 'Leak-proof lid', 'Dishwasher safe']),
      p('wb2', 'Tumbler with Handle, 40 oz', 'Ironpeak', 4.6, 78210, 29.99, 'Best tumbler',
        'Fits car cup holders and keeps ice for hours.',
        ['Handle and straw', 'Cup-holder friendly', 'Many colours']),
      p('wb3', 'Kids Insulated Bottle, 12 oz', 'Snugglesoft', 4.7, 34120, 16.99, 'Best for kids',
        'Spill-proof straw lid and small enough for lunch boxes.',
        ['Spill-proof straw', 'Easy grip', 'Dishwasher safe']),
      p('wb4', 'Glass Water Bottle with Sleeve, 20 oz', 'Purely', 4.5, 12760, 19.99, 'Best glass',
        'No plastic taste, with a silicone sleeve for grip and protection.',
        ['Borosilicate glass', 'Silicone sleeve', 'Bamboo lid']),
      p('wb5', 'Collapsible Travel Bottle, 20 oz', 'Trailmate', 4.4, 8870, 14.99, 'Best for travel',
        'Folds flat when empty to save space in bags.',
        ['Collapsible silicone', 'Carabiner clip', 'BPA free']),
      p('wb6', 'Filtered Water Bottle, 26 oz', 'Clearday', 4.4, 15420, 27.99, 'Best with filter',
        'Built-in filter for better-tasting tap water on the go.',
        ['Replaceable filter', 'Squeeze design', 'Removes chlorine taste']),
      p('wb7', 'Motivational Bottle, 64 oz', 'Ironpeak', 4.5, 41230, 19.99, 'Best for hydration goals',
        'Time markings help you hit your daily water target.',
        ['Time markers', 'Half gallon', 'Leak-proof']),
      p('wb8', 'Lightweight Sports Bottle, 24 oz', 'Zenfit', 4.5, 22110, 12.99, 'Best for gym',
        'Light, squeezable and easy to drink from mid-workout.',
        ['Squeeze bottle', 'Quick-flow valve', 'Lightweight']),
      p('wb9', 'Budget Steel Bottle, 25 oz', 'Brightway', 4.4, 18650, 11.99, 'Best budget',
        'Single-wall steel that is tough and cheap.',
        ['Stainless steel', 'Screw cap', 'Durable']),
      p('wb10', 'Wide-Mouth Hiking Bottle, 32 oz', 'Summitline', 4.6, 13870, 22.99, 'Best for hiking',
        'Wide mouth for ice and easy cleaning, fits most filters.',
        ['Wide mouth', 'Tough powder coat', 'Loop cap']),
    ],
  },
}

// Departments mirror the "shop by category" structure. Each has one live list.
const DEPTS = [
  { slug: 'kitchen', name: 'Kitchen', icon: 'pot', intro: 'Appliances, cookware and tools for everyday cooking.',
    subs: [['air-fryers', 'Air Fryers', 'fryer'], ['chef-knives', 'Chef Knives', 'knife'], ['coffee-makers', 'Coffee Makers', 'kettle'], ['blenders', 'Blenders', 'blender']] },
  { slug: 'pet-supplies', name: 'Pet Supplies', icon: 'paw', intro: 'Beds, food, toys and care for dogs and cats.',
    subs: [['dog-beds', 'Dog Beds', 'bed'], ['cat-litter', 'Cat Litter', 'bag'], ['dog-harnesses', 'Dog Harnesses', 'harness'], ['pet-fountains', 'Pet Fountains', 'fountain']] },
  { slug: 'grocery', name: 'Grocery', icon: 'cup', intro: 'Coffee, tea, snacks and pantry staples.',
    subs: [['coffee-beans', 'Whole Bean Coffee', 'beans'], ['tea', 'Tea', 'leaf'], ['coffee-pods', 'Coffee Pods', 'pod'], ['snacks', 'Healthy Snacks', 'jar']] },
  { slug: 'home', name: 'Home', icon: 'lamp', intro: 'Bedding, bath, cleaning and comfort.',
    subs: [['bed-sheets', 'Bed Sheets', 'blanket'], ['pillows', 'Pillows', 'pillow'], ['robot-vacuums', 'Robot Vacuums', 'vacuum'], ['bath-towels', 'Bath Towels', 'towel']] },
  { slug: 'beauty', name: 'Beauty', icon: 'tube', intro: 'Skincare, hair care and personal care.',
    subs: [['moisturizers', 'Face Moisturizers', 'jar'], ['sunscreens', 'Sunscreens', 'tube'], ['hair-dryers', 'Hair Dryers', 'dryer'], ['electric-toothbrushes', 'Electric Toothbrushes', 'toothbrush']] },
  { slug: 'sports', name: 'Sports & Fitness', icon: 'ball', intro: 'Home workouts, outdoor gear and hydration.',
    subs: [['water-bottles', 'Water Bottles', 'bottle'], ['yoga-mats', 'Yoga Mats', 'mat'], ['dumbbells', 'Dumbbells', 'dumbbell'], ['fitness-trackers', 'Fitness Trackers', 'watch']] },
]

export const DEPARTMENTS = DEPTS.map((d) => {
  const dept = { slug: d.slug, name: d.name, icon: d.icon, intro: d.intro, image: `images/dept-${d.slug}.jpg` }
  dept.subcategories = d.subs.map(([slug, name, icon]) => {
    const sub = { slug, name, icon, department: dept, live: Boolean(LISTS[slug]), image: `images/cat-${slug}.jpg` }
    const list = LISTS[slug]
    if (list) {
      Object.assign(sub, { title: list.title, intro: list.intro })
      sub.featured = { ...list.featured, image: `images/${list.featured.id}.jpg`, rank: 0, sponsored: true, list: sub }
      sub.products = list.products.map((prod, i) => ({ ...prod, image: `images/${prod.id}.jpg`, rank: i + 1, list: sub }))
    }
    return sub
  })
  return dept
})

export const departmentBySlug = (slug) => DEPARTMENTS.find((d) => d.slug === slug)
export const ALL_SUBS = DEPARTMENTS.flatMap((d) => d.subcategories)
export const LIVE_SUBS = ALL_SUBS.filter((s) => s.live)
export const subBySlug = (slug) => ALL_SUBS.find((s) => s.slug === slug)
export const ALL_PRODUCTS = LIVE_SUBS.flatMap((s) => [s.featured, ...s.products])
export const productById = (id) => ALL_PRODUCTS.find((x) => x.id === id)

// Where "Buy now" goes. Sample products link to an Amazon search for the product
// type; in the full build this is the product's affiliate link from the Creators API.
export const amazonUrl = (product) => product.url || `https://www.amazon.com/s?k=${encodeURIComponent(product.list.name)}`

// Concept data for the admin wireframe.
export const ADMIN_SLOTS = LIVE_SUBS.map((s, i) => ({
  category: `${s.department.name} > ${s.name}`,
  asin: `B0SAMPLE0${i + 1}`,
  product: s.featured.name,
  client: s.featured.brand,
  start: '01 Oct 2026',
  end: '31 Dec 2026',
  clicks: [1284, 942, 1567, 811, 1402, 690][i],
  ctr: ['6.8%', '5.1%', '7.4%', '4.9%', '6.2%', '4.4%'][i],
}))
