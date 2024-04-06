import React, { useState } from "react";
import "../style/compress.css";

import bird from "../media/bird.png";

import { MdKeyboardArrowRight } from "react-icons/md";



import blackcar from "../media/blackcar.png";
import boat from "../media/boat.png";
import car from "../media/car.png";
import cars from "../media/cars.png";
import cottage from "../media/cottage.png";
import kingfisher from "../media/kingfisher.png";
import kingfishers from "../media/kingfishers.png";
import mountain from "../media/mountain.png";
import nature from "../media/natuer.png";
import raceingcar from "../media/raceingcar.png";
import redcar from "../media/redcar.png";
import river from "../media/river.png";
import tajmohol from "../media/tajmohol.png";
import tajsmoon from "../media/tajsmoon.png";
import whitecar from "../media/whitecar.png";


const Compress = () => {
    // const [first, setfirst] = useState(50);

    // let input = document.querySelector("input");
    // console.log(input.value);

    return (
       <>
        <div className="com_contaner">
            <div className="com_process"> 
                <img src ={bird} alt = "bird"/>
            </div>
            <div className="com_process">
              <img src ={bird} alt = "bird"/> 
            </div>

            <MdKeyboardArrowRight className="icon" />

            <div className="com_idication">
                <div className="indication" id="#before"> Before</div>
                <div className="indication" id="#after"> After </div>
            </div>

            <input
                type="range"
                className="rangeSlider"
                // value={first}
                // onChange={setfirst((e) => e.terget.value)}
            />
            <button> Compress image </button>  
        </div>

       <div className="box_body">
            <p id="your_image">Your images</p>
             <p id = "show_all"> show all...</p> 
        </div>

        
     <div className="box_img">
          <div className="image">
                <img src ={blackcar}/> 
                <img src ={boat}/> 
                <img src ={kingfisher}/> 
                <img src ={car}/> 
                <img src ={cars}/> 
                <img src ={cottage}/> 
                <img src ={mountain}/> 
                <img src ={nature}/> 
                <img src ={kingfishers}/> 
                <img src ={raceingcar}/> 
                <img src ={redcar}/>
                <img src ={tajsmoon}/> 
                <img src ={river}/> 
                <img src ={tajmohol}/>       
                <img src ={whitecar}/> 
             </div>    
        
        </div>

       </>
    );
};

export default Compress;
