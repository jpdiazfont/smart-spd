import { RouterProvider, createBrowserRouter } from "react-router-dom";


import HomeScreen from "../screens/home/homeScreen";
import AuthScreen from "../screens/auth/authScreen";
import DashboardScreen from "../screens/dashboard/dashboardScreen";
import NotFoundScreen from "../screens/notFound/homeScreen";
import RegisterScreen from "../screens/register/registerScreen";


const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen/> ,
  },
  {
    path: "/auth",
    element: <AuthScreen/> ,
  },
  {
    path: "/dashboard",
    element: <DashboardScreen/> ,
  },
  {
    path: "/register",
    element: <RegisterScreen/> ,
  },
  {
    path: "*",
    element: <NotFoundScreen/> ,
  }
]);



const Router = () =>{

  return (
    <RouterProvider router={ROUTER} />
  )

}

export default Router