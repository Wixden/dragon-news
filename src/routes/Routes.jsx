import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../Pages/Home/News/News";
import AuthenticateLayout from "../layouts/AuthenticateLayout";
import Login from "../Pages/Authenticate/Login/Login";
import Register from "../Pages/Authenticate/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Pages/Shared/Terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticateLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0" />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "category",
    element: <Main />,
    children: [
      // {
      //   path: "/",
      //   element: <Category />,
      //   loader: () => fetch("http://localhost:5000/news"),
      // },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-itsakhtar-outlookcom.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-itsakhtar-outlookcom.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
