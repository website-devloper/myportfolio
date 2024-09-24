"use client";

import React from 'react'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Home() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    useEffect(() => {

        AOS.init({
            once: true,
            duration: 1500,
        });

        const loadjQuery = new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = '/assets/js/jquery.js';
            script.async = true;
            script.onload = resolve;
            document.body.appendChild(script);
        });

        loadjQuery.then(() => {
            const scriptUrls = [
                '/assets/js/slick.min.js',
                '/assets/js/custom.js',
                '/assets/js/waypoints.min.js',
            ];

            scriptUrls.forEach(src => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                document.body.appendChild(script);
            });
        });
    }, []);


    return (
        <div>
            <main className="site-wrapper">
            <div className="container">
        <div className="contact-hero">
          <h2 className="text-center">CONTACT US</h2>
          <p className="text-center">We would Love to Hear about your Project and How I can Help. Please fill in the Form,
            and I’ll get Back To you as Soon as Possible.</p>
        </div>
        <section className="d-flex justify-content-center">
          <div className="help position-relative">
            <div className="container">
              <div className="row d-flex gap-lg-5 gap-md-3 gap-sm-4 gap-3 justify-content-center">
                <div className="col-lg-5 col-md-5 help-crd1" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                  <h4>HOW CAN WE HELP?</h4>
                  <p>We are here to assist with all your needs. Reach out to us anytime, and we'll be glad to help.</p>
                  <div className="d-flex gap-4 align-items-center">
                    <i className="fa-solid fa-house"></i>
                    <span>Plaza 101, 5th Floor, Regent Street, London, W1B 5TH, United Kingdom                    </span>
                  </div>
                  {/* <div className="d-flex gap-4 align-items-center">
                    <i className="fa-solid fa-phone"></i>
                    <span>+212 687633774</span>
                  </div> */}
                  <div className="d-flex gap-4 align-items-center">
                    <i className="fa-solid fa-envelope"></i>
                    <span>fatimazahra20033@gmail.com</span>
                  </div>
                  <h5>OPERATING HOURS</h5>
                  <div className="d-flex gap-4 align-items-center">
                    <i className="fa-solid fa-clock"></i>
                    <span>Monday To Sunday <br /> 8:00am to 12:00pm GMT</span>
                  </div>
                </div>

                <div className="col-lg-5 col-md-5 contact-email" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                  <h4>EMAIL US</h4>
                  <form action="action_page.php" id="footer-sub">
                    <div className="row justify-content-center gap-3">
                      <input type="text" name="name" id="name" className="col-md-5 col-sm-12 col-12" placeholder="Your Name" required />
                      <input type="text" name="email" id="email" className="col-md-5 col-sm-12 col-12" placeholder="Email Address" required />
                      <input type="text" name="number" id="number" className="col-md-5 col-sm-12 col-12" placeholder="Phone Number" required />
                      <input type="text" name="subject" id="subject" className="col-md-5 col-sm-12 col-12" placeholder="Subject" required />
                      <textarea className="col-md-11 col-12" name="massage" id="massage" cols="30" rows="5" placeholder="Write here message"></textarea>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                      <button className=" e-btn btn-hover1" type="submit">Submit</button>
                    </div>
                  </form>
                </div>
                <div id="Succes-box"></div>
              </div>
            </div>
          </div>
        </section>
      </div>










      <div className=" footer container">
        <footer className="position-relative">

          <h4 className="text-center">SUBSCRIBE OUR NEWSLETTER</h4>
          <p className="text-center pt-2 pb-3">Get latest News and Updates</p>
          <form className="d-flex align-items-center justify-content-center" id="footer-sub2">
            <div id="Succes-box2"></div>
            <div className="d-flex footer-search ">
              <input type="email" name="search" placeholder="Enter your Email" required />
              <button type="submit" className="btn-hover1">Subscribe</button>
            </div>
          </form>
          <div className="footer-logo text-center pb-lg-4 pb-md-3 pb-sm-2 pb-4">
            <a href="index.html">
              {/* <figure><img src="assets/images/Logo.png" alt="img" /></figure> */}
            </a>
          </div>
          <ul className="d-flex align-items-center justify-content-center">
            <li>
              <a href="#">Feature</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Faq</a>
            </li>
          </ul>
          <hr />
          <div className="row footer-nav-icon">
            <div className="col-lg-6 col-md-3 d-flex align-items-center justify-content-md-start justify-content-sm-center justify-content-center">
              <div
                className="social-icon d-flex gap-2 justify-content-md-start justify-content-sm-center justify-content-center">
                <a href="#"> <i className="fa-brands fa-facebook-f foot-facebook"></i></a>
                <a href="#"> <i className="fa-brands fa-twitter"></i></a>
                <a href="#"> <i className="fa-brands fa-instagram"></i></a>
              </div>

            </div>
            <div className="Copyright d-flex justify-content-center align-items-center text-center w-100">
              <p className="mb-0">Copyright © 2024 MenhCoding All Right Reserved.</p>
            </div>

          </div>
          <hr />

        </footer>
      </div>
      <button onClick="scrollToTop()" id="backToTopBtn"><i className="fa-solid fa-arrow-turn-up"></i></button>
            </main>
        </div>
    )
}

export default Home
