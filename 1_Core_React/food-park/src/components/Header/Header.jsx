import { CgMenuGridR } from "react-icons/cg";

const Header = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="flex flex-row justify-between items-center px-5 py-3">
        <h1 className="font-anton text-3xl text-orange-400">Food Park</h1>

        <div className="hidden lg:flex">
          <div className="flex flex-row gap-4 text-black ">
            <p className="hover:text-orange-400">Home</p>
            <p className="hover:text-orange-400">Reviews</p>
            <p className="hover:text-orange-400">Recipe</p>
            <p className="hover:text-orange-400">About US</p>
          </div>
        </div>

        <div className="hidden lg:flex">
          <div className="flex flex-row gap-4">
            <input
              type="text"
              placeholder="Search Food"
              className="input input-bordered input-warning w-full max-w-xs"
            />
            <div className="avatar">
              <div className="mask mask-hexagon w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="text-4xl">
              <CgMenuGridR />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
            >
              <li className="hover:text-orange-400 hover:bg-gray-200 p-3 rounded-lg">
                Home
              </li>
              <li className="hover:text-orange-400 hover:bg-gray-200 p-3 rounded-lg">
                Reviews
              </li>
              <li className="hover:text-orange-400 hover:bg-gray-200 p-3 rounded-lg">
                Recipe
              </li>
              <li className="hover:text-orange-400 hover:bg-gray-200 p-3 rounded-lg">
                About US
              </li>
              <li>
                <input
                  type="text"
                  placeholder="Search Food"
                  className="input input-bordered input-warning w-full max-w-xs"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
