import CookieConsentBanner from "@/components/CookieConsentBanner";
import CookieSettingsButton from "@/components/CookieSettingsButton";
// import CookieStatusIndicator from "@/components/CookieStatusIndicator";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ScrollToTop from "@/components/ScrollToTop";
import { Outlet } from "react-router-dom";
 import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
    <div
      className="max-w-7xl mx-auto min-h-[100dvh] grid antialiased gap-8"
      style={{
        gridTemplateRows: "auto 1fr auto",
        gridTemplateColumns: "minmax(0, 1fr)",
      }}
    >
      <ScrollToTop />
      <NavBar />
      <main className="max-w-6xl mx-auto w-full px-4">
        <Outlet />
      </main>
      <ToastContainer />
      <Footer />
      <CookieConsentBanner />
      <CookieSettingsButton />
      {/* <CookieStatusIndicator /> */}
    </div>
  );
};
export default Layout;
