import React from 'react';
import "./Navigation.css";

const Navigation = ({ onRouteChange }) => {
	return(
			<div>
				<p onClick = {()=> onRouteChange('signout')} className="underline sign-in link white hover-black f6 mr4 pointer">
					{'Sign Out'}
				</p>
			</div>
		)
}

export default Navigation;