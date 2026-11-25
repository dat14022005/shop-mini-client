export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
inStock: boolean; // Thêm dòng này
};

export const products: Product[] = [
  { id: 1, name: "Áo thun basic", price: 150000, image: "https://placehold.co/400x300?text=Ao+thun", category: "Thời trang", stock: 12, inStock: true },
  { id: 2, name: "Quần jean slim", price: 420000, image: "https://placehold.co/400x300?text=Quan+jean", category: "Thời trang", stock: 5, inStock: true },
  { id: 3, name: "Tai nghe Bluetooth", price: 690000, image: "https://placehold.co/400x300?text=Tai+nghe", category: "Điện tử", stock: 0, inStock: false },
  { id: 4, name: "Bình giữ nhiệt 500ml", price: 185000, image: "https://placehold.co/400x300?text=Binh+nuoc", category: "Gia dụng", stock: 20, inStock: true },
  { id: 5, name: "Balo laptop 15 inch", price: 550000, image: "https://placehold.co/400x300?text=Balo", category: "Phụ kiện", stock: 8, inStock: true },
  { id: 6, name: "Chuột không dây", price: 245000, image: "https://placehold.co/400x300?text=Chuot", category: "Điện tử", stock: 15, inStock: true },
];

