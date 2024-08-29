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
      <section class="hero">
        <div class="container">
          <div class="row text-md-start text-sm-center text-center gap-md-0 gap-sm-4 gap-5">
            <div data-aos="fade-up" class="col-md-6 d-flex align-items-md-start align-items-ms-center align-items-center justify-content-center flex-column">
              <div class="spotlight-container">
                <div class="spotlight"></div>

                <h1>Hi, I am MenhCoding</h1>
              </div>
              <p>I am a Software Developer with over 6 years of experience in converting conceptual ideas into interactive and useful software applications and products. I enjoy writing articles and tutorials on coding.</p>
              <a class="btn-hover1" href="#">Get In Touch</a>
              {/* <a class="btn-hover1" href="#">View Resume</a> */}
            </div>
            <div data-aos="fade-down" class="col-md-6 position-relative d-flex flex-column justify-content-center align-items-center mt-md-0 mt-sm-5 mt-4">
              <img src="assets/images/index/hero.png" alt="hero_img1" class="moving" />
              <img src="assets/images/index/hero_watch.png" alt="hero_img2" />
              <img src="assets/images/icon/hero_star.png" alt="hero_icon" />
            </div>
          </div>
        </div>
      </section>



      {/* //////////////////////////////////////////// */}

      <section className="about">
        <div className="container">
          <div className="row text-md-start text-sm-center text-center">
            <div className="col-md-6 d-flex justify-content-between">
              <div className="ab_card1" data-aos="flip-left">
                <h3>About</h3>
                <p className="p-f-s">They should hire me because I have developed software applications for more than 6 years
                  and I can bring ideas into life. Apart from my development work,
                  I am a passionate content creator who writes and creates content regarding coding to educate as well as motivate other people . Based on my experience in WordPress,
                  I have skills in designing and developing easy to navigate website solutions.
                  The love for the innovation and the dedication to do things to the best of the abilities,
                  makes me strive to improve my skills and contribute to the tech society.</p>
                <div
                  className="d-flex align-items-center justify-content-lg-start justify-content-md-center justify-content-center">
                  <a className="btn-hover1" href="about.html">Learn More</a>
                  <div className="abut-video">
                    <div className="video-play-button" href="#">
                      <span className="fa-solid fa-play"></span>
                    </div>

                  </div>
                  <div className="p-f-s w-v">Watch Video</div>
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
        <div className="container">
          <h2 className="text-center">OUR SERVICES</h2>
          <p className="core-p">Tailored Tech Solutions to Drive Your Success</p>
          <div className="row d-flex gap-md-0 gap-sm-5 gap-5">
            <div className="col-lg-4 col-md-4 d-flex flex-column gap-3 justify-content-center" data-aos="fade-up">
              <div className="core-card">
                <h5>Full-Stack Web Development</h5>
                <p>General web solutions that include both the client-side and server-side programming aspects. Familiar with tools like Php, Laravel, React, Next.js, Node.js, and express.js to develop highly scalable and efficient web applications.</p>
              </div>
              <div className="core-card">
                <h5>UI & UX Design</h5>
                <p>Designing informative and aesthetic interfaces. Focused on designing a better experience for the user through creating designs that improve the ease of use and satisfaction, using such tools as Figma, Sketch, Adobe XD.</p>
              </div>
              <div className="core-card">
                <h5>Content Management Systems (CMS) Customization</h5>
                <p>Technical skills in different CMS platforms including the WordPress. Specialising in everything ranging from complex custom themes to plugins, to ensure content management and interesting front ends.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 d-flex justify-content-center align-items-center" data-aos="zoom-in">
              <figure><img src="assets/images/index/servicesImg.png" alt="img" className="moving" /></figure>
            </div>
            <div className="col-lg-4 col-md-4 d-flex flex-column gap-3 justify-content-center" data-aos="fade-down">
              <div className="core-card1">
                <h5>E-commerce Solutions</h5>
                <p>Designing and enhancing the e-commerce stores using WooCommerce, Concentrating its efforts on stable, safe, and customer friendly online stores that positively influence sales.</p>
              </div>
              <div className="core-card1">
                <h5>Custom Template Design for Websites and E-books</h5>
                <p>Designing unique templates that would be specific to your company and needs. Whether it is in website designs, e-books, or guide books, giving designs that are aesthetic as well as highly functional and easy to understand.</p>
              </div>
              <div className="core-card1">
                <h5>SEO & Digital Marketing Services</h5>
                <p>Organizing the website so that it has the best possible ranking on the search engines to attract organic traffic. Also, providing services in digital marketing which encompass social media management, email marketing to boost online presence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="ispsum-logo">
        <div className="container">
          <h2 className="text-center">RELEVANT SKILLS</h2>
          <p className="core-p">I’ve had the opportunity to work with a diverse array of technologies that have allowed me to expand my skill set and tackle a variety of challenges</p>
          <div className="logo_ispsum_slider">
            <a href="#">
              <figure><img src="assets/images/index/html.png" alt="img" /></figure>
            </a>
            <a href="#">
              <figure><img src="assets/images/index/css.png" alt="img" /></figure>
            </a>
            <a href="#">
              <figure><img src="assets/images/index/javascript.png" alt="img" /></figure>
            </a>
            <a href="#">
              <figure><img src="assets/images/index/typescript.png" alt="img" /></figure>
            </a>
            <a href="#">
              <figure><img src="assets/images/index/tailwind.png" alt="img" /></figure>
            </a>
            <a href="#">
              <figure><img src="assets/images/index/bootstrap.png" alt="img" /></figure>
            </a>
            <a href="#">
              <figure><img src="assets/images/index/reactjs.png" alt="img" /></figure>
            </a>
            <a href="#">
              <figure><img src="assets/images/index/redux.png" alt="img" /></figure>
            </a>
            <a href="#">
              <figure><img src="assets/images/index/next-js.png" alt="img" /></figure>
            </a>

            <a href="#">
              <figure><img src="assets/images/index/php.png" alt="img" /></figure>
            </a>
            <a href="#">
              <figure><img src="assets/images/index/laravel.png" alt="img" /></figure>
            </a>
            <a href="#">
              <figure><img src="assets/images/index/nodejs.png" alt="img" /></figure>
            </a>
            <a href="#">
              <figure><img src="assets/images/index/docker.png" alt="img" /></figure>
            </a>
            <a href="#">
              <figure><img src="assets/images/index/figma.png" alt="img" /></figure>
            </a>
            <a href="#">
              <figure><img src="assets/images/index/git.png" alt="img" /></figure>
            </a>
            <a href="#">
              <figure><img src="assets/images/index/mongodb.png" alt="img" /></figure>
            </a>
            <a href="#">
              <figure><img src="assets/images/index/mysql.png" alt="img" /></figure>
            </a>
          </div>
        </div>
      </div>




      <section className="pricing pricing-b-g">

        <div className="container">
          <h2 className="text-sm-center text-center">WORK EXPERIENCE</h2>


          <div className="row ">
            <div className="col-lg-6 col-md-6 align-items-center justify-content-center pricing-bg" data-aos="fade-up">

              <div >
                <figure><img src="assets/images/index/workE.jpg" alt="pric-img1" className="moving" /></figure>
                <figure><img src="assets/images/icon/hero_star.png" alt="pric-img2" /></figure>
              </div>

              <div >
                <figure><img src="assets/images/index/workE4.jpg" width="88%" alt="pric-img3" className="moving" /></figure>
                <figure><img src="assets/images/icon/hero_star.png" alt="pric-img4" /></figure>
              </div>

            </div>
            <div className="col-lg-6 col-md-6 mt-md-0 mt-sm-5 mt-5" data-aos="fade-down">

              <div className="pric-list">
                <h6>Php Laravel Developer</h6>
                <div className='d-flex'>
                  <div className="mt-1 "><img width="60%" src='/assets/images/index/points.png' /></div>
                  <p>Arymaid</p>
                </div>
                <div className="d-flex">
                  <div className="d-flex justify-content-between gap-1">
                    <p className="p-f-s">While working at Arymaid, I created endurant and expandable web applications using the Laravel framework.
                      Some of the things I was supposed to do were: Developing, coding,
                      and maintaining clean, reusable, and sustainable PHP code. Here, I specialized in building e-commerce platforms using Laravel, which enabled me to develop fast and customer-friendly online shops.</p>
                  </div>

                </div>
                <h5 className='text-sm-end'>Oct 2022 - Juin 2023</h5>

              </div>
              <div className="pric-list second">
                <h6>Full Stack Developer</h6>
                <div className='d-flex'>
                  <div className="mt-1 "><img width="60%" src='/assets/images/index/points.png' /></div>
                  <p>Fiduciaire Brighten</p>
                </div>

                <div className="d-flex justify-content-between">
                  <div className="d-flex justify-content-between">
                    <p className="p-f-s">As an employee of Fiduciaire Brighten, the project that was of most interest to me developed Company system Management Dashboard .
                      I was also able to be involved in the front end and back end of the developments and implement both as well as work with technologies and frames.
                      From this area, I successfully collaborated with other cross-functional teams,
                      thus ensuring the development of timely and high-quality products that met business and user requirements.
                    </p>
                  </div>
                </div>
                <h5 className='text-sm-end'> Oct 2023 - Mar 2024</h5>

              </div>
              <div className="pric-list">
                <h6>Software Developer</h6>
                <div className='d-flex'>
                  <div className="mt-1 "><img width="60%" src='/assets/images/index/points.png' /></div>
                  <p>Freelance</p>
                </div>

                <div className="d-flex">

                  <div className="d-flex justify-content-between gap-1">
                    <p className="p-f-s">In the capacity of Freelance Software Developer, I provided my services in developing software applications to meet clients’ requirements.
                      This made my work cut across almost all the phases of software development including requirement analysis, system design, coding, testing, and implementation.
                      As an experienced software developer, I applied my skills in multiple programming languages and frameworks to develop,
                      support and improve various applications.</p>
                  </div>
                </div>
                <h5 className='text-sm-end'> Nov 2023 - Present</h5>

              </div>
              <div className="pric-list second">
                <h6>WordPress Developer</h6>
                <div className='d-flex'>
                  <div className="mt-1 "><img width="60%" src='/assets/images/index/points.png' /></div>
                  <p>Freelance</p>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex justify-content-between">
                    <p className="p-f-s">Through out my Freelance WordPress Developer career, my primary focus has been designing and developing WordPress sites for my clients.
                      My responsibilities included creating new themes and plugins from scratch,
                      It was important to keep up with the new trends and technologies to be able to fulfill my duties in this position.</p>
                  </div>
                </div>
                <h5 className='text-sm-end'> Jan 2024 - Present</h5>

              </div>
              <div className="pric-list ">
                <h6>E-books Creator</h6>
                <div className='d-flex'>
                  <div className="mt-1 "><img width="60%" src='/assets/images/index/points.png' /></div>
                  <p>Freelance</p>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex justify-content-between">
                    <p className="p-f-s">I create engaging and informative e-books on fitness, business guides, and more.
                      My work involves content writing, research,
                      and designing visually appealing layouts to provide valuable and practical information to readers.
                    </p>

                  </div>
                </div>
                <h5 className='text-sm-end'> Feb 2024 - Present</h5>

              </div>
              <div className="text-md-start text-sm-center text-center pt-lg-4 pt-md-2 pt-sm-0 pt-1">
                <a className="btn-hover1" href="#">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="profaessional">
        <div className="container">
          <h2 className="text-center">Testimonials</h2>
          <p className="text-center pt-3 pb-5 mb-2">Innovative Solutions through Advanced Technologies and Collaborative Expertise</p>
          <div className="prof-size" data-aos="zoom-in-up">
            <div className="prof-slider ">
              <div className="prof-slide position-relative">
                <div>
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="assets/images/index/testimo1.jpg" alt="img" className="prof-img-2" />
                  </div>
                  <div>
                    <img src="assets/images/slider/Comma.png" alt="img" className="prof-img-1" />
                  </div>
                  <p className="text-center p-f-s">Working with MenhCoding has been a game-changer for our projects. Their expertise in Python and web development, especially with Django and React, has significantly improved our application performance and user experience. Their ability to tackle complex problems and provide innovative solutions is truly impressive</p>
                  <div className="prof-star pt-2 pb-2 text-center">
                    <span className="stars text-lg-start">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </div>
                  <h5 className="text-center">John Doe</h5>
                  <p className="text-center pt-2 pb-5 p-f-s">Project Manager at TechCor</p>
                </div>
              </div>
              <div className="prof-slide position-relative">
                <div>
                  <div className="d-flex  align-items-center justify-content-center">
                    <img src="assets/images/index/testimo2.jpg" alt="img" className="prof-img-2" />
                  </div>
                  <div>
                    <img src="assets/images/slider/Comma.png" alt="img" className="prof-img-1" />
                  </div>
                  <p className="text-center p-f-s">I have had the pleasure of collaborating with MenhCoding on several machine learning projects. Their proficiency with TensorFlow and Keras, combined with their deep understanding of data science, has been instrumental in achieving our project goals. They are a team player who is always willing to share knowledge and help others</p>
                  <div className="prof-star pt-2 pb-2 text-center">
                    <span className="stars text-lg-start">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </div>
                  <h5 className="text-center">Emily Johnson
                  </h5>
                  <p className="text-center pt-2 pb-5 p-f-s">Senior Developer at InnovateX</p>
                </div>
              </div>
              <div className="prof-slide position-relative">
                <div>
                  <div className="d-flex  align-items-center justify-content-center">
                    <img src="assets/images/index/testimo3.jpg" alt="img" className="prof-img-2" />
                  </div>
                  <div>
                    <img src="assets/images/slider/Comma.png" alt="img" className="prof-img-1" />
                  </div>
                  <p className="text-center p-f-s">MenhCoding's skills in AWS and Docker have greatly benefited our DevOps practices. Their knowledge in setting up scalable and secure cloud infrastructure has streamlined our deployment process, making it more efficient and reliable. Their dedication and attention to detail are commendable</p>
                  <div className="prof-star pt-2 pb-2 text-center">
                    <span className="stars text-lg-start">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </div>
                  <h5 className="text-center">Michael Brown
                  </h5>
                  <p className="text-center pt-2 pb-5 p-f-s">CTO at CloudNet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ###########################################################################################
###########################################################################################
################################################################################################ */}

      <section className="news-cards">
        <div className="container">
          <h2 className="text-center">MY WORK PROJECTS</h2>
          <p className="text-center news-p">Here are Some of the Selected projects that Showcase my Passion for Full Stack development.</p>
          <div className="row d-flex gap-md-0 gap-sm-5 gap-4">
            <Slider {...settings}>
              <div className="col-lg-4 col-md-4 d-flex" data-aos="flip-right">
                <div className="card news-card-back">
                  <img src="assets/images/index/prj1.jpg" alt="card-img" />
                  <div className="card-body">
                    <h5>Companies management</h5>
                    <p className="card-text p-f-s">Developed a responsive Laravel-based dashboard featuring CRUD functionality for company details. Implemented role-based access control, ensuring tailored user experiences for super-admins, admins, managers, and partners.</p>
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
                    <h5>NorthStar store </h5>
                    <p className="card-text p-f-s">Welcome to the NorthStar Fashion Store, a sleek and modern e-commerce platform designed to provide a seamless shopping experience. Built using the latest web technologies</p>
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
                    <p className="card-text p-f-s">NFT Hub, a cutting-edge platform designed for NFT enthusiasts to discover, buy, and sell digital assets effortlessly. This website combines a sleek design with advanced functionality to deliver an exceptional user experience.
                    </p>
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
                    <p className="card-text p-f-s">Your ultimate destination for stylish and affordable home furnishings.
                      This e-commerce platform offers a shopping experience,
                      making it easy for customers to find and purchase the perfect pieces for their homes.
                    </p>
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
################################################################################################ */}












      <div className="container">
        <div className="contact-hero">
          <h2 className="text-center">CONTACT US</h2>
          <p className="text-center">We would Love to Hear about your Project and How I can Help. Please fill in the Form,
            and I’ll get Back To you as Soon as Possible.</p>
        </div>
        <section class="d-flex justify-content-center">
          <div class="help position-relative">
            <div class="container">
              <div class="row d-flex gap-lg-5 gap-md-3 gap-sm-4 gap-3 justify-content-center">
                <div class="col-lg-5 col-md-5 help-crd1" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                  <h4>HOW CAN WE HELP?</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. assumenda eligendi debitis sunt sequi tempora corporis, sed id animi eveniet.</p>
                  <div class="d-flex gap-4 align-items-center">
                    <i class="fa-solid fa-house"></i>
                    <span>Plaza X, XY Floor, XYZ Street</span>
                  </div>
                  <div class="d-flex gap-4 align-items-center">
                    <i class="fa-solid fa-phone"></i>
                    <span>+123-456-7890</span>
                  </div>
                  <div class="d-flex gap-4 align-items-center">
                    <i class="fa-solid fa-envelope"></i>
                    <span>yourname@email.com</span>
                  </div>
                  <h5>OPERATING HOURS</h5>
                  <div class="d-flex gap-4 align-items-center">
                    <i class="fa-solid fa-clock"></i>
                    <span>Monday To Friday <br /> 8:00am to 8:00pm AEDT</span>
                  </div>
                </div>

                <div class="col-lg-5 col-md-5 contact-email" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                  <h4>EMAIL US</h4>
                  <form action="action_page.php" id="footer-sub">
                    <div class="row justify-content-center gap-3">
                      <input type="text" name="name" id="name" class="col-md-5 col-sm-12 col-12" placeholder="Your Name" required />
                      <input type="text" name="email" id="email" class="col-md-5 col-sm-12 col-12" placeholder="Email Address" required />
                      <input type="text" name="number" id="number" class="col-md-5 col-sm-12 col-12" placeholder="Phone Number" required />
                      <input type="text" name="subject" id="subject" class="col-md-5 col-sm-12 col-12" placeholder="Subject" required />
                      <textarea class="col-md-11 col-12" name="massage" id="massage" cols="30" rows="5" placeholder="Write here message"></textarea>
                    </div>
                    <div class="d-flex justify-content-center mt-4">
                      <button class=" e-btn btn-hover1" type="submit">Submit</button>
                    </div>
                  </form>
                </div>
                <div id="Succes-box"></div>
              </div>
            </div>
          </div>
        </section>
      </div>










      <div className="container">
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
            <div className="col-lg-3 col-md-3 d-flex align-items-center justify-content-md-start justify-content-sm-center justify-content-center">
              <div
                className="social-icon d-flex gap-2 justify-content-md-start justify-content-sm-center justify-content-center">
                <a href="#"> <i className="fa-brands fa-facebook-f foot-facebook"></i></a>
                <a href="#"> <i className="fa-brands fa-twitter"></i></a>
                <a href="#"> <i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
              <div className=" d-flex gap-3 p-2">
                <a href="#">Terms & Condition</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>

          </div>
          <hr />
          <div className="Copyright d-flex justify-content-between flex-wrap dir">
            <p>Copyright © 2024 MenhCoding All Right Reserved.</p>
          </div>

        </footer>
      </div>
      <button onClick="scrollToTop()" id="backToTopBtn"><i className="fa-solid fa-arrow-turn-up"></i></button>
    </main>
  );
}
