import cover from "../../assets/cover.avif";

const Hero = () => {
  return (
    <div >
      <div
        className="hero min-h-screen rounded-3xl mt-6 mb-14"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      >
        <div className="hero-overlay rounded-3xl bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-white text-7xl font-anton">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5 text-gray-300">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="flex flex-row gap-6 justify-center">
              <button className="btn border-none bg-orange-400 text-white">Explore More</button>
              <button className="btn border-none bg-white text-orange-400">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
