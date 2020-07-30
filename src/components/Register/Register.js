import React from 'react';
// import "./Signin.css";


class Signin  extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}

	onNameChange = (e) => {
		this.setState({ name: e.target.value})
	}

	onEmailChange = (e) => {
		this.setState({ email: e.target.value})
	}

	onPasswordChange = (e) => {
		this.setState({ password: e.target.value})
	}

	onSubmit = (e) => {
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {
				'Content-Type' : 'application/json'
			},
			body : JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
			})
		})
			.then(response => response.json())
			.then(user => {
				if(user.id){
					this.props.loadUser(user)
					this.props.onRouteChange('home')
				}
			})

			e.preventDefault()
	}

	render () {
		const { onRouteChange } = this.props;

		return(
			<article className="w-30 center bg-white-50 br3 pa3 pa3-ns mt6 ba b--black-10">
				<main className="pa2 w-100">
				  <form className="measure"> 
				    <fieldset id="register" className="ba b--transparent">
					      <legend className="f3 fw6">Register</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
					        <input 
					        	className="text w-100" 
					        	type="text" 
					        	name="name"  
					        	id="name" 
					        	onChange = {this.onNameChange}/>
					      </div>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input 
					        	className="text w-100" 
					        	type="email" 
					        	name="email-address"  
					        	id="email-address" 
					        	onChange = {this.onEmailChange}/>
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        <input 
					        	className="text w-100" 
					        	type="password" 
					        	name="password"  
					        	id="password" 
					        	onChange = {this.onPasswordChange}/>
					      </div>
				      </fieldset>
				    <div className="">
				      <input onClick = {this.onSubmit} className="detect pointer pa2 grow br2" type="submit" value="Register"/>
				    </div>
				    <div className="mt5 f6">
				      <p>If you already have an account, <span onClick = {()=> onRouteChange('signin')} className="link dim black db underline pointer">Sign In</span></p>
				    </div>
				  </form>
				</main>
			</article>
		)
	}
}

export default Signin; 