import { useEffect, useState } from "react";
import Card from "./Card";

const NewsCard = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`news.json`)
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div
      className=" bg-gray-50 rounded-md lg:px-20 px-5 lg:py-10 py-5"
    >
      {news.map((newsProps) => (
        <Card key={newsProps._id} newsProps={newsProps}></Card>
      ))}
    </div>
  );
};

export default NewsCard;
