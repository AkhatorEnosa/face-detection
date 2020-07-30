import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Form from './components/Form/Form';
import Image from './components/Image/Image';
import "./App.css";

const particleOptions = {
    particles: {
          number: {
              value: 50
          },
          size: {
              value: 3
          },
      },
      interactivity: {
          events: {
              onhover: {
                  enable: true,
                  mode: 'grab'
              }
          }
      }
}

const initialState = {
      input : '',
      imageUrl: '',
      box: {},
      route: 'signin',
      user : {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }

class App extends Component { 
  constructor(){
    super()

    this.state = initialState

  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  loadUser = (data) => {
    this.setState({
      user : {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  calculateFacePosition = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input-image');
    const imgWidth = Number(image.width);
    const imgHeight = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * imgWidth,
      topRow: clarifaiFace.top_row * imgHeight,
      rightCol: imgWidth - (clarifaiFace.right_col * imgWidth),
      bottomRow: imgHeight - (clarifaiFace.right_col * imgHeight)
    }
  }

  displayFacebox = (box) => {

    console.log(box);
    this.setState({ box: box });
  }

  onPictureSubmit = () => {
    this.setState({ imageUrl: this.state.input });

      fetch('http://localhost:3000/imageUrl', {
        method: 'post',
        headers: {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
        .then(response =>  {
          if(response) {
            fetch('http://localhost:3000/image', {
              method: 'put',
              headers: {
                'Content-Type' : 'application/json'
              },
              body : JSON.stringify({
                id: this.state.user.id
              })
            })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })
            .catch(console.log)
          }
          this.displayFacebox(this.calculateFacePosition(response))
        })
        .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState(initialState)
    }

      this.setState({ route: route})
  }

  render() {
    const { route, box } = this.state;
    return(
        <div className = 'App'>
          <Particles  className= "particles" params={particleOptions}/>
          {route === 'home'
            ? <React.Fragment> 
                <Navigation  onRouteChange = {this.onRouteChange}/>
                <Logo />
                <Rank 
                  name = {this.state.user.name}  
                  entries = {this.state.user.entries}/>
                <Form 
                  onInputChange = {this.onInputChange}
                  onPictureSubmit = {this.onPictureSubmit}
                />
                <Image box= {box} imageUrl = {this.state.imageUrl}/>
              </React.Fragment>

              : route === 'signin' ?
                <Signin 
                  loadUser = {this.loadUser}
                  onRouteChange = {this.onRouteChange}/> :
                <Register 
                  loadUser = {this.loadUser}
                  onRouteChange = {this.onRouteChange}/>
            
        }
        </div>
    ) 
  } 
}

export default App; 