import React, { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./action";
import {Input} from "@mui/material"
import { Button } from "@mui/material"

function TodoForm() {
  const ref = useRef();
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setState(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (state !== "") {
      dispatch(addTodo(state));
      setState("");
      ref.current.focus();
    } else alert("Please Enter Todo");
  };

  return (
    <form onSubmit={submitHandler} className="headerForm">
      <Input ref={ref} required={false}  autoFocus={true} placeholder="Enter ToDo"     value={state}
        onChange={onInputChange}  ></Input>
      <Button variant="contained" onClick={submitHandler}>Add Todo</Button>
    </form>
  );
}

export default TodoForm;
