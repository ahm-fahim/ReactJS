import { Link } from "react-router-dom";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const kidsData = [
  {
    id: 1,
    type: "Kids",
    image:
      "https://images.unsplash.com/photo-1534982841079-afde227ada8f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    type: "playground",
    image:
      "https://plus.unsplash.com/premium_photo-1686920245950-58617c8a602e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    type: "Classroom",
    image:
      "https://images.unsplash.com/photo-1509163245925-f4255dea7727?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const RightNav = () => {
  return (
    <div>
      {/* login with */}
      <div className="py-3">
        <h2 className="text-xl font-anton">Login With </h2>
        <Link className="btn btn-outline btn-success btn-xs my-1 w-full">
          {" "}
          <FaGoogle />
          Login with google
        </Link>
        <Link className="btn btn-outline btn-neutral btn-xs my-1 w-full">
          <FaGithub />
          Login with github
        </Link>
      </div>

      {/* find us on */}
      <div className="py-3 flex flex-col divide-y">
        <h2 className="text-xl font-anton mb-2">Find Us On</h2>
        <Link className=" flex flex-row items-center gap-2 py-2 hover:bg-base-200">
          <FaFacebook className="text-blue-600" /> Facebook
        </Link>
        <Link className=" flex flex-row items-center gap-2 py-2 hover:bg-base-200">
          <FaInstagram className="text-red-500" /> Instagram
        </Link>
        <Link className=" flex flex-row items-center gap-2 py-2 hover:bg-base-200">
          <FaTwitter className="text-cyan-500" /> Twitter{" "}
        </Link>
      </div>

      {/* kids  */}

      <div className="bg-base-200 p-4 rounded-md">
        <h1 className="text-xl font-anton py-2  ">Kids-Zone</h1>
        {kidsData.map((kid) => (
          <div
            key={kid.id}
            className="border bg-white p-5 rounded-md shadow-lg mt-4"
          >
            <img className="rotate-6" src={kid.image} alt={kid.type} />
            <h3 className="font-bold mt-4">{kid.type}</h3>
          </div>
        ))}
      </div>

      {/* add banner  */}
      <div className="w-full">
        <img className="h-96" src="https://www.vkf-renzel.co.uk/out/pictures/generated/product/1/1000_1000_75/r8011022-01/banner-display-mini-roll-up-a4-16037-1.jpg" alt="" />
      </div>
    </div>
  );
};

export default RightNav;
