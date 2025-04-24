import { useContext } from "react";
import { CartContext } from "./CartContext";


function ProductCard({image,name,price}) {
  const { addToCart } = useContext(CartContext);
  const product={image,name,price }

  return (
    <div  className="card">
       <img src={product.image} height="200px" width="200px"></img>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button className="btn" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

