import { useState, useEffect } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import OrderedCard from "../OrderedCard/OrderedCard";

const Recipes = () => {
  const [foodCard, setFoodCard] = useState([]);
  const [cook, setCook] = useState([]);
  const [cookCount, setCookCount] = useState(0);
  const [currentlyCookCount, setCurrentlyCookCount] = useState(0);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  useEffect(() => {
    fetch(`foods_item.json`)
      .then((res) => res.json())
      .then((data) => setFoodCard(data));
  }, []);

  const handleCook = (selected_food) => {
    const previous_cooked = [...cook, selected_food];
    setCook(previous_cooked);
    setCookCount(cookCount + 1);
  };
  const handleCurrentlyCooking = (cooking_items) => {
    const previous_cooking = [...currentlyCooking, cooking_items];
    setCurrentlyCooking(previous_cooking);

    const remainingCooking = cook.filter(
      (remain) => remain.id != cooking_items.id
    );
    setCook(remainingCooking);
    setCurrentlyCookCount(currentlyCookCount + 1);
    setCookCount(cookCount - 1);
  };
  return (
    <div>
      <h1 className="text-black font-anton text-4xl mt-10 mx-10">
        OUR RECIPES
      </h1>
      <div className="border border-orange-400 w-24 mx-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-6 mt-10 lg:gap-4">
        <div className="col-span-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {foodCard.map((foodsItem) => (
            <RecipeCard
              key={foodsItem.id}
              foodsItem={foodsItem}
              handleCook={handleCook}
            ></RecipeCard>
          ))}
        </div>
        <div className="col-span-2">
          <OrderedCard
            cook={cook}
            cookCount={cookCount}
            handleCurrentlyCooking={handleCurrentlyCooking}
            currentlyCookCount={currentlyCookCount}
            currentlyCooking={currentlyCooking}
          ></OrderedCard>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
