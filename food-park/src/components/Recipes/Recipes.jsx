import { useState, useEffect } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import OrderedCard from "../OrderedCard/OrderedCard";

const Recipes = () => {
  const [foodCard, setFoodCard] = useState([]);
  const [cook, setCook] = useState([]);
  const [cookCount, setCookCount] = useState(0);

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
    console.log("currently cooked hi hi hi", cooking_items.id);
  };
  return (
    <div>
      <h1 className="text-black font-anton text-4xl mt-10 mx-10">
        OUR RECIPES
      </h1>
      <div className="border border-orange-400 w-24 mx-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-6 mt-10 gap-4">
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
          ></OrderedCard>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
