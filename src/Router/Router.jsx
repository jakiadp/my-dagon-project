import { createBrowserRouter } from "react-router";
import HomeLoyout from "../Layout/HomeLayout/HomeLoyout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLoyout></HomeLoyout>,
  },


    {
    path: "/",
    element: <h2>Authentication layout</h2>,
  },
  {
    path: "/auth",
    element: <h2>Authentication layout1</h2>,
  },
  {
    path: "/news",
    element: <h2>Authentication layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },

]);
export default router;