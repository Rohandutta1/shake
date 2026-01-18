import proteinHero from '../../assets/protein_shake_hero.png'
import proteinChocolate from '../../assets/protein_shake_chocolate.png'
import proteinStrawberry from '../../assets/protein_shake_strawberry.png'
import featureLifestyle from '../../assets/feature_lifestyle_shake.png'

export const products = [
  {
    id: 1,
    name: 'Whey Protein Shake',
    category: 'WHEY',
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.8,
    reviews: 324,
    image: proteinHero,
    images: [proteinHero, proteinChocolate, proteinStrawberry],
    description: 'Premium whey protein isolate with advanced amino acid profile. Perfect for muscle recovery and growth. Mixes smoothly and tastes great.',
    features: [
      '25g Protein per serving',
      'Low sugar (2g)',
      'High in BCAA',
      'Mixes with water or milk',
      'No artificial flavors',
      'Gluten-free',
    ],
    inStock: true,
    flavor: 'Vanilla',
    servings: 30,
  },
  {
    id: 2,
    name: 'Plant-Based Protein',
    category: 'PLANT',
    price: 44.99,
    originalPrice: 74.99,
    rating: 4.6,
    reviews: 287,
    image: proteinChocolate,
    images: [proteinChocolate, proteinHero, featureLifestyle],
    description: 'Organic plant-based protein blend made from peas and rice. Vegan-friendly with complete amino acid profile.',
    features: [
      '23g Plant Protein per serving',
      'Zero cholesterol',
      'Vegan certified',
      'Organic ingredients',
      'Natural flavors only',
      'Easy to digest',
    ],
    inStock: true,
    flavor: 'Chocolate',
    servings: 30,
  },
  {
    id: 3,
    name: 'Mass Gainer Shake',
    category: 'GAINER',
    price: 39.99,
    originalPrice: 69.99,
    rating: 4.7,
    reviews: 198,
    image: proteinStrawberry,
    images: [proteinStrawberry, proteinHero, proteinChocolate],
    description: 'High-calorie mass gainer formula designed for serious muscle building. Packed with carbs and protein.',
    features: [
      '40g Protein + 70g Carbs',
      '600 Calories per serving',
      'Micronutrient fortified',
      'Creamy texture',
      'Great for bulking',
      'Includes digestive enzymes',
    ],
    inStock: true,
    flavor: 'Strawberry',
    servings: 20,
  },
  {
    id: 4,
    name: 'Premium Lifestyle Shake',
    category: 'LAUNCH',
    price: 54.99,
    originalPrice: 84.99,
    rating: 4.9,
    reviews: 412,
    image: featureLifestyle,
    images: [featureLifestyle, proteinHero, proteinChocolate],
    description: 'Our flagship product - a complete nutritional shake for busy lifestyles. Loaded with vitamins, minerals, and adaptogens.',
    features: [
      '30g Premium Protein',
      'Complete vitamin blend',
      'Adaptogens included',
      'Zero sugar',
      'Sustained energy release',
      'Certified sustainable',
    ],
    inStock: true,
    flavor: 'Mixed Berry',
    servings: 25,
  },
]

export const similarProducts = (currentProductId) => {
  return products
    .filter(p => p.id !== currentProductId)
    .slice(0, 3)
}
