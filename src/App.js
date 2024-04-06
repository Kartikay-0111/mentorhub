// import { Mentorcard } from "./components/mentorcard/mentorcard";
// import About from './components/aboutus/about';
// import Landing from "./components/landing page/landing";
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import FeaturesSection from "./components/whatwedo/whatwedo";
import  Accordion  from "./components/faq";

function App() {
  return (
    <div className="App">
      {/* <div className="flex flex-col">
      <div><Landing /></div>
      <div><Mentorcard /></div>
      <div><FeaturesSection /></div>
      <div><About /></div> */}
      <Accordion />
     </div>
    // </div>
  );
}

export default App;
