import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ProductList from './ProductList';
import CartItem from './CartItem'; // Make sure CartItem component is imported
import AboutUs from './AboutUs'; // Assuming AboutUs component is imported

function App() {
    const [showProductList, setShowProductList] = useState(false); // Start with productList hidden

    const handleGetStartedClick = () => {
        setShowProductList(true); // Set showProductList to true to show productList
    };

    return (
        <Router>
            <div className="app-container">
                {/* Landing Page */}
                <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
                    <div className="background-image"></div>
                    <div className="content">
                        <div className="landing-content">
                            <h1>Welcome To Paradise Nursery</h1>
                            <div className="divider"></div>
                            <p>Where Green Meets Serenity</p>
                            <Link to="/" className="get-started-button" onClick={handleGetStartedClick}>
                                Get Started
                            </Link>
                        </div>
                        <div className="aboutus-container">
                            <AboutUs />
                        </div>
                    </div>
                </div>

                {/* Product List */}
                <div className={`product-list-container ${showProductList ? 'visible' : 'hidden'}`}>
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/cartItem" element={<CartItem />} />
                        {/* Add more routes as needed */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
