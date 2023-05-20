import { Link } from "react-router-dom";

export function Menu() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="users">Users</Link>
            <Link to="products">Products</Link>
            <Link to="counter">Counter</Link>
            <Link to="about">About</Link>
        </nav>
    );
}