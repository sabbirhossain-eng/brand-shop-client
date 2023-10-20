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
import Details from "../../Pages/Details/Details";
import Update from "../../Pages/Update/Update";
import FaqAndAns from "../../Pages/Faq/FaqAndAns";

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
                element: <PrivetRoute>
                            <MyCart></MyCart>
                        </PrivetRoute>,
                 loader: () => fetch('https://technology-and-electronics-brand-shop-server-side-c5q6iwxvi.vercel.app/cart')   
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
                path: '/update/:id',
                element: <PrivetRoute>
                    <Update></Update>
                </PrivetRoute>,
                loader: ({params}) => fetch(`https://technology-and-electronics-brand-shop-server-side-c5q6iwxvi.vercel.app/product/${params.id}`),
            },
            {
                path: '/details/:id',
                element: <Details></Details>
                
              },
            {
                path:'/Apple',
                element: <Apple></Apple>,
                loader: () => fetch('https://technology-and-electronics-brand-shop-server-side-c5q6iwxvi.vercel.app/product')
            },
            {
                path: '/Samsung',
                element: <Samsung></Samsung>,
                loader: () => fetch('https://technology-and-electronics-brand-shop-server-side-c5q6iwxvi.vercel.app/product')
            },
            {
                path: '/Sony',
                element: <Sony></Sony>,
                loader: () => fetch('https://technology-and-electronics-brand-shop-server-side-c5q6iwxvi.vercel.app/product')
            },
            {
                path: '/Google',
                element: <Google></Google>,
                loader: () => fetch('https://technology-and-electronics-brand-shop-server-side-c5q6iwxvi.vercel.app/product')
            },
            {
                path: '/Vivo',
                element: <Vivo></Vivo>,
                loader: () => fetch('https://technology-and-electronics-brand-shop-server-side-c5q6iwxvi.vercel.app/product')
            },
            {
                path: '/Xiaomi',
                element: <Xiaomi></Xiaomi>,
                loader: () => fetch('https://technology-and-electronics-brand-shop-server-side-c5q6iwxvi.vercel.app/product')
            },
            {
                path:'/faq',
                element: <FaqAndAns></FaqAndAns>
            }
        ]
    }
]);
export  default router;