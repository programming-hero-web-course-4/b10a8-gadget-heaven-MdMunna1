import { Outlet } from "react-router-dom";
import Navber from "./component/Navber";
import Footer from "./component/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Toaster />
      <header className="w-11/12 mx-auto border border-2 py-2">
        <Navber />
      </header>
      <main className="w-11/12 mx-auto">
        <Outlet />
      </main>
      <footer className="w-11/12 mx-auto">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
