import React, {Component} from 'react';
import Nav from '../Nav';


class Blog extends Component {


   render(){
      return (
         <div className="blog-container">
            <Nav
               handleClick={this.props.handleClick}
             />

         </div>
      )
   }
}


export default Blog;
