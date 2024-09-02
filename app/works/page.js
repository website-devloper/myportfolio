"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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



  return (
    <main className="site-wrapper">

      {/* //////////////////////////////////////////// */}

      <section >
        <div class="about-hero container">
          <h1 class=" text-center">Our Work</h1>
          <p class="text-center about-p">Here are Some of the Selected projects that Showcase my Passion for Web development</p>
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
                    Developed a responsive Laravel-based dashboard featuring CRUD functionality for company details.
                    Implemented role-based access control, ensuring tailored user experiences for super-admins, admins, managers, and partners.
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
                    Welcome to the NorthStar Fashion Store, a sleek and modern e-commerce platform designed to provide a seamless shopping experience. Built using the latest web technologies.
                  </p>
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
                    NFT Hub, a cutting-edge platform designed for NFT enthusiasts to discover, buy, and sell digital assets effortlessly. This website combines a sleek design with advanced functionality to deliver an exceptional user experience.
                  </p>
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
                    Your ultimate destination for stylish and affordable home furnishings.
                    This e-commerce platform offers a shopping experience, making it easy for customers to find and purchase the perfect pieces for their homes.
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
        <div class="works-hero about-hero container">
          <div class="services pb-lg-4 pb-md-2 pb-sm-0 pb-0 mb-lg-2 mb-md-1 mb-sm-0 mb-0">
            <div class="container">
              <div class="row gap-md-0 gap-sm-4 gap-4">
                <div class="col-lg-6 col-md-6" data-aos="fade-up">
                  <h2 class="text-lg-start text-md-start text-sm-center text-center">YOUR DIGITAL VISION IS OUR MISSION</h2>
                  <p
                    class="text-lg-start text-md-start text-sm-center text-center mt-lg-4 mt-md-2 mt-sm-2 mt-2 pb-4 ">
                    At MenhCoding, we turn digital dreams into reality. We specialize in web development, design, and tailored WordPress solutions, focusing on create beautiful websites and engaging user experiences</p>
                  <p class="text-lg-start text-md-start text-sm-center text-center pb-4 ">
                    Your identity is our priority, and we make it our responsibility to see to it that your
                    objectives are met to the letter and with vision.
                    Meet our specialized team ready to transform your idea into a strong online presence</p>
                  <div
                    class="serives-btn justify-content-md-start justify-content-ms-center justify-content-center d-flex pt-lg-4 pt-md-2 pt-sm-2 pt-2">
                    <a class="btn-hover1" href="#">Get In Touch</a>

                  </div>
                </div>
                <div class="col-lg-6 col-md-6 d-flex align-items-center justify-content-center abt" data-aos="fade-down">
                  <div class="position-relative">
                    <figure class="abut-hero-img1"><img src="assets/images/index/ba.jpg" width="90%" alt="img"/></figure>
                    <figure class="abut-hero-img2"><img src="assets/images/icon/whitStar.png" alt="img"/></figure>
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


      <section class="gateway">
        <div class="container">
          <div class="row gap-lg-0 gap-md-0 gap-sm-4 gap-4">
            <div class="col-lg-6 col-md-6 d-flex align-items-center justify-content-center" data-aos="fade-up">
              <div class="gateway-bg-img mt-5">
                <figure><img src="assets/images/index/simple1.png" alt="gate_img1" class="moving" /></figure>
              </div>
            </div>
            <div class="col-lg-6 col-md-6  text-md-start text-sm-center text-center" data-aos="fade-down">
              <h2>SIMPLIFY YOUR PROJECT with MenhCoding  </h2>
              {/* <p class="pt-lg-4 pt-md-3 pt-sm-2 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
                Perferendis iure eius autem
                beatae
                mollitia quasi, neque magni excepturi velit ullam sunt eos minima.</p> */}
              <div
                class="gate mt-md-3 mt-sm-0 mt-4 d-flex flex-md-row flex-sm-column flex-column align-items-center">
                <figure class="d-flex align-items-center"><img src="assets/images/index/one.png"
                  alt="gate-img1" /></figure>
                <div class="account-text ms-3">
                  <h5 class="pb-2">Get Started</h5>
                  <p class="p-f-s">Click "Get Started" to begin. You'll be taken to a page where you can
                    choose from our three service plans.</p>
                </div>
              </div>

              <div
                class="gate mt-md-3 mt-sm-0 mt-4   d-flex flex-md-row flex-sm-column flex-column align-items-center">
                <figure class="d-flex align-items-center"><img src="assets/images/index/two.png"
                  alt="gate-img2" /></figure>
                <div class="account-text ms-3">
                  <h5 class="pb-2">Select Your Plan</h5>
                  <p class="p-f-s">Choose the plan that best fits your needs. Each plan is
                    designed to cater to different requirements.</p>
                </div>
              </div>

              <div class="gate d-flex mt-4  flex-md-row flex-sm-column flex-column align-items-center">
                <figure class="d-flex align-items-center"><img src="assets/images/index/three.png"
                  alt="gate-img3" /></figure>
                <div class="ms-3">
                  <h5 class="pb-2">Fill Out the Form </h5>
                  <p class="p-f-s">After selecting your plan, you'll be directed to a form.
                    Fill in your details and any specific requirements.</p>
                </div>
              </div>

              <div class="gate d-flex mt-4  flex-md-row flex-sm-column flex-column align-items-center">
                <figure class="d-flex align-items-center"><img src="assets/images/index/four.png"
                  alt="gate-img4" /></figure>
                <div class="ms-3">
                  <h5 class="pb-2">Submit Your Order</h5>
                  <p class="p-f-s">Once you've completed the form, click "Submit." We'll receive your order instantly and send you a
                    confirmation email. Expect a response from us shortly.</p>
                </div>
              </div>

              <div class="gate-link text-lg-start text-md-start text-sm-center text-center">
                <a class="btn-hover1" href="#">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ###########################################################################################
###########################################################################################
################################################################################################ */}


      <section>
        <div class="container about-banner" data-aos="zoom-in">
          <div class="d-flex justify-content-lg-end justify-content-md-end justify-content-ms-center justify-content-center">
            <div class="banner-text">
              <h3 class="text-md-start text-sm-center text-center">Crafting Your Digital Presence
              </h3>
              <p class="text-md-start text-sm-center text-center p-f-s">
                Meet our web development services that will transform your ideas into an actuality.
                MenhCoding is where internet designs are appealing and effective,
                giving your brand the online tool it needs to persuade.
              </p>
              <div class="visa-btn text-sm-center text-md-start text-center">
                <a class="btn-hover1" href="#">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </section>








      <section class="round-word">
        <div class="container">
          <div class="row gap-lg-0 gap-md-0 gap-sm-4 gap-4">
            <div class="col-lg-6 col-md-6 d-flex align-items-lg-start align-items-md-start align-items-ms-center align-items-center justify-content-center flex-column" data-aos="fade-up">
              <h2 class="text-lg-start text-md-start text-sm-center text-center">IMPACTING LIVES GLOBALLY</h2>
              <p class="text-lg-start text-md-start text-sm-center text-center">Discover the projects we've successfully completed, delivering satisfaction to our clients worldwide.</p>
              <div class="d-flex gap-3">
                <div class="sticker">
                  <div class="d-flex">
                    <h3 class="count">50</h3>
                    <h3>+</h3>
                  </div> <span>Projects Delivered</span>
                </div>
                <div class="sticker st-bg">
                  <div class="d-flex">
                    <h3 class="count">100</h3>
                    <h3>+</h3>
                  </div> <span>Happy Clients</span>
                </div>
              </div>
              <div class="d-flex gap-3">
                <div class="sticker st-bg">
                  <div class="d-flex">
                    <h3 class="count">95</h3>
                    <h3>%</h3>
                  </div> <span>Client Satisfaction Rate</span>
                </div>
                <div class="sticker">
                  <div class="d-flex">
                    <h3 class="count">100</h3>
                    <h3>K+</h3>
                  </div> <span>Active Users</span>
                </div>
              </div>

            </div>
            <div class="col-lg-6 col-md-6 d-flex align-items-center justify-content-center" data-aos="fade-down">
              <figure><img src="assets/images/about/round-word.png" alt="img" /></figure>
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
            <div class="Copyright d-flex justify-content-center align-items-center text-center w-100">
    <p class="mb-0">Copyright © 2024 MenhCoding All Right Reserved.</p>
</div>

          </div>
          <hr/>

        </footer>
      </div>
      <button onClick="scrollToTop()" id="backToTopBtn"><i className="fa-solid fa-arrow-turn-up"></i></button>
    </main>
  );
}
