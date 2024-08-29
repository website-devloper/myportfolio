"use client";

import React, { useEffect } from 'react';

export default function Navbar() {

   

    return (
        <div>
            <header>
                <nav className="container navbar navbar-expand-lg fixed-top">
                    <div className="container-fluid">
                        <a className="nav-logo p-0" href="index.html">
                            <img src="assets/images/index/logowebsite.png" alt="logo" />
                        </a>
                        <button id="navbar-toggle" className="navbar-toggle" type="button"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav d-flex justify-content-center align-items-center gap-lg-2 gap-md-2 gap-sm-2 gap-2 mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">Home</a>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link" href="/works">Works</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contactus">Contact us</a>
                                </li>
                                <li className="nav-item">
                                    <a id="search-bar-bt" className="nav-link" href="#">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-hrf btn-hover1" href="">Get In Touch</a>
                                </li>
                                <li className="nav-item" id="right_sidebar_toggle">
                                    <a className="nav-link" href="#">
                                        <i className="fa-sharp fa-solid fa-bars"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <aside>
                    <div id="mySidenav" className="sidenav">
                        <div className="side-nav-logo d-flex justify-content-between align-items-center ps-4 pe-3">
                            <figure className="navbar-brand">
                                <a href="index.html"><img src="assets/images/Logo.png" alt="img" className="nav-logo" /></a>
                            </figure>
                            <div id="closebtn" className="closebtn">
                                <i className="fa-solid fa-square-xmark side-bar-close-btn"></i>
                            </div>
                        </div>
                        <ul>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/shop">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/developer">Developer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contactus">Contact us</a>
                            </li>
                            <li className="nav-item">
                                <a id="search-bar-bt" className="nav-link" href="#">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </a>
                            </li>
                           
                            <li className="nav-item" id="right_sidebar_toggle">
                                <a className="nav-link" href="#">
                                    <i className="fa-sharp fa-solid fa-bars"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className="search" id="search-bar">
                    <form className="d-flex nav-search">
                        <input type="text" name="search" placeholder="Enter your text" />
                        <button className="btn-hover1" type="submit">Search</button>
                    </form>
                    <button id="remove-btn">
                        <i className="fa-solid fa-square-xmark"></i>
                    </button>
                </div>
                <section className="right-sidebar" id="right_side">
                    <div className="d-flex justify-content-between align-items-center">
                        <a className="p-0" href="index.html"><img src="assets/images/Logo.png" alt="logo" /></a>
                        <button id="close_right_sidebar" className="close_right_sidebar fa-solid fa-xmark"></button>
                    </div>
                    <p className="mt-4 pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <a href="#" className="btn-hover1">Discover More</a>
                    <hr />
                    <h5 className="mt-4 mb-4">Connected details:</h5>
                    <ul className="d-flex flex-column gap-3">
                        <li>
                            <a href="#"><i className="fa-solid fa-phone"></i></a>
                            <a href="mailto:yourname@email.com">yourname@email.com</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa-solid fa-envelope"></i></a>
                            <a href="tel:+1234567890">+123-456-7890</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa-solid fa-clock"></i></a>
                            <a href="#">Office Hours: 8AM - 11PM Sunday - Weekend Day</a>
                        </li>
                    </ul>
                    <span className="d-flex gap-4 mt-4">
                        <a href="#" className="p-0"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#" className="p-0"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="p-0"><i className="fa-brands fa-twitter"></i></a>
                    </span>
                </section>
            </header>
        </div>
    );
}
