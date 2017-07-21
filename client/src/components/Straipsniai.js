import React, {Component} from 'react';
import Nav from '../Nav';

class Straipsniai extends Component {


   render(){


      return (
         <div className="straipsniai-container">
            <Nav
               handleClick={this.props.handleClick}
             />
            <div>{this.props.pages[1]} </div>
         </div>
      )
   }
}


export default Straipsniai;
