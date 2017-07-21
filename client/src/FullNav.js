import React, {Component} from 'react';
var NavLink = require('react-router-dom').NavLink;
var latinize = require('latinize');
latinize('ĄČĖĘĮŲŽŪŠ ąčėęįųžūš');

class FullNav extends Component {

   render() {
      var pages = this.props.pages.map((page, i)=>{
         var latinezed = latinize(page); //puslapiu nuoroda negali buti lietuviskomis raidemis, todel cia paverciame i lotyniskus rasmenis
         return (
            <li
               key={i}
               className="pages"
               onClick={this.props.handleClick}
               >
                  <NavLink exact activeClassName='active' to={'/'+latinezed}>
                  {page.toUpperCase()}
               </NavLink>
               </li>
         )
      })


      return (
         <nav className={'navMenu ' + (this.props.navOn ? "navMenuOn" : "navMenuOff")}>
         <ul>
            {pages}
         </ul>
         <div
            className="close"
            onClick={this.props.handleClick}
            >
               X
         </div>
      </nav>
   )
   }
}

export default FullNav;
