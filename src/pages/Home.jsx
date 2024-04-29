import React, { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import { MdKeyboardArrowRight } from "react-icons/md";

import compress from "../media/compress.png";
import compress02 from "../media/ForHomepage/compress 02.png";
import feature1 from "../media/ForHomepage/features 01.jpg";
import feature2 from "../media/ForHomepage/features 02.jpg";
import feature3 from "../media/ForHomepage/features 03.jpg";
import feature4 from "../media/ForHomepage/features 04.jpg";


import "../style/Home.css";
import ImageUpload from "./ImageUpload";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/userSlice";

const Home = () => {

    const navigate = useNavigate();
	const { user, isAuthenticated } = useSelector(selectUser);

	useEffect(() => {
		if (!isAuthenticated) {
			navigate("/");
		}else{
            navigate("/compress")
        }
	}, [isAuthenticated]);

	return (
		<section id='homePage'>
			<div className='container'>
				<h1>
					Now Compress Your Image Easlily with Save features for the Future use
				</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
					perferendis, pariatur minima expedita aliquam consectetur mollitia
					deserunt eos voluptates nesciunt ut odit reprehenderit et placeat
					consequatur, vel vero dolore iusto adipisci voluptas, repellendus
					illum error officia amet? Debitis dolorem amet voluptate eius
					praesentium quasi facere!
				</p>
				<Link to='/compress' className='btn'>
					Get Started <MdKeyboardArrowRight className='iconStyle' />
				</Link>

				{/* <ImageUpload /> */}
			</div>
			<img src={compress} alt='compress' />
		</section>
	);
};

export default Home;
