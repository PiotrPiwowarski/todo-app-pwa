import './App.css';
import {useState} from 'react';

function App() {
  const [todoList, setTodoList] = useState([{id: 1, description: 'Pierwszy task'}]);
  const [newTask, setNewTask] = useState('');
  const handleAddTask = () => {
    setTodoList(prev => [...prev, {id: todoList.length, description: newTask}])
    setNewTask('');
  }
  return (
    <div className="App">
      <h1>TODO LISTA</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)} // Obsługa zmiany wartości inputa
        placeholder="Dodaj zadanie"
      />
      <button onClick={handleAddTask}>Dodaj zadanie</button>
      {todoList.map(elem => {
        return <p>{elem.description}</p>
      })}
    </div>
  );
}

export default App;
