import React, {Component} from 'react';
import Nav from '../Nav';
var Link = require('react-router-dom').Link;

class Apzvalgos extends Component {

   state = {
      propOk: false
   }

   componentDidMount() {
      this.setState({
         propOk: true
      })
   }



   render(){
   let blogas;
      if(this.state.propOk) {
      blogas = this.props.blog.map((bl, i) => {
          return (
             <Link    key={bl._id}
                      to={'apzvalgos/blog/' +i}
                      >
             <div
                className="blogai"
                >

            <h3>{bl.title}</h3>
            <img
               alt={bl.images.secure_url}
               src={bl.images.secure_url}
             />
             <p>{bl.blog}</p>
             <div className="read-more">Read More <hr  className="hr"/></div>
            </div>
            </Link>

          )
       })
      }



      return (
         <div className="apzvalgos-container">
            <Nav
               handleClick={this.props.handleClick}
             />

             <div className="blogai-container">
             {this.state.propOk && blogas}
             </div>

         </div>
      )
   }
}


export default Apzvalgos;
