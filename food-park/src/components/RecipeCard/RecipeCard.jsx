import React from "react";
import PropTypes from "prop-types";
import { CiClock1 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const RecipeCard = ({ foodsItem }) => {
  const {
    cover_image,
    foods_name,
    ingredients,
    cooking_time,
    calories,
    description,
    price,
    speciality: specialty,
  } = foodsItem;
  return (
    <div>
      <div className="card bg-white shadow-xl">
        <figure>
          <img
            className="rounded-2xl p-2 h-48 w-full"
            src={cover_image}
            alt="Foods"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title font-anton text-black mt-[-20px]">{foods_name}</h2>
          <div className="h-40 overflow-y-scroll">
            <ul className="text-gray-400 list-disc">
              <li>
                <span className="text-gray-800">About : </span>
                {description}
              </li>
              <li>
                {" "}
                <span className="text-gray-800">Specialty : </span> {specialty}
              </li>
              <li>
                <span className="text-gray-800">Ingredients : </span>
                <ul className="list-disc ml-10">
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </li>
            </ul>
            <div className="flex flex-row text-sm items-center mt-2">
              <p className="flex flex-row gap-1 items-center ">
                <CiClock1 /> {cooking_time}
              </p>
              <p className="flex flex-row gap-1 items-center ">
                <FaFire />
                {calories}
                <span>Calories</span>
              </p>
            </div>
          </div>

          <div className="card-actions justify-end items-center mt-2">
            <p className="text-2xl text-orange-400">${price}</p>
            <button className="bg-orange-400 text-white px-5 rounded-lg py-1">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  foodsItem: PropTypes.object,
};

export default RecipeCard;
