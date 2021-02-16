export interface ProductItem {
  id: string;
  title: string;
  description: string;
  price: number;
  total_quantity: number;
  imageUrl: string;
  added?: boolean;
  quantity?: number;
}
