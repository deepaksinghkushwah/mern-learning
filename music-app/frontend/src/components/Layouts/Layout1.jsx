import { Outlet } from "react-router-dom";
import Footer from "../page-parts/Footer";
import Header from "../page-parts/Header";

const Layout1 = () => {
  return (
    <>
      <div className="m-auto max-w-5xl border border-black bg-blue-950 text-white my-10 rounded-xl">
        <Header />
        <div className="p-10">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout1;
