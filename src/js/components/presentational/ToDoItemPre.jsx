import React from "react";
import PropTypes from "prop-types";
const ToDoItemPre = ({ text, handleDelete }) => (
    <div className="ToDoItem">
        <p className="ToDoItem-Text">{text}</p>
        <button className="ToDoItem-Delete"
                onClick={handleDelete}>-
        </button>
    </div>
);
ToDoItemPre.propTypes = {
    text: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired
};
export default ToDoItemPre;