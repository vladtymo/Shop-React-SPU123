import { useContext } from "react";
import { Link } from "react-router-dom";
import { CounterContext } from "../contexts/counter.context";

export function Menu() {

    // get counter global value
    const { count } = useContext(CounterContext);

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="users">Users</Link>
            <Link to="products">Products</Link>
            <Link to="add-product">Create</Link>
            <Link to="counter">Counter [{count}]</Link>
            <Link to="about">About</Link>
        </nav>
    );
}