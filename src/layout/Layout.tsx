import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
        className="max-w-7xl mx-auto min-h-[100dvh] grid antialiased gap-8"
        style={{
          gridTemplateRows: "auto 1fr auto",
          gridTemplateColumns: "minmax(0, 1fr)",
        }}
      >
      <NavBar />
      <main className="max-w-5xl mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;