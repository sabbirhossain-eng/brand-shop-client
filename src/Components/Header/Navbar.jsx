import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then()
    .catch();
  };

  

  const navLink = (
    <>
      <li>
        <NavLink
          lassName={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#77aa51] underline" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          lassName={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#77aa51] underline" : ""
          }
          to="/addProduct"
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          lassName={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#77aa51] underline" : ""
          }
          to="/myCart"
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-2xl rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
      <div>
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {
                    user?.photoURL?
                    (
                    <img src={user.photoURL} alt="User" />
                    )
                    :
                    (
                    <img src="https://i.ibb.co/7yL8SZJ/profile-user.png" alt="User" />
                    )
                  }
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 space-y-3"
              >
                <li>
                  {
                    user?.displayName?
                    <p>Name:
                      <br /> 
                      {user.displayName}</p>
                    :
                    <p>{null}</p>
                  }
                </li>
                <li>
                  {
                    user?.email?
                    <p>Email:
                      <br /> 
                      {user.email}</p>
                    :
                    <p>{null}</p>
                  }
                </li>
               <li>
                <button onClick={handleLogOut} className="font-semibold text-lg bg-[#77aa51] text-white hover:text-[#322153] justify-center">Log Out</button>
               </li>
              </ul>
            </div>
          ) : <button className="btn capitalize text-lg bg-[#77aa51] text-white hover:text-[#322153]"><Link to="/login">Login</Link></button>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
