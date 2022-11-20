
import { Outlet, ScrollRestoration, useLocation, BrowserRouter } from "react-router-dom";
import useDebugRender from "tilg";
import GlobalStyles from "./styles/global";
import NavBar from "./components/layout/NavBar";
import RouteIndex from "./routes";

export default function App() {
  useDebugRender();
  return (
      <BrowserRouter>
      <GlobalStyles />
        <NavBar />
        <RouteIndex />
        <Outlet />
      </BrowserRouter>
  );
}
