import React, { Component } from "react";

import Test from "../presentational/Test.jsx";
class NewContainer extends Component {
    constructor() {
        super();
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