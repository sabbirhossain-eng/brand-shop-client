import { Link, redirect, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";

const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {userCreate, googleCreateUser, user} = useContext(AuthContext);
    const navigate = useNavigate();


    const handleRegistration = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        if(password.length < 6){
          toast('Password should be at least 6 characters or longer')
          return;
        }
        else if(!/[A-Z]/.test(password)){
          toast('Your password should have at least one capital letter')
          return;
        }
        else if(!/[!"#$%&'()*+,-./:;<>=?@[\]^_`|{}~]/.test(password)){
          toast('Your password should have at least one special character')
          return;
        }

        userCreate(email, password)
        .then(result =>{
            console.log(result.user)
            if(result.user){
              toast('Your Registration Success!!');
              navigate("/");
            }
        })
        .catch(error =>{
            console.error(error)
            const errorMessage = error.message;
            toast(errorMessage);
        })

    };
    const handleLoading = () =>{
      if(!user){
        return redirect('/')
      }
      return null;
    };
    
    const handleGoogle = () =>{
      googleCreateUser()
      .then(result =>{
        console.log(result.user)
        toast('Your Registration Success!!')
      })
      .catch(error =>{
        console.error(error);
        const errorMessage = error.message;
        toast(errorMessage);
      })
    };
   
    return (
        <div>
            <div className="card shadow-2xl bg-base-100">
        <div className="text-center mt-4">
        <h1 className="text-5xl font-bold text-[#322153]">Registration Now !</h1>
        </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="md:w-1/2">
            <img src="https://i.ibb.co/WVpFnGw/Sign-up-cuate.png" className="mx-auto" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:w-1/2">
            <form onSubmit={handleRegistration} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
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
                  placeholder="Enter Your Password"
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
                <button onClick={handleLoading } className="btn bg-[#77aa51] text-white hover:text-[#322153]">Registration</button>
                <ToastContainer/>
              </div>
              <div className="text-center">
              <button className=" btn mt-3" onClick={handleGoogle}>
                <span className="text-4xl font-semibold"><FcGoogle></FcGoogle></span>
                 <span className="text-[#322153] capitalize">Registration With Google</span></button>
              <ToastContainer/>
            </div>
            </form>
              <p className="text-center mb-5">Already have an account please <Link className="text-[#77aa51] font-semibold" to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Registration;