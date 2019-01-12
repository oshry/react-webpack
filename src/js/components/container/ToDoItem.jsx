import React, {Component} from 'react';
import '../../../assets/css/ToDoItem.css';
import ToDoItemPre from "../presentational/ToDoItemPre.jsx";

class ToDoItem extends Component {
    render() {
        return (
            <div className="ToDoItem">
                <ToDoItemPre
                    text={this.props.item}
                    handleDelete={this.props.handleDelete}

                />
            </div>
        );
    }
}

export default ToDoItem;