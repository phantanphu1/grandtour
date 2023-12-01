import { path } from "./path";
import Home from "../pages/home";

import NotFound from "../pages/not_found";


export const route = {
    homepage: {
        path : path.homepage,
        element: <Home />
    },
    home:{
        path:path.home,
        element:<Home/>
    },
    notFound: {
        path : path.notFound,
        element: <NotFound />
    }
}