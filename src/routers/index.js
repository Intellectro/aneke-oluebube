import { createRouter, createWebHistory } from "vue-router"
import { View, Archive } from "../views"

const routes = [
    {
        path: "/",
        name: "view",
        component: View
    },
    {
        path: "/projects",
        name: "archive",
        component: Archive
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;