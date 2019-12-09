import Home from "../page/index.vue";
import homeRouter from "./routes/home";
import Detail from "../page/detail.vue";
const routes = [
    {
        path: "/", 
        component: Home,
        children: homeRouter
    },
    {
        path: "/index", 
        component: Home,
        children: homeRouter
    },
    {
        path: "/detail/:id", 
        component: Detail,
    }
];

export default routes;
