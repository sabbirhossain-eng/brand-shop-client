import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const newUpdate = useLoaderData();

  const { _id, name, brand, price, category, rating, url, description } =
    newUpdate;

  const [formData, setFormData] = useState({
    name: name || "",
    brand: brand || "",
    price: price || "",
    category: category || "",
    rating: rating || "",
    url: url || "",
    description: description || "",
  });

  const handleUpdate = (event) => {
    event.preventDefault();

    const { name, brand, price, category, rating, url, description } = formData;

    fetch(`https://technology-and-electronics-brand-shop-server-side-5r0uiy36x.vercel.app/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        brand,
        price,
        category,
        rating,
        url,
        description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Update Successfully",
            icon: "success",
            confirmButtonText: "OKay",
          });
        }
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Product Update
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                defaultValue={name}
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Brand
              </label>
              <select
                name="brand"
                id="category"
                required
                defaultValue={brand}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected="">Select Brand</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Sony">Sony</option>
                <option value="Google">Google</option>
                <option value="Vivo">Vivo</option>
                <option value="Xiaomi">Xiaomi</option>
              </select>
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$2999"
                required
                defaultValue={price}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Category
              </label>
              <select
                name="category"
                id="category"
                required
                defaultValue={category}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected="">Select category</option>
                <option value="Phones">Phones</option>
                <option value="PC">PC</option>
                <option value="Laptop">Laptop</option>
                <option value="Watch">Watch</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Rating (value 1-5)
              </label>
              <input
                type="number"
                name="rating"
                id="rating"
                min="1.1"
                max="5.0"
                step="0.1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="1.1"
                required
                defaultValue={rating}
                onChange={handleChange}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Product URL
              </label>
              <input
                type="text"
                name="url"
                id="url"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter your product png url"
                required
                defaultValue={url}
                onChange={handleChange}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Short description
              </label>
              <textarea
                name="description"
                id="description"
                rows="8"
                required
                defaultValue={description}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-[#77aa51] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Update Submits
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
