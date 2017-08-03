import React, { Component } from 'react';
import './App.css';
import Local from './Local';
import FullNav from './FullNav';
import Apzvalgos from './components/Apzvalgos';
import Straipsniai from './components/Straipsniai';
import Apie from './components/Apie';
import Admin from './components/Admin';
import Nav from './Nav'
import Blog from './components/Blog'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
         <Nav
            handleClick={this.handleClick}
          />
            <Switch>
               <Route exact path="/" render={()=><Local handleClick={this.handleClick}/>}/>
               <Route exact path="/apzvalgos" render={(props)=>
                  <Apzvalgos pages={this.state.pages}
                     match={this.state.match}
                     blog={this.state.blog}
                     handleClick={this.handleClick} {...props}  />}/>
               <Route path="/apzvalgos/blog" render={(props)=>
                  <Blog pages={this.state.pages}
                     match={this.state.match}
                     blog={this.state.blog}
                     handleClick={this.handleClick} {...props}  />}/> />
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
