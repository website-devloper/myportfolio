"use client";

import React, { useState } from 'react'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', number: '', subject: '', message: '' });
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {

    const params = new URLSearchParams(window.location.search);
    const pkg = params.get('package');
    setSelectedPackage(pkg || '');
  }, []);






  const handleNewletterSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Successfully subscribed to the newsletter!');
        setEmail(''); // Clear the input after success
        e.target.reset();
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      number: e.target.number.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      pack: selectedPackage,
    };

    try {
      const response = await fetch('/api/packages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Thank you for your message! We will get back to you soon.');
        e.target.reset();
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
    } catch (error) {
      toast.error('Error submitting form. Please try again.');
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
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
  useEffect(() => {
    // Ensure this runs only on the client side
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  return (
    <div>
      <main className="site-wrapper">
        <div className="container">
          <ToastContainer />

          <div className="contact-hero">
            <h2 className="text-center">CONTACT US</h2>
            <p className="text-center">
              We would Love to Hear about your Project and How I can Help. Please fill in the Form, and I’ll get Back To you as Soon as Possible.
            </p>
          </div>

          <section className="d-flex justify-content-center">
            <div className="help position-relative">
              <div className="container">
                <div className="row d-flex gap-lg-5 gap-md-3 gap-sm-4 gap-3 justify-content-center">

                  {/* Contact Info */}
                  <div className="col-lg-5 col-md-5 help-crd1" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <h4>HOW CAN WE HELP?</h4>
                    <p className='help-p'>We are here to assist with all your needs. Reach out to us anytime, and we'll be glad to help.</p>
                    <div className="d-flex gap-4 align-items-center">
                      <i className="fa-solid fa-house"></i>
                      <span>Plaza 101, 5th Floor, Regent Street, London, W1B 5TH, United Kingdom</span>
                    </div>
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

                  {/* Contact Form */}
                  <div className="col-lg-5 col-md-5 contact-email" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <h4>EMAIL US</h4>
                    {successMessage && <div id="success-box" className="text-success">{successMessage}</div>}
                    {errorMessage && <div id="error-box" className="text-danger">{errorMessage}</div>}
                    <form onSubmit={handleSubmit} id="footer-sub">
                      <div className="row justify-content-center gap-3">
                        <input
                          type="text"
                          name="name"
                          className="col-md-5 col-sm-12 col-12"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                        <input
                          type="email"
                          name="email"
                          className="col-md-5 col-sm-12 col-12"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <input
                          type="text"
                          name="number"
                          className="col-md-5 col-sm-12 col-12"
                          placeholder="Phone Number"
                          value={formData.number}
                          onChange={handleInputChange}
                          required
                        />
                        <input
                          type="text"
                          name="subject"
                          className="col-md-5 col-sm-12 col-12"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        />
                        <textarea
                          className="col-md-11 col-12"
                          name="message"
                          cols="30"
                          rows="5"
                          placeholder="Write your message here"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>
                      <input type="hidden" name="package" value={selectedPackage} />

                      <div className="d-flex justify-content-center mt-4">
                        <button className="e-btn btn-hover1" type="submit">Submit</button>
                      </div>
                    </form>


                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>











        <div className=" footer container">
          <footer className="position-relative">

            <h4 className="text-center">SUBSCRIBE OUR NEWSLETTER</h4>
            <p className="text-center latest pt-2 pb-3">Get latest News and Updates</p>
            <form className="d-flex align-items-center justify-content-center" id="footer-sub2" onSubmit={handleNewletterSubmit}>
              <div id="Succes-box2">{message && <p>{message}</p>}</div>
              <div className="d-flex footer-search">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services#package-pricing">Pricing</a>
              </li>
              
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="contactus">Contact Us</a>
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
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            id="backToTopBtn"
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
              backgroundColor: "#000",
              color: "#fff",
              paddingTop: "10px",
              paddingBottom: "10px",
              border: "none",
              cursor: "pointer",
              zIndex: 1000,
              display: showBackToTop ? "block" : "none", // Only display when visible
            }}
          >
            <i className="fa-solid fa-arrow-turn-up"></i>
          </button>)}
      </main>
    </div>
  )
}

export default Home
