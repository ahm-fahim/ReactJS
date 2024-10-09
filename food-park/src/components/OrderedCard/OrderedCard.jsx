import PropTypes from "prop-types";
import SelectedFood from "../SelectedFood/SelectedFood";

const OrderedCard = ({ cook, cookCount, handleCurrentlyCooking }) => {
  return (
    <div className="border border-gray-200 p-1 rounded-lg ">
      <div className="mt-10">
        <h1 className="font-anton text-center text-black text-2xl">
          Want to cook : {cookCount}
        </h1>
        <hr className="mx-10" />
      </div>
      <div>
        {cook.map((items, idx) => (
          <SelectedFood key={idx} items={items} handleCurrentlyCooking={handleCurrentlyCooking}></SelectedFood>
        ))}
      </div>

      <div className="mt-10">
        <h1 className="font-anton text-center text-black text-2xl">
          Currently cooking : 0{" "}
        </h1>
        <hr className="mx-10" />
      </div>
    </div>
  );
};

OrderedCard.propTypes = {
  cook: PropTypes.array,
  cookCount: PropTypes.number,
  handleCurrentlyCooking: PropTypes.func,
};

export default OrderedCard;
