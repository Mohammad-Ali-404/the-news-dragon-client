/* eslint-disable no-unused-vars */
import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children: [
            {
                path:'/',
                element:<Navigate to='/category/0'></Navigate>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'terms',
                element:<Terms></Terms>
            }
        ]
    },
    {
        path:'category',
        element:<Main></Main>,
        children:[

            {
                path:':id',
                element:<Category></Category>,
                loader: ({params}) => fetch(`https://the-news-dragon-server-wpmohammad1.vercel.app/categories/${params.id}`)
            },
            
        ]
    },
    {
          path:'news',
          element:<NewsLayout></NewsLayout>,
          children:[
            {
                path:":id",
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader:({params}) => fetch(`https://the-news-dragon-server-wpmohammad1.vercel.app/news/${params.id}`)
            }
          ]
        
    }
])

export default router;