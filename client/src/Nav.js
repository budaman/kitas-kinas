import React, {Component} from 'react';


class Nav extends Component {


  componentDidUpdate() {  //ziurim ar apsiupdeitino state, kad galetume nusiusti teisinga prop

  }

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
