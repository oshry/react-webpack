import React from "react";
import PropTypes from "prop-types";
import ToDoItem from "../container/ToDoItem.jsx";
import Logo from '../../../assets/img/logo.png';

const ToDoItemList = ({ list, todo, handleDelete, createNewToDoItem , handleKeyPress, handleInput }) => (
    <div className="ToDo">
        <img className="Logo" src={Logo} alt="React logo"/>
        <h1 className="ToDo-Header">React To Do</h1>
        <div className="ToDo-Container">

            <div className="ToDo-Content">

                {list.map((item, key) => {
                        return <ToDoItem
                            key={key}
                            item={item.todo}
                            handleDelete={handleDelete.bind(this, key)}
                        />
                    }
                )}
            </div>

            <div>
                <input type="text" value={todo} onChange={handleInput} onKeyPress={handleKeyPress}/>
                <button className="ToDo-Add" onClick={createNewToDoItem}>+</button>
            </div>

        </div>
    </div>
);
ToDoItemList.propTypes = {
    list: PropTypes.array,
    todo: PropTypes.string,
    handleDelete: PropTypes.func,
    createNewToDoItem: PropTypes.func,
    handleKeyPress: PropTypes.func,
    handleInput: PropTypes.func
};
export default ToDoItemList;