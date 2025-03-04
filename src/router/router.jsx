import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminLayout from "../admin/AdminLayout";
import Dashboard from "../admin/Dashboard";


const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                path:'/',
                element: <Dashboard/>
            }
        ]

    }
])

export default router;