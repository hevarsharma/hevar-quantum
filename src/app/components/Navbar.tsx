"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "navbarScrolled" : ""}`}>
            <div className="logo">Hevar Quantum</div>

            <div className="navRight">
                <div className="links">
                    <a href="#products">Products</a>
                    <a href="#services">Services</a>
                    <a href="#vision">Vision</a>
                    <a href="#contact">Contact</a>
                </div>
                <a
                    href="mailto:contact@hevarquantum.com"
                    className="navButton"
                >
                    Start a Project
                </a>
            </div>
        </nav>
    );
}