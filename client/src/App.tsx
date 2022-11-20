import { Fragment } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import useDebugRender from "tilg";
import GlobalStyles from "./styles/global";
import NavBar from "./components/layout/NavBar";

export default function App() {
  useDebugRender();
  const location = useLocation();
  const pathname = location.pathname;

  const loadNav = (pathname.includes("login") || pathname.includes("register")) ? "" : <NavBar />;

  return (
      <Fragment>
        <GlobalStyles />
        { loadNav }
        <Outlet />
        <ScrollRestoration />
      </Fragment>
  );
}
