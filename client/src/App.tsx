import { Fragment } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import useDebugRender from "tilg";
import GlobalStyles from "./styles/global";
import NavBar from "./components/layout/NavBar";

export default function App() {
  useDebugRender();

  return (
      <Fragment>
        <GlobalStyles />
        <NavBar />
        <Outlet />
        <ScrollRestoration />
      </Fragment>
  );
}
