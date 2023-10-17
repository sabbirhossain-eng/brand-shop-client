import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div className="h-[80vh] flex justify-center items-center mt-5 mb-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/0GWzBBk/image.png"
            alt="Error not found"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-red-600">
            not found error !!!
          </h2>
          <p>Back to Home page</p>
          <Link to="/">
            <div className="card-actions">
              <button className="btn bg-[#77aa51]">Home page</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default ErrorElement;