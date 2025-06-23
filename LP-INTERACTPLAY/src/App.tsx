import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Sections/Contact";
import Highlights from "./components/Sections/Highlights";
import Home from "./components/Sections/Home";
import Testimony from "./components/Sections/Testimony";
import Footer from "./components/Sections/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Highlights />
      <Testimony />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
