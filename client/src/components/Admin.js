import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import sha1 from 'sha1'
import superagent from 'superagent'



class Admin extends Component {

   state = {
   title: '',
   blog: '',
   images: '',
   isFilled: ''
 }

   handlePost = () =>{
      if (this.state.blog !== '' && this.state.isFilled ==='uploaded'  && this.state.images.length !== ''){
       fetch('blog', {
           method: 'post',
          headers: {'Content-Type': 'application/json'},
           body: JSON.stringify({
             title: this.state.title,
             blog: this.state.blog,
             images: this.state.images
           })
       })
       alert('Irasas issaugotas Apzvalgos kategorijoje')
    } else alert('ne viskas uzpildyta')
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

   uploadFile = (files) => {
       const image = files[0]
       const cloudName = 'dit1kqs0w'
       const url = 'https://api.cloudinary.com/v1_1/'
       +cloudName+'/image/upload'

       const timestamp = Date.now()/1000
       const uploadPreset = 'cutirzsa'
       const paramsStr = 'timestamp='+timestamp
       +'&upload_preset='+uploadPreset+'dGGYCL2SPry_djUnfH2TOIVXWt4'

       const signature = sha1(paramsStr)
       const params = {
          'api_key': '671587567346319',
          'timestamp': timestamp,
          'upload_preset': uploadPreset,
          'signature': signature
       }
       let uploadRequest = superagent.post(url)
       uploadRequest.attach('file', image)

       Object.keys(params).forEach((key) => {
          uploadRequest.field(key, params[key])
       })

       uploadRequest.end((err,resp) => {
         if (err) {
             alert(err)
             return
          }
          console.log('UPLOAD Complete: ' +JSON.stringify(resp.body))
          alert('UPLOAD Complete: ')

          const uploaded = resp.body

          this.setState({
             images: uploaded,
              isFilled: 'uploaded'
          })

       })
    }


  render() {
    return (
      <div className="uploadForm">
         <div className="form">
         <Dropzone
            className="image-upload"
            onDrop={this.uploadFile}
          />
         <p>Upload Blog cover picture</p>
         <input
            type="text"
            placeholder="title"
            onBlur={this.handleInput}
            id="title"
          />
          <input
             className="blog-text-field"
             type="text"
             placeholder="blog"
             onBlur={this.handleInput}
             id="blog"
           />
         <button onClick={this.handlePost}> Send </button>
         </div>
      </div>
    );
  }
}

export default Admin;
