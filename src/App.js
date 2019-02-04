import React, { Component } from 'react';
import Error from './pages/notFound404';
import Home from './pages/Home';
import Navbar from './components/NavigationBar';
import './App.css';
import {Route , BrowserRouter , Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App" style={{textAlign:"center"}}>
      <BrowserRouter>
		<div>	
		<Navbar/>
		<Switch>
	 <Route exact path="/" component={Home} />
   <Route exact path="/home" component={Home} />
	  <Route component={Error}/>
		</Switch>
		</div>
		</BrowserRouter>
      </div>
    );
  }
}

export default App;
