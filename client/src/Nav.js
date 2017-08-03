import React, {Component} from 'react';


class Nav extends Component {

   render() {
      return <div className="fixedNavMenu">
         <div className="kitasKinasText"> Kitas Kinas </div>
         <div
            className="menu-nav"
             onClick={this.props.handleClick}
            >
         </div>
      </div>
   }
}

export default Nav;
