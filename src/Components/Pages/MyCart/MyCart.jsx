import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";

const MyCart = () => {
    const loadedProduct = useLoaderData();
    const [products, setProducts] = useState(loadedProduct);

    return (
        <div className="grid md:grid-cols-3 gap-4">
        {
            products ? (
                products.map(product => (
                    <CartCard
                        key={product._id}
                        product={product}
                        products={products}
                        setProducts={setProducts}
                    ></CartCard>
                ))
            ) : 
            (
                <div>
                    <h2 className="text-2xl font-bold text-center items-center">Please Add Cart</h2>
                </div>
            )
        }
      </div>
    );
}

export default MyCart;
