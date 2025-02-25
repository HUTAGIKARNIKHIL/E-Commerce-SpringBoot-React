import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

export default function Home({ cartLength, loadCart }) {
    const [products, setProducts] = useState([]);
    const [cartDataLength, setCartDataLength] = useState(0);

    async function fetchProducts() {
        try {
            const result = await axios.get("http://localhost:8080/product/displayProducts");
            setProducts(result.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        setCartDataLength(cartLength);
        fetchProducts();
    }, [cartLength]);

    const navigate = useNavigate();

    const addToCart = async (id) => {
        try {
            await axios.post(`http://localhost:8080/cart/addToCart/${id}`);
            setCartDataLength(cartLength);
            loadCart();
            fetchProducts();
            navigate("/");
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    async function deleteProduct(id) {
        try {
            await axios.delete(`http://localhost:8080/product/deleteProduct/${id}`);
            fetchProducts();
        } catch (error) {
            console.log("Error deleting product:", error);
        }
    }

    return (
        <div>
            <Navbar cartLength={cartDataLength} />
            <div className="container">
                <div className="py-4">
                    <h2 className="text-center text-secondary">
                        <u>PRODUCT LIST</u>
                    </h2>
                    <div className="row">
                        {products.map((product, index) => (
                            <div key={product.productId} className="col-md-4 mb-4">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.productName}</h5>
                                        <h6 className="text-muted">{product.brand}</h6>
                                        <p className="card-text">
                                            <b>Category:</b> {product.productCategory} <br />
                                            <b>Price:</b> <s>₹{product.productPrice}/-</s> <br />
                                            <b>Discounted:</b> ₹{product.discountedPrice}/- <br />
                                            <b>Quantity:</b> {product.productQty}
                                        </p>
                                        <div className="d-flex justify-content-between">
                                            <button className="btn btn-outline-secondary" onClick={() => addToCart(product.productId)}>
                                                🛒 Add to cart
                                            </button>
                                            <Link className="btn btn-outline-warning" to={`/editProduct/${product.productId}`}>
                                                <img src="https://cdn-icons-png.flaticon.com/128/10629/10629723.png" alt="" style={{ height: "20px" }} /> Edit
                                            </Link>
                                            <button className="btn btn-outline-danger" onClick={() => deleteProduct(product.productId)}>
                                                <img src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="" style={{ height: "20px" }} /> Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

