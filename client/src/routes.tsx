import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router-dom";

const Index = lazy(() => import("@/routes/index"));
const Login = lazy(() => import("@/components/Login"));
const Notfound = lazy(() => import("@/routes/404"));
const Register = lazy(() => import("@/components/Register"));

export const routes: Array<RouteObject> = [
  {
    index: true,
    element: (
      <Suspense>
        <Index />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense>
        <Notfound />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense>
        <Login/>
      </Suspense>
    )
  },
  {
    path: "/register",
    element: (
      <Suspense>
        <Register />
      </Suspense>
    )
  }
];

export default routes;
