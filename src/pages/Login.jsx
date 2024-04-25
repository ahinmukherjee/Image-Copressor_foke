//import React from 'react'
import { GoogleLogin } from "@react-oauth/google";
import login from "../media/login.png";
import google from "../media/google.png";
import "../style/login.css";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { register, selectUser } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [profilePic, setProfilePic] = useState("");
	const dispatch = useDispatch();

	const { isAuthenticated } = useSelector(selectUser);
	const navigate = useNavigate()

	useEffect(() => {
		if (isAuthenticated) {
            navigate('/')
        }
		console.log(profilePic);
	}, [isAuthenticated, profilePic]);

	const handleRegister = () => {
		console.log("log");
		dispatch(register({ name, email, profilePic }));
	};

	const handleSignup = (credentialResponse) => {
		let decoded = jwtDecode(credentialResponse.credential);
		let name2 = decoded.given_name + " " + decoded.family_name;

		setName(name2);
		setEmail(decoded.email);
		setProfilePic(decoded.picture);
		register();

		handleRegister();
		console.log();
	};

	return (
		<>
			<div className='login_page'>
				<div className='login_img'>
					<div className='img' id='googlelogin'>
						<div className='login'>
							<h2>Quick Compressor </h2>
							<p>Compress your image quickly </p>
							<GoogleLogin
								className='button'
								onSuccess={handleSignup}
								onError={() => {
									console.log("Login Failed");
								}}
							/>
						</div>
					</div>
					<div className='img' id='benifit'>
						<div className="div">
						<h3>you will get the following benefits if you login</h3>
						<p>First you will see all the compresed images in album from</p>
						
						</div>
						
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
