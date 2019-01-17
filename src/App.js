import React, { Component } from 'react';
import './App.css';
//import { auth, googleProvider, facebookProvider } from './firebase.js';
import Party from './Party.js';
import Login from './login/Login.js';
//import { Input, Button, Icon } from 'semantic-ui-react';
class App extends Component {

  state = {
    user: null
  };

  handleUserChange = (user) => {
    this.setState({user});
  }
  
  render() {
    return (
      <div>
        <div className="app-header">
          <div className="app-wrapper">
            <span className="app-header-title">Fun Food Friends</span> 
            <Login onUserChange={this.handleUserChange}/>
            {/* {this.state.user ?
              <Button className="app-login-section" onClick={this.logout}>Log Out</Button>                
              :
              <span className="app-login-section" style={{width:"250px"}}>
                <form className="app-email-login" onSubmit={this.handleSubmit}>
                  <Input type="text" name="email" placeholder="What's your email?" onChange={this.handleChange} value={this.state.email} />
                  <Input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                  <Button style={{display:"none"}}></Button>
                </form>
                <span style={{display:"table"}}>
                  <span style={{display:"table-cell"}}><Button primary onClick={this.handleSubmit}>Log in</Button></span>&nbsp; 
                  <span style={{display:"table-cell"}}><Button secondary onClick={this.signUp}>Sign up</Button></span>
                </span>
                {this.state.errorMessage}
                  <br />
                <Button color="google plus" id="googleLogin" onClick={this.login}><Icon name='google' />Log in with Google</Button>&nbsp;         
                <Button color="facebook" id="facebookLogin" onClick={this.login}><Icon name='facebook' />Log in with Facebook</Button>              
              </span>
            } */}
          </div>
        </div>

        {this.state.user ? 
          <div>
            {this.state.user.displayName}
            <Party user={this.state.user} />
          </div>
          :
          <div className='app-wrapper'>
            <p>You must be logged in to see the potluck list and submit to it.</p>
          </div>
        } 
         
      </div>
    );
  }
}

export default App;
