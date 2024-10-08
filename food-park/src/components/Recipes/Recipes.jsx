import { useState, useEffect } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

const Recipes = () => {
  const [foodCard, setFoodCard] = useState([]);

  useEffect(() => {
    fetch(`foods_item.json`)
      .then((res) => res.json())
      .then((data) => setFoodCard(data));
  }, []);

  return (
      <div>
          <h1 className="text-black font-anton text-4xl mt-10 mx-10">OUR RECIPES</h1>
            <div className="border border-orange-400 w-24 mx-10"></div>
      <div className="grid grid-cols-1 lg:grid-cols-6 mt-10">
        <div className="col-span-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {foodCard.map((foodsItem) => (
            <RecipeCard key={foodsItem.id} foodsItem={foodsItem}></RecipeCard>
          ))}
        </div>
        <div className="col-span-2">
          <h1>Carts</h1>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
