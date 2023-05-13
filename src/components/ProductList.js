import { useEffect, useState } from "react";

const api = 'https://dummyjson.com/products';

let pagination = {
    limit: 5,
    skip: 0,
    total: null
};

export function ProductList() {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        console.log("Effect on component mount!");

        loadProducts();
    }, []);
    useEffect(() => {
        console.log("Effect on component update!");
    });
    useEffect(() => {
        return () => console.log("Effect on component unmount!");
    }, []);

    const loadProducts = () => {

        let url = `${api}?limit=${pagination.limit}&skip=${pagination.skip}`;

        fetch(url).then(res => res.json()).then(data => {
            console.log(data);

            pagination.skip += pagination.limit;

            // add products to the list
            //products = data.products;
            setProducts([...products, ...data.products]); // ...spread operator
        });
    }

    return (
        <>
            <h2>Product List</h2>
            <ol>
                {products.map((i, ind) => <li key={ind}>{i.brand} {i.title} {i.price}$</li>)}
            </ol>
            <button onClick={loadProducts}>Load More...</button>
        </>
    )
}