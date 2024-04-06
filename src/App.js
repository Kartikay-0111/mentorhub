
import Landing from "./components/landing page/landing";
import About from "./components/aboutus/about";
import { Mentorcard } from "./components/mentorcard/mentorcard";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SignUpApp from "./components/sign up/signup";
import loginApp from "./components/login/login";
function App() {
  const comp = useRef(null);

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

  return (
    <div className="App">
    </div>
  );
}
export default App;
