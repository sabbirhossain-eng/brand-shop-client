import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import ToggleButton from 'react-toggle-button';
import { useEffect, useState } from "react";



const Root = () => {
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
        <div className="md:px-20 mx-auto">
            <div className="my-4 mb-4">
                <Navbar></Navbar>
            </div>
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
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Root;