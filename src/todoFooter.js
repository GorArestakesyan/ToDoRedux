import { useDispatch, useSelector } from "react-redux";
import { deleteAll, deleteCompleted } from "./action";
import { Button } from "@mui/material";
function TodoFooter() {
  const todos = useSelector((state) => state.PostReducer.todos);
  const complited = todos.filter((todo) => todo.checked !== false);
  const dispatch = useDispatch();
  const deleteAllTodos = (e) => {
    e.preventDefault();
    dispatch(deleteAll());
  };
  const deleteComp = (e) => {
    e.preventDefault();
    dispatch(deleteCompleted());
  };
  return (
    <>
      <div className="footer">
        <Button onClick={deleteComp} variant="outlined" size="md" active>
          Clear Completed
        </Button>{" "}
        <Button onClick={deleteAllTodos} variant="contained" size="md" active>
          Delete All
        </Button>
      </div>
      <h5 className="footerText">
        Completed {complited.length}/{todos.length}
      </h5>
    </>
  );
}
export default TodoFooter;
