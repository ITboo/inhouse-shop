import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../app/store/cart";

const ProductCard = (props) => {
  const { id, slug, name, price } = props.data;
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ productId: id, quantity: 1 }));
  };
  console.log(carts)
  return (
    <div key={id}>
      <Link to={slug}>
        <h3>{name}</h3>
      </Link>
      <div className="flex">
        <span>{price}</span>
        <button className="flex items-center gap-2" onClick={handleAddToCart}>
          <ShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
