import { createBrowserRouter } from "react-router";
import HomeLoyout from "../Layout/HomeLayout/HomeLoyout";
import Home from "../Page/Home";
import LeftAside from "../Component/HomeLayout/LeftAside";
import RifgtAside from "../Component/HomeLayout/RifgtAside";
import CaregoryNews from "../Page/CaregoryNews";
import Login from "../Page/Login";
import Register from "../Page/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../Page/NewsDetails";
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
    path: "/auth",
    element:<AuthLayout></AuthLayout> ,


    children:[
      {
        path:"/auth/login",
        element:<Login></Login>
      },
       {
        path:"/auth/register",
        element:<Register></Register>
      },
    ],
  },
  {
    path: "/news-details/id",
    element: <NewsDetails></NewsDetails> ,
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },

]);
export default router;