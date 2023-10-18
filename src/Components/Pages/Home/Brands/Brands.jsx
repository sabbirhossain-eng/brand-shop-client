import { useEffect } from "react";
import { useState } from "react";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10 bg-[#77aa51] text-white py-2 rounded-lg">
        Our Brands
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {brands.map((brand) => (
          <div key={brand.id}>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={brand.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="text-3xl font-semibold text-center">{brand.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
