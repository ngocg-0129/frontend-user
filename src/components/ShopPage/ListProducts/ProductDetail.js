import React, { useEffect, useState, useContext } from "react";
import "./DetailProduct.css";
import { CartContext } from "./CartContext";

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8000/products/${productId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (productId) { // Ensure productId is available before fetching
      fetchProduct();
    }
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="detail-product-container">
      <div className="detail-product-img">
        <img src={product.images} alt={product.name} />
      </div>
      <div className="detail-product-content">
        <h2>{product.name}</h2>
        <p>Price: {product.price.toLocaleString()} VND</p>
        <p>Category: {product.category}</p>
        <p>{product.description}</p>
        <p>Colors: {product.colors.join(", ")}</p>
        <p>Sizes: {product.sizes.join(", ")}</p>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
