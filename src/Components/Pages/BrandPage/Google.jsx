import { useLoaderData } from "react-router-dom";
import GoogleCard from "./BrandProductCard/GoogleCard";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Google = () => {
    const loadedProduct = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = loadedProduct.filter(
      (product) => product.brand === "Google"
    );
    setProducts(filteredProducts);
  }, [loadedProduct]);


  return (
    <div className="m-20">
      <h1 className="text-5xl font-bold text-center my-20">Google</h1>
      <div className="max-w-md mx-auto">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={true}
        infiniteLoop={true}
        useKeyboardArrows={true}
        autoPlay={true}
        interval={3000}
        dynamicHeight={true}
      >
        {products.map((product) => (
          <div key={product._id}>
            <img src={product.url} alt={product.name} />
          </div>
        ))}
      </Carousel>
    </div>

      <div className="grid md:grid-cols-3 gap-4">
        {products.map((product) => (
          <GoogleCard key={product._id} product={product}></GoogleCard>
        ))}
      </div>
    </div>
  );
};


export default Google;