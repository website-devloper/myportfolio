"use client";

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


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

  return (
    <main className="site-wrapper">
      <section >
        <ToastContainer />
        <div className="about-hero container">
          <div className="spotlight-container1">
            <div className="spotlight1"></div>
            <h1 className=" text-center">Our Work</h1>
          </div>
          <p className="text-center about-p">Here is a Handful of our Projects that are Among the Greatest that Confirm our commitment to introducing visually impacting Web Solutions</p>
        </div>
      </section>

      {/* ###########################################################################################
###########################################################################################
################################################################################################ */}


      <section className="news-cards">
        <div className="container">
          <div className="row d-flex justify-content-between gap-0">
            <div className="col-lg-3 col-md-3 " data-aos="flip-right">
              <div className="card news-card-back flex-fill">
                <img src="assets/images/index/prj1.jpg" alt="card-img" className="w-100" />
                <div className="card-body">
                  <h5>Companies management</h5>
                  <p className="card-text p-f-s">
                    Live demo A powerful and flexible dashboard for Laravel that is designed to be beautiful,
                    elegant​. it provides role-based access control which means user
                    experiences personalized for super-admins admins managers partners so they can safely and
                    effectively work.
                  </p>
                </div>
                <hr className="dotted-line" />
                <div className="card-viewer">
                  <span className="githubLink">Github Link</span>
                  <span>#Php</span>
                  &nbsp;&nbsp;
                  <span>#Laravel</span>
                  &nbsp;&nbsp;
                  <span>#MySql</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 " data-aos="flip-right">
              <div className="card news-card-back flex-fill">
                <img src="assets/images/index/prj3.jpg" alt="card-img" className="w-100" />
                <div className="card-body">
                  <h5>NorthStar store</h5>
                  <p className="card-text p-f-s">
                    Welcome to NorthStar Fashion Store: A One-Stop Bizz Broker for the Modern
                    Buyer Powered by the latest in web technology, this exquisite,
                    user-friendly online store ensures a rewarding experience
                    for customers from browsing to purchase.                  </p>
                </div>
                <hr className="dotted-line" />
                <div className="card-viewer">
                  <span className="githubLink">Github Link</span>
                  <span>#Next.js</span>
                  &nbsp;&nbsp;
                  <span>#Mongodb</span>
                  &nbsp;&nbsp;
                  <span>#Tailwind</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 " data-aos="flip-right">
              <div className="card news-card-back flex-fill">
                <img src="assets/images/index/prj4.jpg" alt="card-img" className="w-100" />
                <div className="card-body">
                  <h5>NFT Hub</h5>
                  <p className="card-text p-f-s">
                    Enter the NFT world of tomorrow, be part with our new and amazing platform for all that are into NFT.
                    CapBids fuses cutting edge design with robust functionality
                    to give you an experience like no other, whether your a
                    buyer/seller/or just looking around!</p>
                </div>
                <hr className="dotted-line" />
                <div className="card-viewer">
                  <span className="githubLink">Github Link</span>
                  <span>#React</span>
                  &nbsp;&nbsp;
                  <span>#Tailwind</span>
                  &nbsp;&nbsp;
                  <span>#Aos</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 " data-aos="flip-right">
              <div className="card news-card-back flex-fill">
                <img src="assets/images/index/prj5.jpg" alt="card-img" className="w-100" />
                <div className="card-body">
                  <h5>Furniture store</h5>
                  <p className="card-text p-f-s">
                    Discover an exciting world of affordable exotic home decor with this chic
                    e-commerce site. We can buy the perfect products for
                    our homes very quickly, with a site optimized for
                    commerce that makes it pretty easy to find those right things to enhance your life.
                  </p>
                </div>
                <hr className="dotted-line" />
                <div className="card-viewer">
                  <span className="githubLink">Github Link</span>
                  <span>#Laravel</span>
                  &nbsp;&nbsp;
                  <span>#Php</span>
                  &nbsp;&nbsp;
                  <span>#Mysql</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ###########################################################################################
###########################################################################################
################################################################################################ */}


      <section>
        <div className="works-hero about-hero container">
          <div className="services pb-lg-4 pb-md-2 pb-sm-0 pb-0 mb-lg-2 mb-md-1 mb-sm-0 mb-0">
            <div className="container">
              <div className="row gap-md-0 gap-sm-4 gap-4">
                <div className="col-lg-6 col-md-6" data-aos="fade-up">
                  <h2 className="text-start custom-h2">
                    YOUR DIGITAL VISION IS OUR MISSION
                  </h2>
                  <p className="text-start mt-lg-4 mt-md-2 mt-sm-2 mt-2 pb-4 custom-p">
                    At MenhCoding, we turn digital dreams into reality. We specialize in web development, design, and tailored WordPress solutions, focusing on creating beautiful websites and engaging user experiences.
                  </p>
                  <p className="text-start pb-4 custom-p">
                    Your identity is our priority, and we make it our responsibility to see to it that your objectives are met to the letter and with vision. Meet our specialized team ready to transform your idea into a strong online presence.
                  </p>
                  <div className="services-btn d-flex justify-content-start pt-lg-4 pt-md-2 pt-sm-2 pt-2">
                    <a className="btn-hover1" href="/services#package-pricing">Get In Touch</a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center abt" data-aos="fade-down">
                  <div className="position-relative">
                    <figure className="abut-hero-img1">
                      <img src="assets/images/index/ba.jpg" width="90%" alt="img" />
                    </figure>
                    <figure className="abut-hero-img2">
                      <img src="assets/images/icon/whitStar.png" alt="img" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ###########################################################################################
###########################################################################################
################################################################################################ */}


      <section className="gateway">
        <div className="container">
          <div className="row gap-lg-0 gap-md-0 gap-sm-4 gap-4">
            <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center" data-aos="fade-up">
              <div className="gateway-bg-img mt-5">
                <figure><img src="assets/images/index/simple1.png" alt="gate_img1" className="moving" /></figure>
              </div>
            </div>
            <div className="col-lg-6 col-md-6  text-md-start text-sm-center text-center" data-aos="fade-down">
              <h2>SIMPLIFY YOUR PROJECT WITH MenhCoding</h2>
           
              <div className="gate mt-md-3 mt-sm-0 mt-4 d-flex flex-md-row flex-sm-column flex-column align-items-center">
                <figure className="d-flex "><img src="assets/images/index/one.png"
                  alt="gate-img1" /></figure>
                <div className="account-text ms-3">
                  <h5 className="pb-2">Get Started</h5>
                  <p className="p-f-s">Click "Get Started" to begin. You'll be taken to a page where you can
                    choose from our three service plans.</p>
                </div>
              </div>

              <div className="gate mt-md-3 mt-sm-0 mt-4   d-flex flex-md-row flex-sm-column flex-column align-items-center">
                <figure className="d-flex "><img src="assets/images/index/two.png"
                  alt="gate-img2" /></figure>
                <div className="account-text ms-3">
                  <h5 className="pb-2">Select Your Plan</h5>
                  <p className="p-f-s">Choose the plan that best fits your needs. Each plan is
                    designed to cater to different requirements.</p>
                </div>
              </div>

              <div className="gate d-flex mt-4  flex-md-row flex-sm-column flex-column align-items-center">
                <figure className="d-flex "><img src="assets/images/index/three.png"
                  alt="gate-img3" /></figure>
                <div className=" account-text ms-3">
                  <h5 className="pb-2">Fill Out the Form </h5>
                  <p className="p-f-s">After selecting your plan, you'll be directed to a form.
                    Fill in your details and any specific requirements.</p>
                </div>
              </div>

              <div className="gate d-flex mt-4  flex-md-row flex-sm-column flex-column align-items-center">
                <figure className="d-flex"><img src="assets/images/index/four.png"
                  alt="gate-img4" /></figure>
                <div className="account-text ms-3">
                  <h5 className="pb-2">Submit Your Order</h5>
                  <p className="p-f-s">Once you've completed the form, click "Submit." We'll receive your order instantly and send you a
                    confirmation email. Expect a response from us shortly.</p>
                </div>
              </div>

              <div className="gate-link text-lg-start text-md-start text-sm-center text-center">
                <Link className="btn-hover1" href="/services#package-pricing">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ###########################################################################################
###########################################################################################
################################################################################################ */}


      <section>
        <div className="container about-banner" data-aos="zoom-in">
          <div className="d-flex justify-content-lg-end justify-content-md-end justify-content-ms-center justify-content-center">
            <div className="banner-text">
              <h3 className="text-md-start text-sm-center text-center">Crafting Your Digital Presence</h3>
              <p className="text-md-start text-sm-center text-center p-f-s">
                Meet our web development services that will transform your ideas into an actuality.
                MenhCoding is where internet designs are appealing and effective,
                giving your brand the online tool it needs to persuade.
              </p>
              <div className="visa-btn text-sm-center text-md-start text-center">
                <a className="btn-hover1" href="/services#package-pricing">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </section>








      <section className="round-word">
        <div className="container">
          <div className="row gap-lg-0 gap-md-0 gap-sm-4 gap-4">
            <div className="col-lg-6 col-md-6 d-flex align-items-lg-start align-items-md-start align-items-ms-center align-items-center justify-content-center flex-column" data-aos="fade-up">
              <h2 className="text-lg-start text-md-start text-sm-center text-center">IMPACTING LIVES GLOBALLY</h2>
              <p className="text-lg-start text-md-start text-sm-center text-center">Discover the projects we've successfully completed, delivering satisfaction to our clients worldwide.</p>
              <div className="d-flex gap-3">
                <div className="sticker">
                  <div className="d-flex">
                    <h3 className="count">50</h3>
                    <h3>+</h3>
                  </div> <span>Projects Delivered</span>
                </div>
                <div className="sticker st-bg">
                  <div className="d-flex">
                    <h3 className="count">100</h3>
                    <h3>+</h3>
                  </div> <span>Happy Clients</span>
                </div>
              </div>
              <div className="d-flex gap-3">
                <div className="sticker st-bg">
                  <div className="d-flex">
                    <h3 className="count">95</h3>
                    <h3>%</h3>
                  </div> <span>Client Satisfaction Rate</span>
                </div>
                <div className="sticker">
                  <div className="d-flex">
                    <h3 className="count">100</h3>
                    <h3>K+</h3>
                  </div> <span>Active Users</span>
                </div>
              </div>

            </div>
            <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center" data-aos="fade-down">
              <figure><img src="assets/images/index/word3.png" alt="img" /></figure>
            </div>
          </div>
        </div>
      </section>



      <div className="footer container">
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
            display: showBackToTop ? "block" : "none",
          }}
        >
          <i className="fa-solid fa-arrow-turn-up"></i>
        </button>)}
    </main>
  );
}
