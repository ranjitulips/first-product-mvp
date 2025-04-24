import ProductCard from "./ProductCard";

// import Image1 from "../assets/Dress.jpg";
// import Image2 from "../assets/dress1.jpeg";
// import Image3 from "../assets/dress2.jpeg";
import { useEffect, useState } from "react";

// const products = [
//   { id: 1, image: Image1, name: "Kurti", price: 500 },
//   { id: 2, image: Image2, name: "Kurti", price: 1200 },
//   { id: 3, image: Image3, name: "Kurti", price: 700 },
// ];

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;

{
  /* {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))} */
}
