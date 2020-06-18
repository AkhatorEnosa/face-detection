import React from 'react';
import "./Signin.css";


const Signin = ({ onRouteChange }) => {
	return(
		<article class="w-30 center bg-white-50 br3 pa3 pa3-ns mt6 ba b--black-10">
			<main className="pa2 w-100">
			  <form className="measure">
			    <fieldset id="sign_up" className="ba b--transparent">
			      <legend className="f3 fw6">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
			        <input className="text w-100" type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="password">Password</label>
			        <input className="text w-100" type="password" name="password"  id="password"/>
			      </div>			    </fieldset>
			    <div className="">
			      <input onClick = {()=> onRouteChange('home')} className="detect pa2 grow br2" type="submit" value="Sign in"/>
			    </div>
			    <div className="mt5 f6">
			      <p>If you do not have an account, <span onClick = {()=> onRouteChange('register')} className="link dim black db underline pointer">Register</span></p>
			    </div>
			  </form>
			</main>
		</article>
		)
}

export default Signin; 