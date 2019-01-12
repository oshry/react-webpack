import FormContainer from "./js/components/container/FormContainer.jsx";
import ReactDOM from "react-dom";
import React from "react";
import ToDo from './js/components/container/Todo.jsx';


const wrapper = document.getElementById("create-article-form");
const todo = document.getElementById("todo");

wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
todo ? ReactDOM.render(<ToDo />, todo) : false;