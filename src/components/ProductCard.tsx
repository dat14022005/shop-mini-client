import type { Product } from "../data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-price">
          {product.price.toLocaleString("vi-VN")} đ
        </p>
        {!product.inStock && (
  <span className="badge-out-of-stock">Hết hàng</span>
)}
        <button disabled={!product.inStock}>
  {product.inStock ? 'Thêm vào giỏ' : 'Tạm hết hàng'}
</button>
      </div>
    </div>
    
  );
  
}
