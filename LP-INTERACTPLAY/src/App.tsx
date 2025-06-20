import "./App.css";
import Header from "./components/Header";
import Highlights from "./components/Sections/Highlights";
import Home from "./components/Sections/Home";
import Testimony from "./components/Sections/Testimony";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Highlights />
      <Testimony />
    </>
  );
}

export default App;
