import { Mentorcard } from "./components/mentorcard/mentorcard";
// import About from './components/aboutus/about';
// import Landing from "./components/landing page/landing";
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import SignUpApp from "./components/sign up/signup";
function App() {
  return (
    <div style={{display:"flex",flexDirection:"column"}} className="App">
{/* <Landing /> */}
<Mentorcard />
{/* <About /> */}
    </div>
  );
}

export default App;
