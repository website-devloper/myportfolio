"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [currentPath, setCurrentPath] = useState('');
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

    // This effect ensures that the code only runs on the client-side
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentPath(window.location.pathname);
        }

        const handleRouteChange = (url) => {
            setCurrentPath(url);
        };

        // Listen for route changes using the window popstate event
        window.addEventListener('popstate', () => handleRouteChange(window.location.pathname));

        return () => {
            // Clean up the event listener on component unmount
            window.removeEventListener('popstate', () => handleRouteChange(window.location.pathname));
        };
    }, []);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsOpen((prev) => !prev); // Toggles the menu state
    };

    return (
        <header>
            <nav className="container navbar navbar-expand-lg fixed-top pt-3">
                <div className="container-fluid">
                    <a className="nav-logo p-0" href="/">
                        <img src="assets/images/index/logowebsite.png" alt="logo" style={{ width: "200px" }} />
                    </a>


                    <div
                        className="navbar-toggler"
                        onClick={toggleMenu}
                        aria-expanded={isOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                    >
                        <img
                            src={isOpen ? "/assets/images/index/close.png" : "/assets/images/index/menu.png"}
                            width={isOpen ? "28px" : "32px"}
                            height={isOpen ? "28px" : "32px"}
                            aria-label="Toggle navigation"
                            style={{ transition: 'transform 0.3s ease' }} // Smooth transition for icon change
                        />
                    </div>

                    <div className={`collapse navbar-collapse mobile-menu ${isOpen ? "show" : ""}`} id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex justify-content-center align-items-center gap-lg-2 gap-md-2 gap-sm-2 gap-2 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="/" className={`nav-link ${currentPath === "/" ? "active-link" : ""}`}>
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link href="/works" className={`nav-link ${currentPath === "/works" ? "active-link" : ""}`}>
                                    Works
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/services" className={`nav-link ${currentPath === "/services" ? "active-link" : ""}`}>
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contactus" className={`nav-link ${currentPath === "/contactus" ? "active-link" : ""}`}>
                                    Contact Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contactus" className="nav-link nav-hrf btn-hover1">
                                    Get In Touch
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>


    );
}
