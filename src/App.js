import "./App.css";
import TodoFooter from "./todoFooter";
import TodoForm from "./todoForm";
import TodoItem from "./todoItems";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoItem />
      <TodoFooter />
    </div>
  );
}

export default App;
