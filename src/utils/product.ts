import type { Product } from "../data/products";

export type SortOrder = "asc" | "desc";

export type ProductFilter = {
  keyword?: string;
  category?: number;
  maxPrice?: number;
  sort?: SortOrder;
};

export function getCategories(products: Product[]): number[] {
  return [...new Set(products.map((p) => p.category))];
}

export function filterProducts(products: Product[], filter: ProductFilter = {}): Product[] {
  const { keyword = "", category, maxPrice, sort } = filter;
  const kw = keyword.trim().toLowerCase();

  const result = products.filter((p) => {
    const matchKeyword = p.name.toLowerCase().includes(kw);
    const matchCategory = !category || p.category === category;
    const matchPrice = maxPrice === undefined || p.price <= maxPrice;
    return matchKeyword && matchCategory && matchPrice;
  });

  if (sort === "asc") return [...result].sort((a, b) => a.price - b.price);
  if (sort === "desc") return [...result].sort((a, b) => b.price - a.price);
  return result;
}
export function searchByPrice(products: Product[], minPrice: number, maxPrice: number): Product[] {
  return products.filter((p) => p.price >= minPrice && p.price <= maxPrice);
};
export function groupByCategory (products: Product[], category: number): Product[] {
  return products.filter((p) => p.category === category);
};