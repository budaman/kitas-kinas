import React, {Component} from 'react';


class Local extends Component {


   render(){

      return (
         <div className="localContainer">
            <div className="logo-text" >
               <img className="logo"
                   src="icons/kitas_kinas_white.png"
                   alt="Kitas Kinas"
                />
            </div>
            <div
               className="menu"
               onClick={this.props.handleClick}
               >
            </div>
         </div>
      )
   }
}

export default Local;
