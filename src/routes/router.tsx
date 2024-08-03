import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./routes";
// import FormPage from "../pages/FormPage";
import HomePage from "../pages/HomePage";
import OffSteps from "../pages/OffSteps";
import OnSteps from "../pages/OnSteps";

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <HomePage />,
  },
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.OFF,
    element: <OffSteps />,
  },
  {
    path: ROUTES.ON,
    element: <OnSteps />,
  },
]);
