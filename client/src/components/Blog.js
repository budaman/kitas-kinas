import React, {Component} from 'react';
// import { BrowserRouter as withRouter } from 'react-router-dom'
var queryString = require('query-string');

class Blog extends Component {

   state = {
      pageIndex: 0,
      receivedProp: false
   }

   componentDidMount () {

         var page = queryString.parse(this.props.location.search);
         console.log(page)
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
      console.log(this.state.pageIndex)

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
                        className="blogCoverImg"
                        src={blog[i].images.secure_url}
                     />
                     <p>{blog[i].blog}</p>
                     <div className="griztiCont">
                     <div className="grizti">Grįžti</div>
                  </div>
                </div>
                }
             </div>
         </div>
      )
   }
}


export default Blog;
