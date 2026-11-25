import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import Banner from "./components/Banner";
import { categories } from "./data/categories";
import "./App.css";
import CategoryList from "./components/CategoryList";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <CategoryList />
      <main>
        <ProductList title="Sản phẩm nổi bật" items={products} />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
