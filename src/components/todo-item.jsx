import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteToDO, UpdateToDO } from "../redux/action";
import { todos } from "../redux/states";
function ToDoItem({ todo }) {
    let dispatch = useDispatch();
    const [editable, setEdtiable] = useState(false);
    const [name, setName] = useState("");
    return (
        <div>
            <div className="row mt-2">
                <div className="col-3">{todo.id}</div>
                <div className="col-3">
                    {editable ? <input type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="form-control" placeholder={todo.name} /> : <span>{todo.name}</span>}
                </div>
                <div className="col-3" className="text-right">
                    <button className="btn btn-sm btn-primary mr-2"
                        onClick={() => {
                            if (editable) {
                                dispatch(UpdateToDO(
                                    {
                                        ...todo,
                                        name: name
                                    }
                                ))
                            }
                            setEdtiable(!editable)
                        }}>Edit</button>
                    <button className="btn btn-sm btn-danger"
                        onClick={() => dispatch(DeleteToDO(todo.id))}
                    >Delete</button>
                </div>
            </div>
        </div>
    )
}
export default ToDoItem;