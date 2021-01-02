import './App.css';

import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Overviews from "./components/Overviews";
import Contact from "./components/Contact";



function App() {
  return (
    <>
        <HomePage />
        <Overviews />
        <Contact />
      <Footer />
    </>
  );
}

export default App;
