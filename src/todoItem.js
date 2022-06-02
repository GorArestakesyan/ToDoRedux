import { useDispatch } from "react-redux";
import { check, deleteTodo } from "./action";

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
function TodoItem({ todo, id }) {
  const dispatch = useDispatch();

  const deleteItem = (e) => {
    e.preventDefault();
    dispatch(deleteTodo(id));
  };

  const checkitem = (e) => {
    e.persist();
    dispatch(check(todo.checked, todo.name, todo.id));
  };
  return (
    <>
      <input
        className="form-check-input"
        checked={todo.checked}
        onChange={checkitem}
        type="checkbox"
      />
      <h5 className="todoname">{todo.name}</h5>
      <Button onClick={deleteItem} variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </>
  );
}
export default TodoItem;
