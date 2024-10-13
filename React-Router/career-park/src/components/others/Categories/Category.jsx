import React from "react";
import PropTypes from "prop-types";
import { FaLaptopCode, FaBullhorn, FaChartLine, FaHeartbeat } from 'react-icons/fa';

const iconMap = {
    FaLaptopCode: FaLaptopCode,
    FaBullhorn: FaBullhorn,
    FaChartLine: FaChartLine,
    FaHeartbeat: FaHeartbeat,
  };
  
const Category = ({ info }) => {
    const { id, category, available_seat, icon } = info;
    const IconComponent = iconMap[icon];
  return (
      <div className="bg-green-50 rounded-md h-40 flex flex-col justify-center items-center">
          {IconComponent && <IconComponent className="text-4xl text-green-500 bg-green-200 p-1 rounded-md" />}
          <h1 className="text-xl text-black mt-2">{category}</h1>
          <p className="text-xs text-gray-500">{available_seat} Jobs Available</p>
    </div>
  );
};

Category.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Category;
