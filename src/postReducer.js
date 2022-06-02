import {
  ADD_TODO,
  CHECK_ITEM,
  DELETE_ALL,
  DELETE_COMPLETED,
  DELETE_TODO,
} from "./types";
const initialState = {
  todos: [],
};
function PostReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            name: action.payload,
            id: Math.random().toString(),
            checked: false,
          },
        ],
      };
    case CHECK_ITEM:
      return {
        ...state,
        todos: state.todos.map((elem) => {
          if (elem.id === action.payload.id) {
            return {
              name: action.payload.name,
              id: action.payload.id,
              checked: !action.payload.checked,
            };
          }
          return elem;
        }),
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case DELETE_COMPLETED:
      return {
        todos: state.todos.filter((todo) => todo.checked !== true),
      };
    case DELETE_ALL:
      return {
        todos: [],
      };
    default:
      return state;
  }
}

export default PostReducer;
