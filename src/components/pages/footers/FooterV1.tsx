import { Link } from "react-router-dom";
import logo1 from "../../../assets/imgs/Angurs1.svg";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { scrollToTheTopOfPage } from "@/lib/utils";
const currentdata = new Date();
const year = currentdata.getFullYear();
const FooterV1 = () => {
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24 dark:bg-black">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <Link to="/" onClick={scrollToTheTopOfPage}> <img className="w-auto h-36" src={logo1} alt="" /></Link>

            {/* <p className="text-base leading-relaxed text-gray-600 mt-7">
              Cloud-first solutions that scale with your business<br></br>

            </p> */}

            <ul className="flex items-center space-x-3 mt-9">


              <li>
                <a
                  href="https://www.instagram.com/angursofficial/"
                  target="_blank"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-12 h-12 hover:bg-ubun focus:bg-ubun"
                >
                  <FaInstagram fontSize={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/angurs-web-solutions/about/"
                  target="_blank"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-12 h-12 hover:bg-ubun focus:bg-ubun"
                >
                  <FaLinkedin fontSize={20} />
                </a>
              </li>


            </ul>
          </div>
          {/* SOlutions */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Solutions
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:ubun-text focus:ubun-text dark:text-white "
                >
                  {" "}
                  Cloud Migration Solutions{" "}
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:ubun-text focus:ubun-text dark:text-white"
                >
                  {" "}
                  Web Design & Development{" "}
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:ubun-text focus:ubun-text dark:text-white"
                >
                  {" "}
                  Hosting & Domains{" "}
                </Link>
              </li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Resources
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/Resources/Blog"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:ubun-text focus:ubun-text dark:text-white "
                >
                  {" "}
                  Blog{" "}
                </Link>
              </li>

              <li>
                <Link
                  to="/Resources/Case Studies"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:ubun-text focus:ubun-text dark:text-white"
                >
                  {" "}
                  Case Studies{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Connect
            </p>
            <ul className="mt-6 space-y-4">
              {/* Email */}
              <li>
                <a
                  href="mailto:Support@angurs.com"
                  title="Email Support"
                  className="text-base text-black transition-all duration-200 hover:ubun-text focus:ubun-text dark:text-white"
                >
                  Email: Support@angurs.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:Support@angurs.com"
                  title="Email Support"
                  className="text-base text-black transition-all duration-200 hover:ubun-text focus:ubun-text dark:text-white"
                >
                  Address: 1355 n sandburg ter 2307, Chicago, IL 60610
                </a>
              </li>
              <li>
                <a
                  href="mailto:Support@angurs.com"
                  title="Email Support"
                  className="text-base text-black transition-all duration-200 hover:ubun-text focus:ubun-text dark:text-white"
                >
                  Phone: +1 (630) 923-4653
                </a>
              </li>

              {/* Social Media */}
              {/* <li className="flex space-x-3 mt-2">
                <a
                  href="https://www.instagram.com/angursofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-12 h-12 hover:bg-ubun focus:bg-ubun"
                >
                  <FaInstagram fontSize={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/angurs-web-solutions/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-12 h-12 hover:bg-ubun focus:bg-ubun"
                >
                  <FaLinkedin fontSize={20} />
                </a>
              </li> */}
            </ul>
          </div>

          {/* <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Connect
            </p>
            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <Link
                  to="/"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:ubun-text focus:ubun-text dark:text-white"
                >
                  {" "}
                  Email address: Support@angurs.com
                </Link>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/angursofficial/"
                  target="_blank"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-12 h-12 hover:bg-ubun focus:bg-ubun"
                >
                  <FaInstagram fontSize={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/angurs-web-solutions/about/"
                  target="_blank"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-12 h-12 hover:bg-ubun focus:bg-ubun"
                >
                  <FaLinkedin fontSize={20} />
                </a>
              </li>

            </ul>
          </div> */}
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          © Copyright {year}, All Rights Reserved by Angurs Solutions LLC
        </p>
      </div>
    </section >
  );
};

export default FooterV1;
