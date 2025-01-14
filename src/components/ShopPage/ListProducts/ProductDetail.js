import React, { useEffect, useState } from "react";
import { useCart } from './CartContext';
import "./DetailProduct.css"


const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

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

  const handleAddToCart = () => {
    addToCart(product); // Thêm sản phẩm vào giỏ hàng
  };

  return (
    <div className="detail-product-container">
      <div className="detail-product-img"><img src={product.images} alt={product.name}  /></div>
      <div className="detail-product-content">
        <h2>{product.name}</h2>
        <p>Price: {product.price.toLocaleString()} VND</p>
        <p>Category: {product.category}</p>
        <p>{product.description}</p>
        <p>Colors: {product.colors.join(", ")}</p>
        <p>Sizes: {product.sizes.join(", ")}</p>

        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      
    </div>
  );
};

export default ProductDetail;
