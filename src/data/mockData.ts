export interface CategoryItem {
  id: string;
  name: string;
  image: string;
  count?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  categoryTag?: string;
  tagColor?: 'green' | 'blue' | 'red';
  discount?: string;
  image: string;
  rating: number;
  reviewsCount: number;
  currentPrice: number;
  oldPrice?: number;
  stockAvailable?: number;
  stockTotal?: number;
  stockStatus?: 'in_stock' | 'out_of_stock' | 'low_stock';
  isFeatured?: boolean;
}

export const CATEGORIES: CategoryItem[] = [
  { id: '1', name: 'Fruits & Vegetables', image: '/assets/asset 13.jpeg' },
  { id: '2', name: 'Baby & Pregnancy', image: '/assets/asset 14.jpeg' },
  { id: '3', name: 'Beverages', image: '/assets/asset 15.jpeg' },
  { id: '4', name: 'Meats & Seafood', image: '/assets/asset 16.jpeg' },
  { id: '5', name: 'Biscuits & Snacks', image: '/assets/asset 17.jpeg' },
  { id: '6', name: 'Breads & Bakery', image: '/assets/asset 18.jpeg' },
  { id: '7', name: 'Breakfast & Dairy', image: '/assets/asset 19.jpeg' },
  { id: '8', name: 'Frozen Foods', image: '/assets/asset 20.jpeg' },
  { id: '9', name: 'Grocery & Staples', image: '/assets/asset 21.jpeg' },
];

export const NEW_PRODUCTS: ProductItem[] = [
  {
    id: 'np-1',
    title: '100 Percent Apple Juice – 64 fl oz Bottle',
    categoryTag: 'ORGANIC',
    tagColor: 'green',
    discount: '75%',
    image: '/assets/asset 22.png',
    rating: 3,
    reviewsCount: 3,
    currentPrice: 0.50,
    oldPrice: 1.99,
    stockAvailable: 37,
    stockTotal: 100,
    stockStatus: 'low_stock',
  },
  {
    id: 'np-2',
    title: 'Great Value Rising Crust Frozen Pizza, Supreme',
    categoryTag: 'COLD SALE',
    tagColor: 'blue',
    discount: '11%',
    image: '/assets/asset 23.png',
    rating: 3,
    reviewsCount: 3,
    currentPrice: 8.99,
    oldPrice: 9.99,
    stockAvailable: 66,
    stockTotal: 100,
    stockStatus: 'in_stock',
  },
  {
    id: 'np-3',
    title: 'Simply Orange Pulp Free Juice – 52 fl oz',
    categoryTag: 'ORGANIC',
    tagColor: 'green',
    discount: '41%',
    image: '/assets/asset 24.png',
    rating: 2,
    reviewsCount: 2,
    currentPrice: 2.45,
    oldPrice: 4.13,
    stockAvailable: 17,
    stockTotal: 100,
    stockStatus: 'low_stock',
  },
  {
    id: 'np-4',
    title: 'California Pizza Kitchen Margherita, Crispy Thin Cru...',
    categoryTag: 'COLD SALE',
    tagColor: 'blue',
    discount: '21%',
    image: '/assets/asset 25.png',
    rating: 3,
    reviewsCount: 3,
    currentPrice: 11.77,
    oldPrice: 14.77,
    stockAvailable: 98,
    stockTotal: 100,
    stockStatus: 'in_stock',
  },
  {
    id: 'np-5',
    title: 'Cantaloupe Melon Fresh Organic Cut',
    categoryTag: 'ORGANIC',
    tagColor: 'green',
    discount: '22%',
    image: '/assets/asset 26.png',
    rating: 3,
    reviewsCount: 3,
    currentPrice: 1.25,
    oldPrice: 1.50,
    stockAvailable: 115,
    stockTotal: 150,
    stockStatus: 'in_stock',
  },
  {
    id: 'np-6',
    title: 'Angel Soft Toilet Paper, 9 Mega Rolls',
    categoryTag: 'ORGANIC',
    tagColor: 'green',
    discount: '18%',
    image: '/assets/asset 27.png',
    rating: 3,
    reviewsCount: 3,
    currentPrice: 14.12,
    oldPrice: 17.12,
    stockAvailable: 20,
    stockTotal: 100,
    stockStatus: 'low_stock',
  },
];

export const NEW_ARRIVALS: ProductItem[] = [
  {
    id: 'na-1',
    title: '100 Percent Apple Juice – 64 fl oz Bottle',
    categoryTag: 'ORGANIC',
    tagColor: 'green',
    discount: '75%',
    image: '/assets/asset 22.png',
    rating: 3,
    reviewsCount: 3,
    currentPrice: 0.50,
    oldPrice: 1.99,
    stockStatus: 'in_stock',
  },
  {
    id: 'na-2',
    title: 'Cantaloupe Melon Fresh Organic Cut',
    categoryTag: 'ORGANIC',
    tagColor: 'green',
    discount: '22%',
    image: '/assets/asset 26.png',
    rating: 3,
    reviewsCount: 3,
    currentPrice: 1.25,
    oldPrice: 1.50,
    stockStatus: 'in_stock',
  },
  {
    id: 'na-3',
    title: 'Vital Farms Pasture-Raised Grade A Large Eggs – 12ct',
    categoryTag: 'ORGANIC',
    tagColor: 'green',
    discount: '21%',
    image: '/assets/asset 28.png',
    rating: 3,
    reviewsCount: 3,
    currentPrice: 3.89,
    oldPrice: 4.99,
    stockStatus: 'out_of_stock',
  },
  {
    id: 'na-4',
    title: 'Tillamook Medium Cheddar Cheese Loaf – 32oz',
    categoryTag: 'COLD SALE',
    tagColor: 'blue',
    discount: '',
    image: '/assets/asset 29.png',
    rating: 3,
    reviewsCount: 3,
    currentPrice: 7.99,
    stockStatus: 'in_stock',
  },
  {
    id: 'na-5',
    title: 'Silk Dairy Free, Gluten Free, Vanilla Almond Milk, 64 fl...',
    categoryTag: 'ORGANIC',
    tagColor: 'green',
    discount: '',
    image: '/assets/asset 30.png',
    rating: 3,
    reviewsCount: 3,
    currentPrice: 5.60,
    stockStatus: 'in_stock',
  },
];

export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: 'fp-1',
    title: '100 Percent Apple Juice – 64 fl oz Bottle',
    categoryTag: 'ORGANIC',
    tagColor: 'green',
    discount: '75%',
    image: '/assets/asset 22.png',
    rating: 3,
    reviewsCount: 3,
    currentPrice: 0.50,
    oldPrice: 1.99,
    stockStatus: 'in_stock',
  },
  {
    id: 'fp-2',
    title: 'Simply Orange Pulp Free Juice – 52 fl oz',
    categoryTag: 'ORGANIC',
    tagColor: 'green',
    discount: '41%',
    image: '/assets/asset 24.png',
    rating: 2,
    reviewsCount: 2,
    currentPrice: 2.45,
    oldPrice: 4.13,
    stockStatus: 'in_stock',
  },
  {
    id: 'fp-3',
    title: 'Vitaminwater zero sugar squeezed electrolyte enhanced water,...',
    categoryTag: 'ORGANIC',
    tagColor: 'green',
    discount: '45%',
    image: '/assets/asset 31.png',
    rating: 3,
    reviewsCount: 3,
    currentPrice: 4.99,
    oldPrice: 9.99,
    stockStatus: 'in_stock',
  },
  {
    id: 'fp-4',
    title: 'A&W Caffeine-Free, Low Sodium Root Beer Soda Pop, 2 Liter Bottles',
    categoryTag: 'COLD SALE',
    tagColor: 'blue',
    discount: '16%',
    image: '/assets/asset 32.png',
    rating: 2,
    reviewsCount: 2,
    currentPrice: 9.50,
    oldPrice: 11.20,
    stockStatus: 'in_stock',
  },
];
