import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Landing from "./components/landing page/landing";
import About from "./components/aboutus/about";
import { Mentorcard } from "./components/mentorcard/mentorcard";
import FeaturesSection from "./components/whatwedo/whatwedo";
import LoginApp from './components/login/login';
import Review from "./components/review/review";
import SignUpApp from "./components/sign up/signup";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

function App() {
  const comp = useRef(null);


  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const [showSignup, setShowSignup] = useState(false);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".main", {
        opacity: 0,
        xPercent: "-100",
        duration: 1.2,
        delay: 0.3,
      });
      gsap.from(".navbar", {
        yPercent: "-100",
        duration: 1.2,
        delay: 1.5,
      });
      gsap.from(".content1", {
        display: "none",
        y: "-15",
        duration: 0.7,
        delay: 1.4,
        repeat: -1,
        yoyo: true,
      });
      gsap.from(".content2", {
        display: "none",
        xPercent: "-50",
        duration: 1.5,
        delay: 1.4,
      });
      gsap.from(".content3", {
        display: "none",
        xPercent: "50",
        duration: 1.5,
        delay: 1.4,
      });
      gsap.from(".search", {
        yPercent: "1000",
        duration: 1.5,
        delay: 1.4,
      });
      gsap.from(".svg", {
        opacity: 0,
        duration: 1,
        delay: 1.4,
      });
      gsap.from("#scroll", {
        display: "none",
        y: "-10",
        duration: 0.4,
        delay: 1.4,
        repeat: -1,
        yoyo: true,
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const mentorRef = useRef(null);
  const scrollToMentor = () => {
    mentorRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const reviewRef = useRef(null);
  const scrollToReview = () => {
    reviewRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const homeRef = useRef(null);
  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App" ref={comp}>
      {!(showSignup || showLogin) && <div className="grid">
        <div ref={homeRef}>
          <Landing toggleSignup={toggleSignup} toggleLogin={toggleLogin} scrollToHome={scrollToHome} scrollToReview={scrollToReview} scrollToMentor={scrollToMentor} scrollToAbout={scrollToAbout} />
        </div>

        <div ref={aboutRef} >
          <About />
        </div>
        <div >
          <FeaturesSection />
        </div>
        <div ref={mentorRef}>
          <Mentorcard />
        </div>
        <div ref={reviewRef}>
          <Review />
        </div>
      </div>
      }
      {showLogin && <LoginApp toggleLogin={toggleLogin} />}
      {showSignup && <SignUpApp toggleSignup={toggleSignup} />}
    </div>
  );
}
export default App;
