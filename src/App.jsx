import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
    const [showProductList, setShowProductList] = useState(false);

    const handleGetStartedClick = () => {
        setShowProductList(true);
    };

    return (
        <Router>
            <div className="app-container">
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
                {showProductList && (
                    <div className="product-list-container visible">
                        <Routes>
                            <Route path="/" element={<ProductList />} />
                        </Routes>
                    </div>
                )}
            </div>
        </Router>
    );
}

export default App;
