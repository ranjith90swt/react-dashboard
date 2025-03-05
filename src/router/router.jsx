import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../admin/Dashboard";
import EcommercePage from "../admin/pages/EcommercePage";


const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                path:'/',
                element: <Dashboard/>
            },
            {
                path:'/ecommerce',
                element: <EcommercePage/>
            }
        ]

    }
])

export default router;