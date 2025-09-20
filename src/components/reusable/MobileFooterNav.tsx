import React from "react";
// import logo1 from "../../assets/imgs/ZivaraSymbol.svg";
import { IoHomeOutline } from "react-icons/io5";
import { RiBloggerLine } from "react-icons/ri";
import { GoProjectRoadmap } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
  isActive?: boolean;
}

const MobileFooterNav = () => {
  const location = useLocation();

  console.log("location", location.pathname);


  

  const navItems: NavItem[] = [
    {
      label: "Home",
      icon: <IoHomeOutline className="w-6 h-6" />,
      path: "/"
      // isActive: true
    },

    {
      label: "Solutions",
      icon: <GoProjectRoadmap className="w-6 h-6" />,
      path: "/Solutions"
    },
    {
      label: "About",
      icon: <FaRegUser className="w-6 h-6" />,
      path: "/about"
    },
    // {
    //   label: "Pricing",
    //   icon: <IoPricetagOutline className="w-6 h-6" />,
    //   path: "/price"
    // },
    {
      label: "Blog",
      icon: <RiBloggerLine className="w-6 h-6" />,
      path: "/blogs"
    }
  ];

  

  return (
    <div className="fixed bottom-0 left-0 right-0 lg:hidden md:hidden sm:block">
      {/* Main Container */}
      <div className="bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
        {/* Center Logo */}
        {/* <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
            <img src={logo1} alt="" />
          </div>
        </div> */}

        {/* Navigation Items */}
        <div className="max-w-lg mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {navItems.map((item, index) => (

              <Link
                to={item.path}
                key={index}
                className={`flex flex-col items-center gap-1 group ${
                  location.pathname == item.path
                    ? "ubun-text font-bold"
                    : "text-gray-400"
                }`}
              >
                {item.icon}
                <span className="text-xs font-medium group-hover:ubun-text transition-colors">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFooterNav;
