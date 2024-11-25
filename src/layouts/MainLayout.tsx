import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Toaster } from "react-hot-toast";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
}
