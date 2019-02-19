1. add html component wrapper in index.html
   <div id="new"></div>
2. at entry point (index.js) add:
    1. import NewOne from './js/components/container/NewContainer.jsx'
    2. const newone = document.getElementById("new");
    3. newone ? ReactDOM.render(<NewOne />, newone) : false;
3. NewContainer.jsx
    1.
       //import react core
       import React, { Component } from "react";
       //import presentational
       import Input from "../presentational/Input.jsx";

       class NewContainer extends Component {
           constructor() {
               super();
               //initial state
               this.state = {
                   seo_title: ""
               };
           }
           handleChange = event => {
               console.log(event.target.value);
               this.setState({ [event.target.id]: event.target.value });
           }
           render() {
               const { seo_title } = this.state;
               return (
                   <form id="article-form">
                       <Input
                           text={seo_title}
                           label="seo_title"
                           type="text"
                           id="seo_title"
                           value={seo_title}
                           handleChange={this.handleChange}
                       />
                   </form>
               );
           }
       }
       export default NewContainer;
