"use client";

import { useState, useEffect } from "react";
import { Hexagon } from "lucide-react";

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
            <div className="logo" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Hexagon size={24} color="#3B82F6" strokeWidth={2.5} />
                Hevar Quantum
            </div>

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