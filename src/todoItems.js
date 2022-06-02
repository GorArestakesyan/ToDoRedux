import { useSelector } from "react-redux";
import TodoElem from "./todoItem";
function TodoItems() {
  const todos = useSelector((state) => state.PostReducer.todos);
  return todos.map((todo) => {
    return (
      <div
        key={todo.id}
        className="form-check"
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingLeft: "12px",
          marginBottom: "1.125rem",
          alignItems: "center"
        }}
      >
        <TodoElem key={todo.id} todo={todo} id={todo.id} />
      </div>
    );
  });
}
export default TodoItems;
