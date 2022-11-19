import { Fragment } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import useDebugRender from "tilg";
import GlobalStyles from "./styles/global";

export default function App() {
  useDebugRender();

  return (
      <Fragment>
        <GlobalStyles />
        <Outlet />
        <ScrollRestoration />
      </Fragment>
  );
}
