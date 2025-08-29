import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
