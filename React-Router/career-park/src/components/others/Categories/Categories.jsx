import { useState, useEffect } from "react";
import Category from "./Category";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="m-10">
      <div className="flex flex-col justify-center items-center m-14 ">
        <h1 className="text-3xl text-black font-anton">Job Category List</h1>
        <p className="text-gray-500 text-sm">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {category.map((info) => (
          <Category key={info.id} info={info}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
