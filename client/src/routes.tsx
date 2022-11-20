import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router-dom";

const Index = lazy(() => import("@/routes/index"));
const Login = lazy(() => import("@/components/Login"));
const Notfound = lazy(() => import("@/routes/404"));
const Register = lazy(() => import("@/components/Register"));
const TeacherDashboard = lazy(() => import ("@/components/TeacherDashboard"));
const PollResponseForm = lazy(() => import ("@/components/PollResponseForm"));

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
  },
  {
    path: "/dashboard", // all dashboards route to here
    element: (          // TODO: add conditionals to route to appropriate dashboards
      <Suspense>
        <TeacherDashboard />
      </Suspense>
    )
  },
  {
    path: "/pollform", // change later
    element: (
      <Suspense>
        <PollResponseForm />
      </Suspense>
    )
  }
];

export default routes;
