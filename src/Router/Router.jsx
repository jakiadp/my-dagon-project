import { createBrowserRouter } from "react-router";
import HomeLoyout from "../Layout/HomeLayout/HomeLoyout";
import Home from "../Page/Home";
import LeftAside from "../Component/HomeLayout/LeftAside";
import RifgtAside from "../Component/HomeLayout/RifgtAside";
import CaregoryNews from "../Page/CaregoryNews";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLoyout></HomeLoyout>,
    children: [
           {
            path:"",
            element:<Home></Home>,
           },
           {
            path:"/category/:id",
            element: <CaregoryNews></CaregoryNews>,
            loader:()=> fetch("/news.json"),
           },
         
    ]
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