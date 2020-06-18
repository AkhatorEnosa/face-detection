import React from 'react';
import './Image.css';


const Image = ({ imageUrl, box }) => {
	return(
			<div className="center">
				<div className="absolute mt3 mb5">
					<img id="input-image" width = "500px" height = "auto" alt="" src={imageUrl}/>
					<div className = "bounding-box" style= {{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
				</div>
			</div>
		)
}

export default Image; 