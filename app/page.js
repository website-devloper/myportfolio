"use client";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', number: '', subject: '', message: '' });
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');



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




  useEffect(() => {

    const params = new URLSearchParams(window.location.search);
    const pkg = params.get('package');
    setSelectedPackage(pkg || '');
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: '0', // Ensure full visibility of the cards
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          centerPadding: '0', // Adjust padding for full visibility
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: false,
        }
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: false,
        }
      }
    ]
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
    $(document).ready(function () {
      let currentIndex = 0;
      const slides = $('.prof-slide');
      const totalSlides = slides.length;

      $('.slider-btn-right').click(function () {
        if (currentIndex < totalSlides - 1) {
          currentIndex++;
        } else {
          currentIndex = 0;
        }
        $('.prof-slide-wrapper').css('transform', 'translateX(' + (-currentIndex * 100) + '%)');
      });

      $('.slider-btn-left').click(function () {
        if (currentIndex > 0) {
          currentIndex--;
        } else {
          currentIndex = totalSlides - 1;
        }
        $('.prof-slide-wrapper').css('transform', 'translateX(' + (-currentIndex * 100) + '%)');
      });
    });
  })
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


  // ################################################################





  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  // ################################################################

  return (
    <main className="site-wrapper">
      <section className="hero">
        <div className="container">
          <ToastContainer />

          <div className="row text-md-start text-sm-center text-center gap-md-0 gap-sm-4 gap-5">
            <div data-aos="fade-up" className="col-md-6 d-flex align-items-md-start align-items-ms-center align-items-center justify-content-center flex-column">
              <div className="spotlight-container">
                <div className="spotlight"></div>
                <h1>Hi, I am MenCoding</h1>
              </div>
              <p>This is an experienced programmer, working for more than 6 years,
                who is proficient in making concepts into engaging and usable
                software solutions. I believe my strength is in ensuring the provision
                of smart and customer satisfactory solutions.</p>

              <Link className="btn-hover1" href="/services#package-pricing" scroll={false}>
                Get In Touch
              </Link>
            </div>
            <div data-aos="fade-down" className="col-md-6 position-relative d-flex flex-column justify-content-center align-items-center mt-md-0 mt-sm-5 mt-4">
              <img src="assets/images/index/hero.png" alt="hero_img1" className="moving" />
              <img src="assets/images/index/hero_watch.png" alt="hero_img2" />
              <img src="assets/images/icon/hero_star.png" alt="hero_icon" />
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="row text-md-start text-sm-center text-center">
            <div className="col-md-6 d-flex justify-content-between">
              <div className="ab_card1" data-aos="flip-left">
                <h3>About</h3>
                <p className="p-f-s">I have more than 6 years experience in developing software
                  and I am passionate about turning concepts into stylish and productive websites.
                  Thus, every project that I undertake has not only an aesthetic appeal but also usability since
                  I possess professional knowledge in WordPress and web development.
                  I am fully committed to work and engage in constant improvement to ensure that the outcomes
                  I produce are outstanding and the solutions provided are creative.
                  Corn my passion I feel obliged to stay updated with the latest technologies in the market,
                  so that I can always deliver the best experience to each customer.</p>
                <div
                  className="d-flex align-items-center justify-content-lg-start justify-content-md-center justify-content-center">
                  <a className="btn-hover1" href="/services">Learn More</a>
                  {/* <div className="abut-video">
                    <div className="video-play-button" href="#">
                      <span className="fa-solid fa-play"></span>
                    </div>

                  </div> */}

                </div>
              </div>
            </div>
            <div data-aos="flip-right" className=" col-md-6 d-flex justify-content-center mt-md-0 mt-sm-3 mt-3">
              <img src='assets/images/index/aboutimg1.png' />
            </div>
          </div>
        </div>

      </section>

      <section className="core">
        <div className="container text-center">
          <h2>OUR SERVICES</h2>
          <p className="core-p">Specific Technologies Specially Developed to Help You Succeed</p>

          <div className="row d-flex justify-content-center gap-md-0 gap-sm-5 gap-5">

            <div className="col-lg-4 col-md-6 d-flex flex-column gap-3 justify-content-center align-items-center" data-aos="fade-up">
              <div className="core-card text-center">
                <h5>Full-Stack Web Development</h5>
                <p>Our services include all-rounded web solutions that are both on the client-side and the server-side. By applying PHP, Laravel, React, Next.js, Node.js, and Express.js, we design and develop web applications that can meet your specific needs while also being easy to maintain in the future.</p>
              </div>
              <div className="core-card text-center">
                <h5>UI & UX Design</h5>
                <p>We present interfaces with material design that have an attractive appearance and are at the same time intuitive to use. We aim at making user experience more effective through simplicity and satisfaction, using tools such as Figma, Sketch, and Adobe XD.</p>
              </div>
              <div className="core-card text-center">
                <h5>Content Management Systems (CMS) Customization</h5>
                <p>We offer specific knowledge of different CMS platforms including WordPress for developing unique themes, plugins, and efficient content management solutions. Our objective is to make your website not only fully functional but also very aesthetically pleasing.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center" data-aos="zoom-in">
              <figure>
                <img src="assets/images/index/serv1.png" alt="img" className="moving" />
              </figure>
            </div>

            <div className="col-lg-4 col-md-6 d-flex flex-column gap-3 justify-content-center align-items-center" data-aos="fade-down">
              <div className="core-card1 text-left">
                <h5>E-commerce Solutions</h5>
                <p>WooCommerce is used to design and optimize e-commerce stores, with an emphasis on stability, security, and ease of use. They are designed with the sole aim of improving the image of the customer and improving their sales.</p>
              </div>
              <div className="core-card1 text-left">
                <h5>Custom Template Design for Websites and E-books</h5>
                <p>These are web-based templates; websites, e-Books, and guides which are developed depending on the needs of the company. We ensure that our designs do not only look good and pleasing to the eye but also functional and easy to use.</p>
              </div>
              <div className="core-card1 text-left">
                <h5>SEO & Digital Marketing Services</h5>
                <p>Our goals include increasing website visibility through search engine optimization to attract traffic. Our Social media and Email marketing services can be used to improve your online marketing strategy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ispsum-logo">
        <div className="container">
          <h2 className="text-center">TECH STACK</h2>
          <p className="core-p">Tools that Produce Change and valuable Performance.</p>
          <div className="logo_ispsum_slider">
            <div className="track">
              <a href="#"><figure><img src="assets/images/index/html.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/css.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/javascript.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/typescript.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/tailwind.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/bootstrap.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/reactjs.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/redux.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/next-js.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/php.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/laravel.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/nodejs.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/docker.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/figma.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/git.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/mongodb.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/mysql.png" alt="img" /></figure></a>

              {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}

              <a href="#"><figure><img src="assets/images/index/html.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/css.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/javascript.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/typescript.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/tailwind.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/bootstrap.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/reactjs.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/redux.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/next-js.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/php.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/laravel.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/nodejs.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/docker.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/figma.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/git.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/mongodb.png" alt="img" /></figure></a>
              <a href="#"><figure><img src="assets/images/index/mysql.png" alt="img" /></figure></a>
            </div>
          </div>
        </div>
      </div>

      <section className="pricing pricing-b-g">

        <div className="container">
          <h2 className="text-sm-center text-center">WORK EXPERIENCE</h2>

          <div className="row ">
            <div className="col-lg-6 col-md-6 align-items-center justify-content-center pricing-bg" data-aos="fade-up">

              <div>
                <figure><img src="assets/images/index/works1.jpg" alt="pric-img1" className="moving" /></figure>
                <figure><img src="assets/images/icon/hero_star.png" alt="pric-img2" /></figure>
              </div>

              <div>
                <figure><img src="assets/images/index/works2.jpg" width="88%" alt="pric-img3" className="moving" /></figure>
                <figure><img src="assets/images/icon/hero_star.png" alt="pric-img4" /></figure>
              </div>

            </div>
            <div className="col-lg-6 col-md-6 mt-md-0 mt-sm-5 mt-5" data-aos="fade-down">

              <div className="pric-list">
                <h6>Php Laravel Developer</h6>
                <div className='d-flex'>
                  <div className="mt-3 "><img width="60%" src='/assets/images/index/points.png' /></div>
                  <p>Arymaid</p>
                </div>
                <div className="d-flex">
                  <div className="d-flex justify-content-between gap-1">
                    <p className="p-f-s work-p">In this position at Arymaid, I created web applications that were easily scalable with Laravel framework and clean, reusable,
                      and sustainable PHP code. Basically, my first responsibility was to design effective e-business solutions capable of providing customers with a
                      fast and convenient online shopping experience.</p>
                  </div>
                </div>
                <h5 className='text-sm-end'>Oct 2022 - Juin 2023</h5>

              </div>
              <div className="pric-list second">
                <h6>Full Stack Developer</h6>
                <div className='d-flex'>
                  <div className="mt-3 "><img width="60%" src='/assets/images/index/points.png' /></div>
                  <p>Fiduciaire Brighten</p>
                </div>

                <div className="d-flex justify-content-between">
                  <div className="d-flex justify-content-between">
                    <p className="p-f-s work-p">While implementing the Company System Management Dashboard at
                      Fiduciaire Brighten, I participated in the work on the front-end and back-end functionalities.
                      I worked with team members from other departments
                      to provide customer-oriented products that will benefit the organization.
                    </p>
                  </div>
                </div>
                <h5 className='text-sm-end'> Oct 2023 - Mar 2024</h5>

              </div>
              <div className="pric-list">
                <h6>Software Developer</h6>
                <div className='d-flex'>
                  <div className="mt-3 "><img width="60%" src='/assets/images/index/points.png' /></div>
                  <p>Freelance</p>
                </div>

                <div className="d-flex">

                  <div className="d-flex justify-content-between gap-1">
                    <p className="p-f-s work-p">In this role as Freelance Software Developer,
                      my duties included requirement analysis as well as implementation. By writing and debugging
                      code in several programming languages, I developed, maintained,
                      and scaled software solutions that meet customers’ requirements.</p>
                  </div>
                </div>
                <h5 className='text-sm-end'> Nov 2023 - Present</h5>

              </div>
              <div className="pric-list second">
                <h6>WordPress Developer</h6>
                <div className='d-flex'>
                  <div className="mt-3"><img width="60%" src='/assets/images/index/points.png' /></div>
                  <p>Freelance</p>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex justify-content-between">
                    <p className="p-f-s work-p">I was a Freelance WordPress Developer, and my main tasks were the construction of WordPress sites, from themes and plugins.
                      This ensured I kept abreast with market trends and offered them relevant, functional web designs.</p>
                  </div>
                </div>
                <h5 className='text-sm-end'> Jan 2024 - Present</h5>

              </div>
              <div className="pric-list ">
                <h6>E-books Creator</h6>
                <div className='d-flex'>
                  <div className="mt-3"><img width="60%" src='/assets/images/index/points.png' /></div>
                  <p>Freelance</p>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex justify-content-between">
                    <p className="p-f-s work-p">I design and develop e-books that are informative for specific
                      disciplines such as fitness and business.
                      I have to create, research and design work to give readers useful information.
                    </p>

                  </div>
                </div>
                <h5 className='text-sm-end'> Feb 2024 - Present</h5>

              </div>
              <div className="text-md-start text-sm-center text-center pt-lg-4 pt-md-2 pt-sm-0 pt-1">
                <a className="btn-hover1" href="/services#package-pricing">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="profaessional">
        <div className="container">
          <h2 className="text-center">Testimonials</h2>
          <p className="text-center pt-3 pb-5 mb-2">Assisting firms with new advanced instruments and cooperation.
          </p>
          <div className="prof-size" data-aos="zoom-in-up">
            <div className="prof-slider position-relative">
              <button className="slider-btn slider-btn-left">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <div className="prof-slide-wrapper">
                <div className="prof-slide position-relative">
                  <div>
                    <div className="d-flex align-items-center justify-content-center">
                      <img src="assets/images/index/testi.jpg" alt="img" className="prof-img-2" />
                    </div>
                    <div>
                      <img src="assets/images/slider/Comma.png" alt="img" className="prof-img-1" />
                    </div>
                    <p className="text-center testi p-f-s">Collaboration with MenhCoding has changed the approach to our projects. The skills in Python as well as the use of web applications such as Django and React have improved the speed and afforded user-friendliness of the applications. They particularly have a good experience in aspects like problem solving and in offering timeless solutions.</p>
                    <div className="prof-star pt-2 pb-2 text-center">
                      <span className="stars text-lg-start">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <h5 className="text-center ">Lena T</h5>
                    <p className="text-center testi pt-2 pb-5 p-f-s">Project Lead at CodeWave</p>
                  </div>
                </div>
                <div className="prof-slide position-relative">
                  <div>
                    <div className="d-flex conta align-items-center justify-content-center">
                      <img src="assets/images/index/testi3.jpg" alt="img" className="prof-img-2" />
                    </div>
                    <div>
                      <img src="assets/images/slider/Comma.png" alt="img" className="prof-img-1" />
                    </div>
                    <p className="text-center testi p-f-s">Overall, MenhCoding has been a good collaborator in our machine learning projects. Their knowledge in TensorFlow, Keras, and data science proved invaluable to our project. They support themselves and are always willing to lend a hand to other members of the team.</p>
                    <div className="prof-star pt-2 pb-2 text-center">
                      <span className="stars text-lg-start">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <h5 className="text-center">Emily J</h5>
                    <p className="text-center testi pt-2 pb-5 p-f-s">Lead Developer at DevTech</p>
                  </div>
                </div>
                <div className="prof-slide position-relative">
                  <div>
                    <div className="d-flex  align-items-center justify-content-center">
                      <img src="assets/images/index/testi2.jpg" alt="img" className="prof-img-2" />
                    </div>
                    <div>
                      <img src="assets/images/slider/Comma.png" alt="img" className="prof-img-1" />
                    </div>
                    <p className="text-center testi p-f-s">MenhCoding has been instrumental in enhancing our cloud infrastructure through his skills in AWS and Docker. Their work has helped greatly in making our deployment process more efficient and reliable. However, the high-quality work from both of them including attentiveness and dedication cannot be faulted.</p>
                    <div className="prof-star pt-2 pb-2 text-center">
                      <span className="stars text-lg-start">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <h5 className="text-center">Michael B</h5>
                    <p className="text-center testi pt-2 pb-5 p-f-s">CTO at NetCloud</p>
                  </div>
                </div>
              </div>
              <button className="slider-btn slider-btn-right">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ###########################################################################################
###########################################################################################
################################################################################################ */}




      <section className="news-cards">
        <div className="container">
          <h2 className="text-center">OUR WORK PROJECTS</h2>
          <p className="text-center news-p">Here is a Handful of our Projects that are Among the Greatest that Confirm our commitment to introducing visually impacting Web Solutions</p>
          <div className="row d-flex gap-md-0 gap-sm-5 gap-4">
            <Slider {...settings}>
              <div className="col-lg-4 col-md-4 d-flex" data-aos="flip-right">
                <div className="card news-card-back">
                  <img src="assets/images/index/prj1.jpg" alt="card-img" />
                  <div className="card-body">
                    <h5>Companies management</h5>
                    <p className="card-text p-f-s">Live demo A powerful and flexible dashboard for Laravel that is designed to be beautiful, elegant​. It provides role-based access control which means user experiences personalized for super-admins, admins, managers, partners so they can safely and effectively work.</p>
                  </div>
                  <hr className="dotted-line" />
                  <div className="card-viewer">
                    <span className="githubLink">Github Link</span>
                    <span>#Php</span>
                    &nbsp;
                    &nbsp;
                    <span>#Laravel</span>
                    &nbsp;
                    &nbsp;
                    <span>#MySql</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 d-flex" data-aos="flip-right">
                <div className="card news-card-back">
                  <img src="assets/images/index/prj3.jpg" alt="card-img" />
                  <div className="card-body">
                    <h5>NorthStar store</h5>
                    <p className="card-text p-f-s">Welcome to NorthStar Fashion Store: A One-Stop Bizz Broker for the Modern Buyer. Powered by the latest in web technology, this exquisite, user-friendly online store ensures a rewarding experience for customers from browsing to purchase.</p>
                  </div>
                  <hr className="dotted-line" />
                  <div className="card-viewer">
                    <span className="githubLink">Github Link</span>
                    <span>#Next.js</span>
                    &nbsp;
                    &nbsp;
                    <span>#Mongodb</span>
                    &nbsp;
                    &nbsp;
                    <span>#Tailwind</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 d-flex" data-aos="flip-right">
                <div className="card news-card-back">
                  <img src="assets/images/index/prj4.jpg" alt="card-img" />
                  <div className="card-body">
                    <h5>NFT Hub</h5>
                    <p className="card-text p-f-s">Enter the NFT world of tomorrow, be part of our new and amazing platform for all that are into NFT. CapBids fuses cutting edge design with robust functionality to give you an experience like no other, whether you're a buyer, seller, or just looking around!</p>
                  </div>
                  <hr className="dotted-line" />
                  <div className="card-viewer">
                    <span className="githubLink">Github Link</span>
                    <span>#React</span>
                    &nbsp;
                    &nbsp;
                    <span>#Tailwind</span>
                    &nbsp;
                    &nbsp;
                    <span>#Aos</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 d-flex" data-aos="flip-right">
                <div className="card news-card-back">
                  <img src="assets/images/index/prj5.jpg" alt="card-img" />
                  <div className="card-body">
                    <h5>Furniture store</h5>
                    <p className="card-text p-f-s">Discover an exciting world of affordable exotic home decor with this chic e-commerce site. We can buy the perfect products for our homes very quickly, with a site optimized for commerce that makes it easy to find those right things to enhance your life.</p>
                  </div>
                  <hr className="dotted-line" />
                  <div className="card-viewer">
                    <span className="githubLink">Github Link</span>
                    <span>#Laravel</span>
                    &nbsp;
                    &nbsp;
                    <span>#Php</span>
                    &nbsp;
                    &nbsp;
                    <span>#Mysql</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>




      {/* ###########################################################################################
          ###########################################################################################
          ########################################################################################### */}





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




      <div className="footer container">
        <footer className="position-relative">
          <h4 className="text-center">SUBSCRIBE OUR NEWSLETTER</h4>
          <p className="text-center latest pt-2 pb-3">Get latest News and Updates</p>

          <form className="d-flex flex-column flex-sm-row align-items-center justify-content-center" id="footer-sub2" onSubmit={handleNewletterSubmit}>
            <div id="Succes-box2">{message && <p>{message}</p>}</div>

            <div className="d-flex footer-search justify-content-center ">
              <input
                type="email"
                name="email"
                className=" me-2"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-hover1 ">Subscribe</button>
            </div>
          </form>


          <div className="footer-logo text-center pb-lg-4 pb-md-3 pb-sm-2 pb-4">

          </div>
          <ul className=" d-flex align-items-center justify-content-center text-center">
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
        {showBackToTop && (
          <div
            className="back-to-top"
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
              zIndex: 1000, // Ensures it stays on top
            }}
          >
            <button
              onClick={scrollToTop}
              id="backToTopBtn"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "10px 15px",
                border: "none",
                borderRadius: "50%", // Optional, to make it round
                cursor: "pointer",
                display: showBackToTop ? "block" : "none",
              }}
            >
              <i className="fa-solid fa-arrow-turn-up"></i>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
