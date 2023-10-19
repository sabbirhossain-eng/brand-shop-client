import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";

const MyCart = () => {
    const loadedProduct = useLoaderData();
    const [products, setProducts] = useState(loadedProduct);
    


    return (
        <div className="grid md:grid-cols-3 gap-4">
        {
            products?.map(product =><CartCard
            key={product._id}
            product={product}
            products={products}
            setProducts={setProducts}
            ></CartCard>)
        }
      </div>
    );
};

export default MyCart;