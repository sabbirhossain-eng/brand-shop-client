import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import Home from "../../Pages/Home/Home";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import MyCart from "../../Pages/MyCart/MyCart";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Login/Registration";
import PrivetRoute from "./PrivetRoute";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import Apple from "../../Pages/BrandPage/Apple";
import Samsung from "../../Pages/BrandPage/Samsung";
import Sony from "../../Pages/BrandPage/Sony";
import Google from "../../Pages/BrandPage/Google";
import Vivo from "../../Pages/BrandPage/Vivo";
import Xiaomi from "../../Pages/BrandPage/Xiaomi";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProduct',
                element: <PrivetRoute>
                            <AddProduct></AddProduct>
                        </PrivetRoute>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path:'/Apple',
                element: <Apple></Apple>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: '/Samsung',
                element: <Samsung></Samsung>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: '/Sony',
                element: <Sony></Sony>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: '/Google',
                element: <Google></Google>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: '/Vivo',
                element: <Vivo></Vivo>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: '/Xiaomi',
                element: <Xiaomi></Xiaomi>,
                loader: () => fetch('http://localhost:5000/product')
            }
        ]
    }
]);
export  default router;