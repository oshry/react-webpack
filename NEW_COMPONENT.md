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
       import Input from "../presentational/Test.jsx";

       class NewContainer extends Component {
           constructor() {
               super();
               //initial state
               this.state = {
                   seo_title: ""
               };
           }
           handleChange = event => {
               // set event id with new value
               // in this case on handleChange trigger fire
               // input id "seo_title" get new value
               this.setState({ [event.target.id]: event.target.value });
           }
           render() {
               const { seo_title } = this.state;
               return (
                   <form id="article-form">
                       //send data to test present
                       <Test
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

4. /presentational/Test.jsx
    import React from "react";
    import PropTypes from "prop-types";
    const Test = ({ label, text, type, id, value, handleChange }) => (
        <div className="form-group">
            <label htmlFor={label}>{text}</label>
            <input
                type={type}
                className="form-control"
                id={id}
                value={value}
                onChange={handleChange}
                required
            />
        </div>
    );
    Test.propTypes = {
        label: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        handleChange: PropTypes.func.isRequired
    };
    export default Test;