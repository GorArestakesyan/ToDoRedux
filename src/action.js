import {
  ADD_TODO,
  DELETE_TODO,
  DELETE_ALL,
  DELETE_COMPLETED,
  CHECK_ITEM,
} from "./types";

export const addTodo = (post) => {
  return {
    type: ADD_TODO,
    payload: post,
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const check = (checked, value, id) => {
  return {
    type: CHECK_ITEM,
    payload: { checked: checked, name: value, id: id },
  };
};
export const deleteCompleted = () => {
  return {
    type: DELETE_COMPLETED,
  };
};
export const deleteAll = () => {
  return {
    type: DELETE_ALL,
  };
};
