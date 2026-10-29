export interface DinnerMenuItem {
  name: string;
  description?: string;
  price?: string;
  additions?: string[];
}

export interface DinnerMenuSection {
  name: string;
  note?: string;
  priceNote?: string;
  featured?: boolean;
  items: DinnerMenuItem[];
}

export const dinnerMenuSections: DinnerMenuSection[] = [
  {
    name: 'Mezze',
    note: 'Served with Artisanal Sourdough Flatbread',
    priceNote: '$24 for Three',
    featured: true,
    items: [
      {
        name: 'Dorset Honey Whipped Feta',
        description: 'Wild Thyme | Roasted Fig | Black Pepper (gf, v)',
      },
      {
        name: 'Smoky Eggplant Baba Ghanoush',
        description: 'Charred Aubergine | Tahini | Sumac (gf, vegan)',
      },
      {
        name: 'Coastal Olive Medley',
        description: 'Garlic | Rosemary | Chili Flakes (gf, vegan)',
      },
      {
        name: 'Herb Tzatziki',
        description: 'Cucumber | Yogurt | Dill | Lemon (gf, v)',
      },
      {
        name: 'Muhammara',
        description: 'Roasted Red Pepper | Walnut | Pomegranate Molasses (gf, vegan)',
      },
      {
        name: 'House Hummus',
        description: 'Confit Garlic | Fresh Garden Herbs (gf, vegan)',
      },
    ],
  },
  {
    name: 'Raw & Coastal',
    items: [
      {
        name: 'Half-Dozen Atlantic Oysters',
        description: 'House Mignonette | Cocktail Sauce (gf)',
        price: '22',
      },
      {
        name: 'Yellowfin Tuna Crudo',
        description: 'Preserved Lemon | Cucumber | Chili Oil (gf)',
        price: '23',
      },
      {
        name: 'Dorset Crab Cake',
        description: 'Atlantic Crab | Celery Root Remoulade | Herb Oil',
        price: '21',
      },
    ],
  },
  {
    name: 'Salads',
    items: [
      {
        name: 'Farm Green Salad',
        description: 'Heirloom Greens | Radish | Apple | Toasted Walnut | Cider Vinaigrette (v)',
        price: '16',
      },
      {
        name: 'Dorset Caesar',
        description: 'Kale | Garlic Crisps | Herb Crouton | Parmesan | White Anchovy',
        price: '17',
        additions: ['add Grilled Organic Chicken Breast 9', 'add Marinated Tofu 8'],
      },
      {
        name: 'Beet & Goat Cheese Salad',
        description: 'Roasted Beets | Candied Pecan | Arugula | Citrus Dressing (v)',
        price: '18',
      },
    ],
  },
  {
    name: 'Starters',
    items: [
      {
        name: 'Roasted Mushroom Tart',
        description: 'Wild Mushrooms | Caramelized Onion | Gruyère | Thyme (v)',
        price: '19',
      },
      {
        name: 'Seared Scallops',
        description: 'Brown Butter | Cauliflower Purée | Crispy Capers (gf)',
        price: '24',
      },
      {
        name: 'Charred Broccolini',
        description: 'Chili Flake | Lemon | Parmesan (gf, v)',
        price: '15',
      },
      {
        name: 'Duck Confit Croquettes',
        description: 'Sour Cherry | Mustard Greens | Whole-Grain Mustard',
        price: '18',
      },
      {
        name: 'Wood-Roasted Delicata Squash',
        description: 'Brown Butter | Hazelnut | Sage (v)',
        price: '17',
      },
    ],
  },
  {
    name: 'From the Hearth',
    items: [
      {
        name: 'Dry-Aged New York Strip',
        description: 'Local Grass-Fed Beef | Roasted Root Vegetables | Red Wine Jus (gf)',
        price: '42',
      },
      {
        name: 'Herb-Crusted Lamb Rack',
        description: 'Dorset pasture inspiration | Mint Purée | Potato Gratin (gf)',
        price: '38',
      },
      {
        name: 'Roasted Half Chicken',
        description: 'Free-Range Bird | Garlic Jus | Sautéed Greens',
        price: '34',
      },
      {
        name: 'Bone-In Ribeye for Two',
        description: '28 oz. Local Grass-Fed Beef | Charred Shallot | Red Wine Jus (gf)',
        price: '78',
      },
    ],
  },
  {
    name: 'Mains',
    items: [
      {
        name: 'Pan-Seared Atlantic Cod',
        description: 'Brown Butter | Fennel | Citrus | Seasonal Greens (gf)',
        price: '36',
      },
      {
        name: 'Wild Mushroom Risotto',
        description: 'Carnaroli Rice | Truffle Oil | Parmesan (v)',
        price: '29',
      },
      {
        name: 'Butter-Poached Maine Lobster',
        description: 'Sweet Corn | Leek | Shellfish Bisque (gf)',
        price: '46',
      },
      {
        name: 'Cedar-Roasted Atlantic Salmon',
        description: 'White Bean Cassoulet | Herb Oil (gf)',
        price: '37',
      },
    ],
  },
  {
    name: 'Sides',
    items: [
      { name: 'Creamy Mashed Potato', description: '(gf, v)', price: '10' },
      { name: 'Roasted Root Vegetables', description: '(gf, v)', price: '11' },
      { name: 'Charred Asparagus', description: '(gf, v)', price: '12' },
      { name: 'Crispy Brussels Sprouts', description: '(gf, v)', price: '11' },
      { name: 'Truffle Potato Gratin', description: '(gf, v)', price: '13' },
    ],
  },
  {
    name: 'Desserts',
    items: [
      {
        name: 'Dorset Apple Crumble',
        description: 'Bramley Apple | Oat Crumble | Vanilla Bean Ice Cream (v)',
        price: '14',
      },
      {
        name: 'Honey Panna Cotta',
        description: 'Wild Honey | Berry Compote (gf, v)',
        price: '13',
      },
      {
        name: 'Dark Chocolate Torte',
        description: 'Sea Salt | Raspberry Coulis (gf, v)',
        price: '15',
      },
    ],
  },
  {
    name: 'Cocktails',
    items: [
      {
        name: 'Jurassic Coast Gin Fizz',
        description: 'London Dry Gin | Sea Salt | Lemon | Egg White',
        price: '16',
      },
      {
        name: 'Orchard Old Fashioned',
        description: 'Bourbon | Apple Syrup | Bitters | Smoked Cinnamon',
        price: '17',
      },
      {
        name: 'Herb Negroni',
        description: 'Gin | Campari | Sweet Vermouth | Fresh Rosemary',
        price: '16',
      },
      {
        name: 'Coast Spritz',
        description: 'Dry Vermouth | Elderflower | Sparkling Wine | Citrus',
        price: '15',
      },
      {
        name: 'Classic Manhattan',
        description: 'Rye | Sweet Vermouth | Angostura Bitters',
        price: '17',
      },
    ],
  },
];
