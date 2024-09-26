"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef, useState } from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';



export default function Home() {
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







  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(true); // Video state (autoplay by default)

  const handlePlayPause = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Automatically hide the play button initially when the video is playing
  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    }
  }, []);



  return (
    <main className="site-wrapper">

      <section class="feature-hero" data-aos="zoom-in">
        <div class="container">
          <h1 class="text-center">Our Services</h1>
          <p class="text-center">Specific Technologies Specially Developed to Help You Succeed</p>
          <div class="position-relative">

            <div class="featur-video">
              {!isPlaying && (
                <a class="video-play-button" onClick={handlePlayPause}>
                  <span className="fa-solid fa-play"></span>
                </a>
              )}
            </div>
            <figure className="feature-img">
              <video
                ref={videoRef}
                width="100%"
                height="50%"
                autoPlay
                loop
                muted
                playsInline
                onClick={handlePlayPause}
                className="video">
                <source src="/assets/images/index/services-vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </figure>

            <figure class="feature-img2">
              <img src="assets/images/feauter/feature-rect.png" alt="img" />
            </figure>
          </div>
        </div>
      </section>














      <section className="core2">
        <div className="container">
          {/* <h2 className="text-center">OUR SERVICES</h2>
          <p className="core-p">Specific Technologies Specially Developed to Help You Succeed</p> */}
          <div className="row d-flex gap-md-0 gap-sm-5 gap-5">
            <div className="col-lg-4 col-md-4 d-flex flex-column gap-3 justify-content-center" data-aos="fade-up">
              <div className="core-card">
                <h5>Full-Stack Web Development</h5>
                <p>Our services include all-rounded web solutions that are both on the client-side and the server-side. by applying PHP, Laravel, React, Next.js, Node.js, and Express.js, we design and develop web applications that can meet your specific needs while also being easy to maintain in the future</p>
              </div>
              <div className="core-card">
                <h5>UI & UX Design</h5>
                <p>We present interfaces with material design that have an attractive appearance and are at the same time intuitive to use. We aim at making user experience more effective through simplicity and satisfaction, using tools such as Figma, Sketch, and Adobe XD</p>
              </div>
              <div className="core-card">
                <h5>Content Management Systems (CMS) Customization</h5>
                <p>We offer specific knowledge of different CMS platforms including WordPress for developing unique themes, plugins, and efficient content management solutions. Our objective is to make your website not only fully functional but also very aesthetically pleasing</p>
              </div>
            </div>


            <div className="col-lg-4 col-md-4 d-flex justify-content-center align-items-center" data-aos="zoom-in">
              <figure><img src="assets/images/index/serv1.png" alt="img" className="moving" /></figure>
            </div>


            <div className="col-lg-4 col-md-4 d-flex flex-column gap-3 justify-content-center" data-aos="fade-down">
              <div className="core-card1">
                <h5>E-commerce Solutions</h5>
                <p>WooCommerce is used to design and optimize e-commerce stores, with an emphasis on stability, security, and ease of use. They are designed with the sole aim of improving the image of the customer and improving their sales</p>
              </div>
              <div className="core-card1">
                <h5>Custom Template Design for Websites and E-books</h5>
                <p>These are web-based templates; websites, e-Books, and guides which are developed depending on the needs of the company. We ensure that our designs do not only look good and pleasing to the eye but also functional and easy to use</p>
              </div>
              <div className="core-card1">
                <h5>SEO & Digital Marketing Services</h5>
                <p>Our goals include increasing website visibility through search engine optimization to attract traffic. Our Social media and Email marketing services can be used to improve your online marketing strategy</p>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="plans__container">
        <div className="plans">
          <div className="plansHero">
            <h1 className="plansHero__title">Making Digital Experiences One Package at a Time</h1>
            <p className="plansHero__subtitle">Pick the plan that is right for you and turn your vision into reality.</p>
          </div>
          <div className="planItem__container" data-aos="fade-up">

            {/* Basic Plan */}
            <div className="planItem basic planItem--free">
              <div className="card1">
                <div className="card__header">
                  {/* <FontAwesomeIcon icon={RegularLightbulb} size="2x" /> */}
                  <div><img src='assets/images/index/lightbulb.png' width="32px" /></div>

                  <h2>Basic</h2>
                </div>
                <div className="card__desc">Perfect for small businesses seeking a quick, affordable online presence</div>
              </div>

              <div className="price-container">
                <div className="price-details">
                  <div className="discount-label">
                    <span className="old-price">$399</span> - $100 OFF
                  </div>
                  <p className="discount-price">$299</p>
                </div>
              </div>
              <ul className="featureList">
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#EA4C89", fontSize: "20px" }} /> Up to 4 custom-designed pages</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#EA4C89", fontSize: "20px" }} /> Mobile-optimized responsive design</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#EA4C89", fontSize: "20px" }} /> Basic SEO setup</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#EA4C89", fontSize: "20px" }} /> Contact form integration</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#EA4C89", fontSize: "20px" }} /> CMS setup</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#EA4C89", fontSize: "20px" }} /> Social media links Integration</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#EA4C89", fontSize: "20px" }} /> Free domain for 1 year</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#EA4C89", fontSize: "20px" }} /> Free SSL Certificate</li>
                <li className="disabled"><FontAwesomeIcon icon={faXmark} style={{ color: "#b1b8c9", fontSize: "20px" }} /> E-commerce functionality</li>
                <li className="disabled"><FontAwesomeIcon icon={faXmark} style={{ color: "#b1b8c9", fontSize: "20px" }} /> Custom API integrations</li>
                <li className="disabled"><FontAwesomeIcon icon={faXmark} style={{ color: "#b1b8c9", fontSize: "20px" }} /> Advanced SEO optimization</li>
              </ul>
              <button className="button">Get Started</button>
            </div>

            {/* Business Plan */}
            <div className="planItem business highlight planItem--pro">
              <div className="card1">
                <div className="card__header">
                  <div><img src="assets/images/index/chartg2.png" width="32px" /></div>
                  <h2>Business</h2>
                  <div className="card__label label">Best Value</div>
                </div>
                <div className="card__desc">Designed for growing businesses that require more features and scalability</div>
              </div>

              <div className="price-container">
                <div className="price-details">
                  <div className="discount-label">
                    <span className="old-price">$699</span> - $250 OFF
                  </div>
                  <p className="discount-price">$449</p>
                </div>
              </div>
              <ul className="featureList">
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#EA4C89", fontSize: "20px" }} /> Up to 10 custom-designed pages</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#EA4C89", fontSize: "20px" }} /> Fully mobile-responsive design</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#EA4C89", fontSize: "20px" }} /> Advanced SEO setup and optimization</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#EA4C89", fontSize: "20px" }} /> CMS setup with customization</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#EA4C89", fontSize: "20px" }} /> E-commerce integration (up to 50 products)</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#EA4C89", fontSize: "20px" }} /> Free domain for 1 year & SSL Certificate</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#EA4C89", fontSize: "20px" }} /> Google Analytics setup & reporting</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#EA4C89", fontSize: "20px" }} /> Basic website maintenance for 3 months</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#EA4C89", fontSize: "20px" }} /> Custom contact forms and pop-ups</li>
                <li className="disabled"><FontAwesomeIcon icon={faXmark} style={{ color: "#b1b8c9", fontSize: "20px" }} /> Advanced e-commerce (over 50 products)</li>
                <li className="disabled"><FontAwesomeIcon icon={faXmark} style={{ color: "#b1b8c9", fontSize: "20px" }} /> Full custom web applications</li>
              </ul>
              <button className="button button--pink">Get Started</button>
            </div>

            {/* Enterprise Plan */}
            <div className="planItem enterprise planItem--entp">
              <div className="card2">
                <div className="card__header">
                  <div><img src="assets/images/index/entreprise.png" width="32px" /></div>
                  <h2>Enterprise</h2>
                </div>
                <div className="card__desc1">For companies needing advanced customization and business-focused solutions</div>
              </div>

              <div className="price-container">
                <div className="price-details">
                  <div className="discount-label">
                    <span className="old-price1">$999</span> - $350 OFF
                  </div>
                  <p className="discount-price1">$649</p>
                </div>
              </div>

              <ul className="featureList">
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#fff", fontSize: "20px" }} /> Unlimited custom pages</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#fff", fontSize: "20px" }} /> Full CMS customization (WordPress)</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#fff", fontSize: "20px" }} /> Advanced e-commerce functionality (unlimited products, subscriptions...)</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#fff", fontSize: "20px" }} /> Custom API integrations</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#fff", fontSize: "20px" }} /> Advanced SEO strategy & ongoing optimization</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#fff", fontSize: "20px" }} /> Multi-language support</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#fff", fontSize: "20px" }} /> 1-year website maintenance & updates</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#fff", fontSize: "20px" }} /> Priority support (24/7)</li>
                <li><FontAwesomeIcon icon={faCheck} style={{ color: "#fff", fontSize: "20px" }} /> Custom business tools & dashboards</li>
                <li className="disabled"><FontAwesomeIcon icon={faXmark} style={{ color: "#b1b8c9", fontSize: "20px" }} /> Social media management (offered separately)</li>
              </ul>
              <button className="button button--white">Get Started</button>
            </div>
          </div>
        </div>
      </section>



      {/* ########################################################################### */}

      <section className="gateway1">
        <div className="container">
          <div className="row gap-lg-0 gap-md-0 gap-sm-4 gap-4">
            <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center" data-aos="fade-up">
              <div className="gateway-bg-img mt-5">
                <figure><img src="assets/images/index/simple1.png" alt="gate_img1" className="moving" /></figure>
              </div>
            </div>
            <div className="col-lg-6 col-md-6  text-md-start text-sm-center text-center" data-aos="fade-down">
              <h2>SIMPLIFY YOUR PROJECT WITH MenhCoding  </h2>
              {/* <p className="pt-lg-4 pt-md-3 pt-sm-2 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
                Perferendis iure eius autem
                beatae
                mollitia quasi, neque magni excepturi velit ullam sunt eos minima.</p> */}
              <div
                className="gate mt-md-3 mt-sm-0 mt-4 d-flex flex-md-row flex-sm-column flex-column align-items-center">
                <figure className="d-flex align-items-center"><img src="assets/images/index/one.png"
                  alt="gate-img1" /></figure>
                <div className="account-text ms-3">
                  <h5 className="pb-2">Get Started</h5>
                  <p className="p-f-s">Click "Get Started" to begin. You'll be taken to a page where you can
                    choose from our three service plans.</p>
                </div>
              </div>

              <div
                className="gate mt-md-3 mt-sm-0 mt-4   d-flex flex-md-row flex-sm-column flex-column align-items-center">
                <figure className="d-flex align-items-center"><img src="assets/images/index/two.png"
                  alt="gate-img2" /></figure>
                <div className="account-text ms-3">
                  <h5 className="pb-2">Select Your Plan</h5>
                  <p className="p-f-s">Choose the plan that best fits your needs. Each plan is
                    designed to cater to different requirements.</p>
                </div>
              </div>

              <div className="gate d-flex mt-4  flex-md-row flex-sm-column flex-column align-items-center">
                <figure className="d-flex align-items-center"><img src="assets/images/index/three.png"
                  alt="gate-img3" /></figure>
                <div className="ms-3">
                  <h5 className="pb-2">Fill Out the Form </h5>
                  <p className="p-f-s">After selecting your plan, you'll be directed to a form.
                    Fill in your details and any specific requirements.</p>
                </div>
              </div>

              <div className="gate d-flex mt-4  flex-md-row flex-sm-column flex-column align-items-center">
                <figure className="d-flex align-items-center"><img src="assets/images/index/four.png"
                  alt="gate-img4" /></figure>
                <div className="ms-3">
                  <h5 className="pb-2">Submit Your Order</h5>
                  <p className="p-f-s">Once you've completed the form, click "Submit." We'll receive your order instantly and send you a
                    confirmation email. Expect a response from us shortly.</p>
                </div>
              </div>

              <div className="gate-link text-lg-start text-md-start text-sm-center text-center">
                <a className="btn-hover1" href="#">Get Started</a>
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
              <h3 className="text-md-start text-sm-center text-center">Crafting Your Digital Presence
              </h3>
              <p className="text-md-start text-sm-center text-center p-f-s">
                Meet our web development services that will transform your ideas into an actuality.
                MenhCoding is where internet designs are appealing and effective,
                giving your brand the online tool it needs to persuade.
              </p>
              <div className="visa-btn text-sm-center text-md-start text-center">
                <a className="btn-hover1" href="#">Get In Touch</a>
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
  );
}
