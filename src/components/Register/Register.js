import React from 'react';
// import "./Signin.css";


const Signin = ({ onRouteChange }) => {
	return(
		<article class="w-30 center bg-white-50 br3 pa3 pa3-ns mt6 ba b--black-10">
			<main className="pa2 w-100">
			  <form className="measure">
			    <fieldset id="register" className="ba b--transparent">
			      <legend className="f3 fw6">Register</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" for="name">Name</label>
			        <input className="text w-100" type="name" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
			        <input className="text w-100" type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="password">Password</label>
			        <input className="text w-100" type="password" name="password"  id="password"/>
			      </div>			    </fieldset>
			    <div className="">
			      <input onClick = {()=> onRouteChange('home')} className="detect pointer pa2 grow br2" type="submit" value="Register"/>
			    </div>
			    <div className="mt5 f6">
			      <p>If you already have an account, <span onClick = {()=> onRouteChange('signin')} className="link dim black db underline pointer">Sign In</span></p>
			    </div>
			  </form>
			</main>
		</article>
		)
}

export default Signin; 