import React, { Component } from 'react';
import './App.css';
import Local from './Local';
import FullNav from './FullNav';
import Apzvalgos from './components/Apzvalgos';
import Straipsniai from './components/Straipsniai';
import Apie from './components/Apie';
import Admin from './components/Admin';

var ReactRouter = require('react-router-dom');//isikvieciam Router
var Router = ReactRouter.BrowserRouter;//routerio viduje galima sudelioti visus komponentus
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends Component {

   constructor() {
        super();
        this.state = {
            navOn: false,
            pages: ['apžvalgos', 'straipsniai', 'apie'],
            blog: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
  fetch('/users')
     .then(res => res.json())
     .then(blog => this.setState({ blog }));
}
   handleClick() {
      this.setState({
         navOn: !this.state.navOn
      })
      console.log(this.state.blog.length)
  }

  render() {
    return (

      <Router>
         <div className="container">
         <FullNav
            navOn={this.state.navOn}
            pages={this.state.pages}
            handleClick={this.handleClick}
         />
         {/*<Nav
            handleClick={this.handleClick}
          /> */}
            <Switch>
               <Route exact path="/" render={()=><Local handleClick={this.handleClick}/>}/>
               <Route exact path="/apzvalgos" render={()=>
                  <Apzvalgos pages={this.state.pages}
                     blog={this.state.blog}
                     handleClick={this.handleClick} />}/>
               <Route exact path="/straipsniai" render={()=><Straipsniai pages={this.state.pages} handleClick={this.handleClick} />}/>
               <Route exact path="/apie" render={()=><Apie pages={this.state.pages} handleClick={this.handleClick} />}/>
               <Route exact path="/admin" component={Admin} />
               <Route render={function(){
                  return <p>Tokio puslapio nėra.</p>
               }} />
            </Switch>
            </div>
      </Router>

    );
  }
}

export default App;
