import React from 'react';
import Tilt from 'react-tilt';
import "./Logo.css";


const Logo = () => {
	return(
			<div className="ma4 mt3">
				<Tilt className="Tilt br2 shadow-2" options={{ max : 40, speed: 300 }} style={{ height: 80, width: 80 }} >
				 <div className="Tilt-inner"> <img alt="logo" src="https://static.thenounproject.com/png/928325-200.png"/> </div>
				</Tilt>
			</div>
		)
}

export default Logo;