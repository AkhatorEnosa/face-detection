import React from 'react';
import "./Signin.css";


class Signin extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}

	onPasswordChange = (event) => {
		this.setState({ signInPassword: event.target.value});
	}

	onEmailChange = (event) => {
		this.setState({ signInEmail: event.target.value});
	}

	onSubmitSignin = (e) => {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {
				'Content-Type' : 'application/json'
			},
			body : JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
			.then(response => response.json())
		      .then(user => { 
		        if(user.id){
		          this.props.loadUser(user);
		          this.props.onRouteChange('home');
		        }
		      })

			e.preventDefault()
	}

	render () {
		const { onRouteChange } = this.props
		return(
			<article className="w-30 center bg-white-50 br3 pa3 pa3-ns mt6 ba b--black-10">
				<main className="pa2 w-100">
				  <form className="measure">
				    <fieldset id="sign_up" className="ba b--transparent">
				      <legend className="f3 fw6">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="text w-100" type="email" name="email-address"  id="email-address" onChange = {this.onEmailChange}/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="text w-100" type="password" name="password"  id="password" onChange = {this.onPasswordChange}/>
				      </div>			    </fieldset>
				    <div className="">
				      <input onClick = {this.onSubmitSignin} className="detect pa2 grow br2" type="submit" value="Sign in"/>
				    </div>
				    <div className="mt5 f6">
				      <p>If you do not have an account, <span onClick = {()=> onRouteChange('register')} className="link white db underline pointer">Register</span></p>
				    </div>
				  </form>
				</main>
			</article>
		)
	}
}

export default Signin; 