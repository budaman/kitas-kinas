import React, { Component } from 'react';

class Admin extends Component {

   state = {
   title: '',
   blog: ''
 }

   handlePost = () =>{
      if (this.state.blog !== '' && this.state.blog !==''){
      console.log(this.state.blog)
       fetch('blog', {
           method: 'post',
          headers: {'Content-Type': 'application/json'},
           body: JSON.stringify({
             title: this.state.title,
             blog: this.state.blog
           })
       });
    }
   }

   handleInput = (e) => {
      if(e.target.id ==='title') {
         this.setState({
            title: e.target.value
         })
      }
      if(e.target.id ==='blog'){
         this.setState({
            blog: e.target.value
         })
      }
   }


  render() {
    return (
      <div>
         <input
            type="text"
            placeholder="title"
            onBlur={this.handleInput}
            id="title"
          />
          <input
             type="text"
             placeholder="blog"
             onBlur={this.handleInput}
             id="blog"
           />
         <button onClick={this.handlePost}> Send </button>
      </div>
    );
  }
}

export default Admin;
