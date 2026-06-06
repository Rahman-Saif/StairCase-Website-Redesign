import AboutPage from "@/components/AboutPage";
import Navbar from "@/components/Navbar";
import React from "react";

const About = () => { 
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <AboutPage />
        </div>
    );
}  

export default About;