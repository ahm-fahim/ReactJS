import PropTypes from "prop-types";
import SelectedFood from "../SelectedFood/SelectedFood";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";

const OrderedCard = ({
  cook,
  cookCount,
  handleCurrentlyCooking,
  currentlyCookCount,
  currentlyCooking,
}) => {
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
          <SelectedFood
            key={idx}
            items={items}
            handleCurrentlyCooking={handleCurrentlyCooking}
          ></SelectedFood>
        ))}
      </div>

      <div className="mt-10">
        <h1 className="font-anton text-center text-black text-2xl">
          Currently cooking : {currentlyCookCount}
        </h1>
              <hr className="mx-10" />
              <div>
                  {currentlyCooking.map((currentCook ,idx)=> <CurrentlyCooking  key = {idx} currentCook ={currentCook}></CurrentlyCooking>)}
              </div>
      </div>
    </div>
  );
};

OrderedCard.propTypes = {
  cook: PropTypes.array,
  cookCount: PropTypes.number,
  handleCurrentlyCooking: PropTypes.func,
  currentlyCookCount: PropTypes.number,
  currentlyCooking: PropTypes.array,
};

export default OrderedCard;
