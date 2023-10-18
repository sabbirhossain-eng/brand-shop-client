import { useEffect, useState } from "react";
import VivoCard from "./BrandProductCard/VivoCard";
import { useLoaderData } from "react-router-dom";

const Vivo = () => {
    const loadedProduct = useLoaderData();
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const filteredProducts = loadedProduct.filter(
        (product) => product.brand === "Vivo"
      );
      setProducts(filteredProducts);
    }, [loadedProduct]);
  
  
    return (
      <div className="m-20">
        <h1 className="text-5xl font-bold text-center my-20">Vivo</h1>
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-96 overflow-hidden rounded-lg md:h-96">
          {products.map((items, index) => (
            <div
              key={index}
              className="hidden duration-700 ease-in-out"
              data-carousel-item
            >
              <img
                src={items.url}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {products.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === 0 ? "current" : ""
              }`}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
            ></button>
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
             
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
             
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
  
        <div className="grid md:grid-cols-3 gap-4">
          {products.map((product) => (
            <VivoCard key={product._id} product={product}></VivoCard>
          ))}
        </div>
      </div>
    );
  };
  

export default Vivo;