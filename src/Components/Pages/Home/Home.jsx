import { useState, useEffect } from "react";
import Footer from "../../Footer/Footer";
import Banner from "../../Header/Banner";
import ToggleButton from 'react-toggle-button';
import OurStory from "../OurStory/OurStory";
import Testimonial from "../OurStory/Testimonial";
import Brands from "./Brands/Brands";

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const savedTheme = localStorage.getItem("darkMode");
        if (savedTheme !== null) {
            setDarkMode(savedTheme === "true");
        }
    }, []);

    const updateTheme = (isDark) => {
        localStorage.setItem("darkMode", isDark);
        setDarkMode(isDark);
    };

    return (
        <div className={`page-container ${darkMode ? "bg-[#1f2023] text-[#ffffff]" : "light-theme"}`}>
            <div className="flex gap-2 mb-2">
                <h3 className="text-xl font-medium">Light or Dark</h3>
                <ToggleButton
                    inactiveLabel={"Light"}
                    activeLabel={"Dark"}
                    value={darkMode}
                    onToggle={() => updateTheme(!darkMode)}
                />
            </div>
            <Banner></Banner>
            <Brands></Brands>
            <OurStory></OurStory>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;
