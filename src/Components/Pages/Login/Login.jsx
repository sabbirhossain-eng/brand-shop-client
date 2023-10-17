import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

    }
  return (
    <div className="card shadow-2xl bg-base-100">
        <div className="text-center mt-4">
        <h1 className="text-5xl font-bold text-[#322153]">Login now !</h1>
        </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="md:w-1/2">
            <img src="https://i.ibb.co/pJsbg9c/Security-On-pana.png" className="mx-auto" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:w-1/2">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span onClick={() => setShowPassword(!showPassword)} className="absolute top-14 left-72">
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#77aa51] text-white hover:text-[#322153]">Login</button>
              </div>
              <p className="text-center mb-5">Do not have an account please <Link className="text-[#77aa51] font-semibold" to="/registration">Registration</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
