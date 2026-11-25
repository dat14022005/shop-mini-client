import { categories } from "../data/categories";
export default function CategoryList() {
  return (
    <section className="category-section">
      <div className="container">
        <h2><p>Danh mục sản phẩm</p></h2>
        <div className="category-list">
          {categories.map((category) => (
            <button key={category.id} className="category-item">
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}