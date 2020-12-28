import {NEW_LOCAL,DELETE_TODO,UPDATE_TODO} from './action';
import { todos } from './states';

export let reducer = (state = todos, action)=>{
    let newTodos;
    switch (action.type) {
        case NEW_LOCAL:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos

        case UPDATE_TODO:
            newTodos = [...state];
            newTodos.forEach((o, i)=> {
                // console.log(o, action.payload.id);
                if (o.id===action.payload.id) {
                    newTodos[i]=action.payload;
                }
            });
            return newTodos;
    
        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo=>todo.id != action.payload);
            return newTodos;
        }
        return state;
}