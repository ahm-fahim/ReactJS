import { useContext, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [regError, setRegError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setRegError(errorMessage);
      });
  };

  return (
    <div className="bg-gray-200 h-screen items-center flex flex-col justify-center ">
      <h1 className="text-[200px] text-white font-bokor mb-[-150px]">
        News Park
      </h1>

      <div className="bg-white shadow-md rounded-md m-10 p-5 flex flex-col items-center lg:w-2/5">
        <p className="text-orange-400 text-center py-1">{regError}</p>
        <h2 className="font-bold font-anton text-2xl">Register Your Account</h2>
        <hr className="w-3/5 my-5" />

        <form onSubmit={handleRegister} className="lg:w-3/4 w-full">
          <div className="w-full my-3">
            <p className="font-bold">User Name</p>
            <input
              type="text"
              name="text"
              required
              className="border w-full p-2 rounded-md"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="w-full my-3">
            <p className="font-bold">Profile Image</p>
            <input
              type="file"
              name="file"
              //   required
              className="border w-full p-2 rounded-md"
            />
          </div>
          <div className="w-full my-3">
            <p className="font-bold">Email Address </p>
            <input
              type="email"
              name="email"
              required
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
              required
              placeholder="Enter Your Secret Password *****"
            />
          </div>
          <button className="btn btn-neutral btn-sm w-full my-3">
            Register Now
          </button>
        </form>
        <p className="text-gray-500 py-4">
          Already Have An Accounts?{" "}
          <Link to="/login" className="text-orange-400 font-bold">
            Go To Login Here
          </Link>{" "}
        </p>
        <Link to="/" className="flex items-center p-1">
          <FaArrowAltCircleRight className="mx-1" /> Go To Home
        </Link>
      </div>
    </div>
  );
};

export default Register;
