import PropTypes from "prop-types";
import { useState } from "react";
import { CiShare2 } from "react-icons/ci";
import { FaBookmark, FaEye, FaStar, FaStarHalf } from "react-icons/fa";

const Card = ({ newsProps }) => {
  const { title, rating, total_view, author, image_url, details } = newsProps;

  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="bg-white p-4 rounded-md mt-5">
      <div className="flex justify-between bg-base-200 p-2 items-center rounded-md">
        <div className="flex gap-2">
          <img className="w-12 rounded-full" src={author.img} alt="" />
          <div>
            <h2 className="font-bold">{author.name}</h2>
            <p className="text-xs text-gray-500">{author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-3 text-3xl">
          <FaBookmark />
          <CiShare2 />
        </div>
      </div>
      <div className="my-4">
        <h1 className="block text-2xl font-bold py-2">{title}</h1>
        <img className="w-full" src={image_url} alt="" />
        <p className="text-gray-500 py-2">
          {isReadMore ? details : `${details.slice(0, 300)}.......`}
        </p>
        <span
          onClick={toggleReadMore}
          className="text-orange-400 font-bold mt-2"
        >
          {isReadMore ? "Read Less" : "Read More"}
        </span>
      </div>

      <hr className="px-20" />
      <div className="flex justify-between p-2 items-center">
        <div className="flex items-center gap-2">
          <FaStar className="text-orange-400 text-2xl" />
          <FaStar className="text-orange-400 text-2xl" />
          <FaStar className="text-orange-400 text-2xl" />
          <FaStar className="text-orange-400 text-2xl" />
          <FaStarHalf className="text-orange-400 text-2xl" />
          <p>{rating.number}</p>
        </div>

        <div className="flex items-center gap-2">
          <FaEye />
          <p>{total_view}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  newsProps: PropTypes.object.isRequired,
};

export default Card;
