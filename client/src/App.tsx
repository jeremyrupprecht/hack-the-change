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
        {/* Comment NavBar if not logged in */}
        {/* <NavBar /> */}
        <Outlet />
        <ScrollRestoration />
      </Fragment>
  );
}
