export const NEW_LOCAL = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export function AddToDO(todo){
    return {
        type: NEW_LOCAL,
        payload: todo
    }
}
export function DeleteToDO(todoId){
    return {
        type: DELETE_TODO,
        payload: todoId
    }
}
export function UpdateToDO(todo){
    return {
        type: UPDATE_TODO,
        payload: todo
    }
}