import React from 'react';
import "./Form.css";


const Form = ({ onInputChange,onPictureSubmit }) => {
	return(
			<div>
				<p className="f3"> {'This application detects faces in a photo. Give it a try!!!'} </p>
				<div className = "form w-40 center pa3 shadow-2">
					<input type="text" className="bg-white-50 w-100 text" onChange = {onInputChange}/>
					<button className="detect grow" onClick = {onPictureSubmit}>Detect</button>
				</div>
			</div>
		)
}

export default Form;