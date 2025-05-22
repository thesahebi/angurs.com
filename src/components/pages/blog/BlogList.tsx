import BlogCardV1 from "./BlogCardV1";
import { articles } from "./blogModel";
import { Link } from "react-router-dom";

function BlogList({ slice, isSeeMore, path = "" , displayClass =""}: any) {
  return (
    <section className="py-24 lg:py-32  dark:bg-main-bg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className=" text-center pb-12 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl xl:text-5xl ">
          Our Blog
        </h2>

        <div className={`grid ${displayClass }`}>
          {articles?.slice(0, slice).map((data, index) => (
            <BlogCardV1 key={index} {...data} blogLink={`${path}/${data.id}`} />
          ))}
        </div>

        {isSeeMore && (
          <div className=" flex justify-center my-3">
            <Link
              to="/blogs"
              title=""
              className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-[#e95420] rounded-full lg:mt-16 hover:bg-black "
              role="button"
            >
              See More
              <svg
                className="w-6 h-6 ml-8 -mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogList;
