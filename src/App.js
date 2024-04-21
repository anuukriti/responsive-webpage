import "./App.css";
import React from "react";

import Slide1 from "./components/pages/Slide1";
import Slide2 from "./components/pages/Slide2";
import Slide3 from "./components/pages/Slide3";
import Slide4 from "./components/pages/Slide4";
import Slide5 from "./components/pages/Slide5";
import Slide6 from "./components/pages/Slide6";
import Slide7 from "./components/pages/Slide7";
import Slide8 from "./components/pages/Slide8";
import Slide9 from "./components/pages/Slide9";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Slide1 />
            <Slide2 />
            <Slide3 />
            <Slide4 />
            <Slide5 />
            <Slide6 />
            <Slide7 />
            <Slide8 />
            <Slide9 />
            <Footer />
        </div>
    );
}

export default App;
