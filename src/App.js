import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';
import { USERS } from './users';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>

      {/* TODO: move to a separate component (UserList) */}
      {USERS.map((u, i) => <UserCard key={i} {...u} />)}

      <hr />
      <Counter />
    </div>
  );
}

export default App;
