import React from "react";
import './socials.css';

const Socials = () => {

    return (
        <div className="socials flex justify-evenly items-center">
            <img src="image/instagram.jpeg" alt="" className="h-4/5 rounded-3xl"/>
            <span className="text-white w-32 mr-44 font-semibold text-pretty text-7xl">
                Our Instagram and LinkedIn Pages
            </span>
            <img src="image/linkedin.jpeg" alt="" className="h-4/5 rounded-3xl"/>
        </div>
    );
}

export default Socials;