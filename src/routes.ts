import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Technology } from "./components/pages/Technology";
import { Offers } from "./components/pages/Offers";
import { Network } from "./components/pages/Network";
import { NotFound } from "./components/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "technology", Component: Technology },
      { path: "offers", Component: Offers },
      { path: "network", Component: Network },
      { path: "*", Component: NotFound },
    ],
  },
]);
