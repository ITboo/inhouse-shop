import { Link } from "react-router-dom";
import products from "../../shared/data/products.json";
import { ShoppingCart } from "lucide-react";

const Home = () => {
  return (
    <section>
      <h2 className="text-center">Our Products</h2>
      <div className="flex justify-between">
        {products.map((product) => (
          <div>
            <Link to={product.slug} key={product.id}>
              <h3>{product.name}</h3>
            </Link>
            <div className="flex">
                <span>{product.price}</span>
              <button className="flex items-center gap-2">
                <ShoppingCart />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
