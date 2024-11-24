import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-anton mb-2">News Categories</h2>
      <div className="grid grid-rows-1">
        {categories.map((category) => (
          <Link to={`/category/${category.id}`} className="text-lg text-gray-600 hover:text-black hover:bg-base-200 pl-5 py-3" key={category.id}>{category.name}</Link>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
