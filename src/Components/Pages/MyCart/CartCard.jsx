import PropTypes from 'prop-types';
import Swal from "sweetalert2";

const CartCard = ({product, products, setProducts}) => {
    const {_id, name, brand, price, category, rating, url } = product;
   
    const totalStars = 5;
    const activeStars = parseInt(rating, 10);
    const blankStars = totalStars - activeStars;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://technology-and-electronics-brand-shop-server-side-c5q6iwxvi.vercel.app/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = products.filter(cof => cof._id !== _id);
                            setProducts(remaining);
                        }
                    })

            }
        })
    }

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="p-8 rounded-t-lg"
          src={url}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        Type: {category}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        Brand: {brand}
      </p>
    </div>
        <div className="flex items-center mt-2.5 mb-5">
        
        {Array.from({ length: activeStars }).map((_, index) => (
                <svg
                    key={index}
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                >
                    {<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    }
                </svg>
            ))}
        {Array.from({ length: blankStars }).map((_, index) => (
                <svg
                    key={index}
                    className="w-4 h-4 text-slate-200 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                >
                    {<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    }
                </svg>
            ))}
          <span className="bg-[#77aa51] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $ {price}
          </span>
        <div
        onClick={()=> handleDelete(_id)}
            className="text-white bg-[#77aa51] btn hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Delete
          </div>
        </div>
      </div>
    </div>
    );
};
CartCard.propTypes ={
    product: PropTypes.node, 
    products: PropTypes.node, 
    setProducts: PropTypes.node
}
export default CartCard;