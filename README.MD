main features
1. npm build(compile) start(develop) scripts

2. dependence's(npm init -y)
    webpack: npm i webpack webpack-cli webpack-dev-server --save-dev
    babel+.babelrc: npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --D
    + proposal classes: npm install --save-dev @babel/plugin-proposal-class-properties
    install react: npm i react react-dom --save-dev
    install hard props(good practice): npm i prop-types --save-dev
    auto loading: npm i html-webpack-plugin html-loader --save-dev
    image loader: npm install image-webpack-loader --save-dev
    css loader: npm install style-loader css-loader sass-loader node-sass webpack --D

3. implement container/ presentational split
  1. container:
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
   2. presentational:
        import React from "react";
        import PropTypes from "prop-types";
        const Input = ({ label, text, type, id, value, handleChange }) => (
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
        Input.propTypes = {
            label: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            handleChange: PropTypes.func.isRequired
        };
        export default Input;


