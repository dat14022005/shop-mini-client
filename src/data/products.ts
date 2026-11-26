export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: number;
  stock: number;
inStock: boolean; // Thêm dòng này
};

export const products: Product[] = [
  { id: 1, name: "Áo thun basic", price: 150000, image: "https://placehold.co/400x300?text=Ao+thun", category: 1, stock: 12, inStock: true },
  { id: 2, name: "Quần jean slim", price: 420000, image: "https://placehold.co/400x300?text=Quan+jean", category: 1, stock: 5, inStock: true },
  { id: 3, name: "Tai nghe Bluetooth", price: 690000, image: "https://placehold.co/400x300?text=Tai+nghe", category: 2, stock: 0, inStock: false },
  { id: 4, name: "Bình giữ nhiệt 500ml", price: 185000, image: "https://placehold.co/400x300?text=Binh+nuoc", category: 3, stock: 20, inStock: true },
  { id: 5, name: "Balo laptop 15 inch", price: 550000, image: "https://placehold.co/400x300?text=Balo", category: 4, stock: 8, inStock: true },
  { id: 6, name: "Chuột không dây", price: 245000, image: "https://placehold.co/400x300?text=Chuot", category: 2, stock: 15, inStock: true },
];

