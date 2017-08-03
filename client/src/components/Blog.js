import React, {Component} from 'react';
var queryString = require('query-string');
var Link = require('react-router-dom').Link;


class Blog extends Component {

   state = {
      pageIndex: 0,
      receivedProp: false
   }

   componentDidMount () {

         var page = queryString.parse(this.props.location.search);
         this.setState({
            pageIndex: page.index
         })
         if(this.props.blog.length > 0) {
            this.setState({
               receivedProp: true
            })
         }
   }

   componentWillReceiveProps(props){
      if(props.blog.length > 0) {
         this.setState({
            receivedProp: true
         })
      }
   }

   render(){
      let propUpd = this.state.receivedProp
      let i = this.state.pageIndex;
      let blog = this.props.blog;


      if (propUpd === false) {
         return (
            <div className="apzvalgos-container">
                <div className="blogai-container">
                   LOADING
                </div>
            </div>
         )
      }

      return (
         <div className="apzvalgos-container">
             <div className="blogai-container">
                {propUpd===true &&
                   <div className="blogas">
                      <h3>{blog[i].title}</h3>
                      <img
                        alt={blog[i].images.secure_url}
                        className="blogCoverImg"
                        src={blog[i].images.secure_url}
                     />
                     <p>{blog[i].blog}</p>
                     <div className="griztiCont">

                     <Link to={'/apzvalgos'}>
                        <div className="grizti">Grįžti</div>
                     </Link>
                  </div>
                </div>
                }
             </div>
         </div>
      )
   }
}


export default Blog;
