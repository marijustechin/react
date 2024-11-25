import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Layouts
import MainLayout from "../../layouts/MainLayout";

// Pages
import HomePage from "../../pages/Home";
import LoginRegisterPage from "../../pages/LoginRegister";
import { ProductsPage } from "../../pages/eshop/ProductsPage";
import { GamePage } from "../../pages/game/Game";
import ContactsPage from "../../pages/Contacts";
import { productHydrateFallback, productLoader } from "./productLoader";
import FormsPage from "../../pages/forms/FormsPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="prisijungti" element={<LoginRegisterPage />} />
      <Route
        path="prekes"
        loader={productLoader}
        HydrateFallback={productHydrateFallback}
        element={<ProductsPage />}
      />
      <Route path="formos" element={<FormsPage />} />
      <Route path="zaidimas" element={<GamePage />} />
      <Route path="kontaktai" element={<ContactsPage />} />
    </Route>
  )
);

export const navLinks = [
  { title: "Pradžia", href: "/" },
  { title: "Prisijungti", href: "/prisijungti" },
  { title: "Prekės", href: "/prekes" },
  { title: "Formos", href: "/formos" },
  { title: "Žaidimas", href: "/zaidimas" },
  { title: "Kontaktai", href: "/kontaktai" },
];
