import PropTypes from "prop-types";

const CurrentlyCooking = ({ currentCook }) => {
  const { foods_name, cooking_time, calories } = currentCook;
  return (
    <div className="bg-gray-100 p-2 m-2 rounded-lg">
      <div className="grid grid-cols-4 gap-2 items-center">
        <h1 className="text-sm col-span-2">{foods_name}</h1>
        <p className="text-xs text-gray-400">{cooking_time}</p>
        <p className="text-xs text-gray-400">{calories} calories</p>
      </div>
    </div>
  );
};

CurrentlyCooking.propTypes = {
  currentCook: PropTypes.object,
};

export default CurrentlyCooking;
