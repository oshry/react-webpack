import ReactDOM from "react-dom";
import React from "react";
import ToDo from './js/components/container/Todo.jsx';
import FormContainer from "./js/components/container/FormContainer.jsx";
import NewOne from './js/components/container/NewContainer.jsx'

const wrapper = document.getElementById("create-article-form");
const todo = document.getElementById("todo");
const newone = document.getElementById("new");


wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
todo ? ReactDOM.render(<ToDo />, todo) : false;
newone ? ReactDOM.render(<NewOne />, newone) : false;