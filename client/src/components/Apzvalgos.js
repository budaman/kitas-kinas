import React, {Component} from 'react';
import Nav from '../Nav';

class Apzvalgos extends Component {

   state = {
      propOk: false
   }



   componentWillReceiveProps(prop) {
     if(prop.blog !== '') {
        this.setState({
           propOk: true
        })
     }
   }


   render(){
   let blogas;
      if(this.state.propOk) {
      blogas = this.props.blog.map((bl, i) => {
          return (
             <div>
            <h3>{bl.title}</h3>
             <p>{bl.blog}</p>
            </div>
          )
       })
      }
      console.log(blogas)


      return (
         <div className="apzvalgos-container">
            <Nav
               handleClick={this.props.handleClick}
             />
             {this.state.propOk && blogas}
         </div>
      )
   }
}


export default Apzvalgos;
