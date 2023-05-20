import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';
import { USERS } from './users';
import Counter from './components/Counter';
import { UserList } from './components/UserList';
import { ProductList } from './components/ProductList';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello React</h1>
        <Menu />
      </header>

      <main>
        <Routes>  
          <Route path='/' element={<h1>Main Page!</h1>} />
          <Route path='users' element={<UserList users={USERS} />} />
          <Route path='products' element={<ProductList />} />
          <Route path='counter' element={<Counter />} />
          <Route path='*' element={<h1>Not Found Page!</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
