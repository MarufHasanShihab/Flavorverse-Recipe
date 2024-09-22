import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import RecipeDetail from "../pages/RecipeDetail";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/recipe-detail/:id",
                element : <RecipeDetail/>
            }
        ]
    }
])
export default router;