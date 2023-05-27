import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';
import { USERS } from './users';
import Counter from './components/Counter';
import { UserList } from './components/UserList';
import { ProductList } from './components/ProductList';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Layout } from './components/Layout';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<h1>Main Page!</h1>} />
        <Route path='users' element={<UserList users={USERS} />} />
        <Route path='products' element={<ProductList />} />
        <Route path='add-product' element={<AddProduct />} />
        <Route path='counter' element={<Counter />} />
        <Route path='*' element={<h1>Not Found Page!</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
