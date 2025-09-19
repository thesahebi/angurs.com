import { Outlet } from "react-router-dom";
import TopHeaderV1 from "../reusable/TopHeaderV1";
import FooterV1 from "./footers/FooterV1";
// import CursorEffect from "../reusable/CursorEffect";
// import MobileFooterNav from "../reusable/MobileFooterNav";
import { useScrollToTop } from "../ScrollToTop";
import { IoArrowUpOutline } from "react-icons/io5";

const LayoutPage = () => {
  const { isVisible, scrollToTop } = useScrollToTop();
  return (
    <div className="wrapper">
      {/* <CursorEffect /> */}
      <TopHeaderV1 />
      <Outlet />
      <FooterV1 />
      {/* <MobileFooterNav /> */}
      <div>
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-20 right-4 z-50 bg-ubun text-white p-2 rounded-full"
            aria-label="Scroll to top"
          >
            <IoArrowUpOutline className="text-2xl" />
          </button>
        )}
        {/* Rest of your page content */}
      </div>
    </div>
  );
};

export default LayoutPage;
