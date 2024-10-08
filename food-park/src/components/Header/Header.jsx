const Header = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="flex flex-row justify-between items-center px-5 py-3">
        <h1 className="font-anton text-3xl text-orange-400">Food Park</h1>

        <div className="flex flex-row gap-4 text-white">
          <p className="hover:text-orange-400">Home</p>
          <p className="hover:text-orange-400">Reviews</p>
          <p className="hover:text-orange-400">Recipe</p>
          <p className="hover:text-orange-400">About US</p>
        </div>
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
    </div>
  );
};

export default Header;
