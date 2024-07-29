export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: 'Accessories' | 'Fitness' | 'Clothing' | 'Electronics';
  image?: string;
  rating?: number;
}
