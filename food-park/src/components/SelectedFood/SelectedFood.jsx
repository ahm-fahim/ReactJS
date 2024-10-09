import PropTypes from "prop-types";

const SelectedFood = ({ items, handleCurrentlyCooking }) => {
  const { foods_name, cooking_time, calories } = items;

  return (
    <div className="bg-gray-100 p-2 m-2 rounded-lg">
      <div className="grid grid-cols-5 gap-2 items-center">
        <h1 className="text-sm col-span-2">{foods_name}</h1>
        <p className="text-xs text-gray-400">{cooking_time}</p>
        <p className="text-xs text-gray-400">{calories} calories</p>
        <button
          onClick={()=>handleCurrentlyCooking(items)}
          className="bg-orange-400 rounded-full p-1 text-xs text-white"
        >
          Preparing
        </button>
      </div>
    </div>
  );
};

SelectedFood.propTypes = {
  items: PropTypes.object,
  handleCurrentlyCooking: PropTypes.func,
};

export default SelectedFood;
