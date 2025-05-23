import React from "react";
import { Article } from "./blogModel"; // Assuming `blogModel.ts` defines the Article type
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const BlogCardV1: React.FC<Article> = ({
  category,
  // date="",
  title,
  image,
  blogLink
}) => {
  return (
    <div className="blog-card">
      <div className="img-div ">
        <img
          src={`${image}?w=1200&h=300&quality=30`}

          alt={title}
          className="rounded-lg h-50 w-100 hover:-zoom-in-50 "
        />
      </div>

      <div className="py-3">
        <span className=" text-[#ea580c] bg-[#ffedd5] px-3 py-1 rounded-full">
          {category}
        </span>
        {/* <span className=" text-gray-600 ps-3">{date}</span> */}
        <p className="text-lg font-semibold pt-2">{title}</p>
      </div>

      <Link to={`${blogLink}`} className="ubun-text flex content-center">
        {" "}
        Read More <FaArrowRight  className="ms-2 mt-1"/>
      </Link>
    </div>
  );
};

export default BlogCardV1;
