import { Link } from "react-router-dom";

const Registration = () => {

    const handleRegistration = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

    }
    return (
        <div>
            <div className="card shadow-2xl bg-base-100">
        <div className="text-center mt-4">
        <h1 className="text-5xl font-bold text-[#322153]">Registration Now !</h1>
        </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="md:w-1/2">
            <img src="https://i.ibb.co/pJsbg9c/Security-On-pana.png" className="mx-auto" alt="" />
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#77aa51] text-white hover:text-[#322153]">Registration</button>
              </div>
              <p className="text-center mb-5">Already have an account please <Link className="text-[#77aa51] font-semibold" to="/login">Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Registration;