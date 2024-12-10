import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate("/enroll");
    };

    return (
        <header className="header">
            <div className="logo">Origami World</div>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#pricing">Pricing</a>
                <a href="#blog">Blog</a>
            </nav>
            <button className="explore-btn" onClick={handleExploreClick}>
                Enroll now
            </button>
        </header>
    );
};

export default Header;
