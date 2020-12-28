import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { AddToDO } from '../redux/action';
import {v1 as uuid} from 'uuid';
function TodoInput(){
    let dispatch = useDispatch();
    let [name, setName] = useState();

    function changeHandler(event){
        this.setState({
            name: "YES"
        })
    }

    return (
        <div>
            <label>To Do Input </label>
            <div className="row">
                <div className="col-12 d-flex">
                    <input type="text" name="name" 
                    onChange={(e)=>setName(e.target.value)}
                    value={name} 
                    placeholder="Name" className="form-control mr-2" id=""/>
                    <button onClick={()=>(
                        dispatch(AddToDO({id: uuid(),name: 'Pa'}))
                    )} className="btn btn-danger">Add</button>
                </div>
            </div>
        </div>
    )
}
export default TodoInput
