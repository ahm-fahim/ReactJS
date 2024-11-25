import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" bg-gray-100 h-screen items-center flex justify-center ">
      <div className="bg-white shadow-md rounded-md m-10 p-5 flex flex-col items-center lg:w-2/5">
        <h2 className="font-bold font-anton text-2xl">Login Your Account</h2>
        <hr className="w-3/5 my-5" />
        <div className="lg:w-3/4 w-full">
          <div className="w-full my-3">
            <p className="font-bold">Email Address </p>
            <input
              type="email"
              name="email"
              id=""
              className="border w-full p-2 rounded-md"
              placeholder="Enter Your Email__@gmail.com"
            />
          </div>
          <div className="w-full my-3">
            <p className="font-bold">Password</p>
            <input
              type="password"
              name="password"
              className="border w-full p-2 rounded-md"
              id=""
              placeholder="Enter Your Secret Password *****"
            />
          </div>
          <button className="btn btn-neutral btn-sm w-full my-3">Login Now</button>
        </div>
        <p className="text-gray-500 py-4">
          Don't Have An Accounts?{" "}
          <Link to="/register" className="text-orange-400 font-bold">Register Here Now</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
