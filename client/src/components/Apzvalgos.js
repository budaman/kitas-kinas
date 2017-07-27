import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'



class Apzvalgos extends Component {
   render(){
      var match = this.props.match;
      console.log(match)

   let blogas;
      blogas = this.props.blog.map((bl, i) => {
          return (
             <Link    key={bl._id}
                      to={{
                        pathname: match.url + '/blog/' + i,
                        search: '?index=' +i
                     }} >
            <div className="blogai">
            <h3>{bl.title}</h3>
            <img
               alt={bl.images.secure_url}
                  src={bl.images.secure_url}
             />
             <p className="aprasas">{bl.blog}</p>
             <div className="read-more">Read More <hr  className="hr"/></div>
            </div>
            </Link>
          )
       })
      return (

            <div>
         <div className="apzvalgos-container">
             <div className="blogai-container">
             {blogas}
             </div>
         </div>
         </div>
      )
   }
}


export default Apzvalgos;
