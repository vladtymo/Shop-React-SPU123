import { useForm } from "react-hook-form";

const api = 'https://localhost:7070/api/products/test-create';

export default function AddProduct() {

    const { register, handleSubmit } = useForm();

    const onCreate = (product) => {
        console.log("Creating a product...");
        console.log(product);

        const data = new FormData();
        // set all product fields
        //data.set("title", product.title);
        //data.set("price", product.price);
        //data.set("inStock", product.inStock);
        for (const key in product) {
            data.set(key, product[key]);
        }

        // set image property
        data.set("image", product.files[0]);

        fetch(api, {
            method: 'POST',
            body: data//JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                console.log("Result:", result);
            });
    }

    return (
        <div className="AddProduct">
            <h2>Add New Product Form</h2>
            <form onSubmit={handleSubmit(onCreate)} encType="multipart-form/data">
                <label>
                    <span>Title:</span>
                    <input {...register("title")} type="text" />
                </label>
                <label>
                    <span>Price:</span>
                    <input {...register("price")} type="number" step={0.01} min={0} />
                </label>
                <label>
                    <span>In Stock:</span>
                    <input {...register("inStock")} type="checkbox" />
                </label>
                <label>
                    <span>Image:</span>
                    <input {...register("files")} type="file" />
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}