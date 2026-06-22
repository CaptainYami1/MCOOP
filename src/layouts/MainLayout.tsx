import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterCTA from "../components/FooterCTA";
import ScrollToTop from "../components/ScrollToTop";
import { ROUTES } from "../routes/paths";

const MainLayout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === ROUTES.home;

  return (
    <div className="font-sans text-gray-900 antialiased bg-[#FAFAFA] overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      {isHome && <FooterCTA />}
      <Footer />
    </div>
  );
};

export default MainLayout;
