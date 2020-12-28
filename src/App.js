import logo from './logo.svg';
import './App.css';
import TodoList from './components/todo-list';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App container">
      {/* <TodoInput/> */}
      <TodoList/>
    </div>
  );
}

export default App;
