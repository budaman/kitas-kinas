import React, {Component} from 'react';
import Nav from '../Nav';

class Apie extends Component {


   render(){


      return (
         <div className="apie-container">
            <Nav
               handleClick={this.props.handleClick}
             />
            <div>{this.props.pages[2]} </div>
         </div>
      )
   }
}


export default Apie;
