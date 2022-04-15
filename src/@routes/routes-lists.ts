import { RouteList } from "@interfaces/route.interface";
import { lazy } from "react";

const Dashboard = lazy(() => import("@pages/dashboard/Dashboard"));
const Products = lazy(() => import("@pages/products/Products"));
const AddProducts = lazy(
  () => import("@pages/products/AddProducts/AddProduct")
);
const Category = lazy(() => import("@pages/products/category/Category"));
const NotFound = lazy(() => import("@pages/notfound/NotFound"));

export const routeList: RouteList[] = [
  {
    path: "dashboard",
    component: Dashboard,
  },
  {
    path: "products",
    component: Products,
  },
  {
    path: "products/category",
    component: Category,
  },
  {
    path: "products/addProduct",
    component: AddProducts,
  },
  {
    path: "notfound",
    component: NotFound,
  },
];
