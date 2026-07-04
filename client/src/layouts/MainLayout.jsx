import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import AppRoutes from "../routes/AppRoutes";
import ScrollToTop from "../components/common/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col">
      {/* Automatically scroll to top on every route change */}
      <ScrollToTop />

      <Navbar />

      <main className="flex-1">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;