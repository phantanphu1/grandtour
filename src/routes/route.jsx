import { path } from "./path";
import Home from "../pages/home";

import NotFound from "../pages/not_found";


export const route = {
    home: {
        path : path.home,
        element: <Home />
    },
    notFound: {
        path : path.notFound,
        element: <NotFound />
    }
}