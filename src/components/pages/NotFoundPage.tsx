import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <section className="   py-12" id="solutions">
        {/* bg-blue-100 */}
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 h-lvh">
          <div className="text-center py-36 ">

            <p className="text-3xl">Page Not Found 404</p>
 
          <Link to="/" className="text-blue-500 py-12">Back to Home page</Link>
      
          
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
