import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex justify-items-center bg-gray-100 rounded-md p-2 m-4 text-xl">
      <div className="bg-purple-600 text-white w-40 p-1 rounded-md ">Latest News </div>
      <Marquee pauseOnHover={true}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint enim reprehenderit vel vero non cupiditate numquam obcaecati? Facere aut alias voluptate numquam perferendis illum eveniet nostrum non ipsa esse ratione, vitae at debitis sequi! Asperiores rerum perspiciatis nemo velit harum laborum sequi tenetur magnam nulla laboriosam? Ipsum repudiandae ea praesentium in similique. Tenetur ratione nisi inventore sit dignissimos aut pariatur, harum voluptate praesentium suscipit recusandae temporibus necessitatibus in, architecto accusamus aperiam porro rerum dolore repellat totam. In dolor perferendis vitae debitis aperiam deleniti at odio unde exercitationem eius molestiae quia commodi nulla quod aliquid, qui enim ipsum porro reprehenderit! Numquam.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
