import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Masses } from "./pages/Masses";
import { Sacraments } from "./pages/Sacraments";
import { Pastorals } from "./pages/Pastorals";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "sobre", Component: AboutUs },
      { path: "missas", Component: Masses },
      { path: "sacramentos", Component: Sacraments },
      { path: "pastorais", Component: Pastorals },
      { path: "contato", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
