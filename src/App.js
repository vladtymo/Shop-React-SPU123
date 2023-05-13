import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';
import { USERS } from './users';
import Counter from './components/Counter';
import { UserList } from './components/UserList';
import { ProductList } from './components/ProductList';

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>

      <UserList users={USERS} />
      <hr />
      <ProductList />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
