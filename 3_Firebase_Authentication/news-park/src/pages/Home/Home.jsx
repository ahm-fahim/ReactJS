import NewsCard from "../../components/NewsCard/NewsCard";
import LeftNav from "../../components/shared/LeftNav/LeftNav";

const Home = () => {
  return (
    <div className="grid grid-cols-5 mr-2">
      <div className="sticky">
        <LeftNav />
      </div>
      <div className="col-span-4 ">
        <NewsCard />
      </div>
    </div>
  );
};

export default Home;
