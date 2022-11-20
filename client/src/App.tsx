
import { Outlet, BrowserRouter } from "react-router-dom";
import useDebugRender from "tilg";
import GlobalStyles from "./styles/global";
import NavBar from "./components/layout/NavBar";
import RouteIndex from "./routes";
import { UserContext } from "./contexts/UserProvider";
import { useState } from "react";
import { IUser } from "./contexts/user/UserContext";

export default function App() {
  const [user, setUser] = useState(undefined as IUser | undefined,);
  useDebugRender();
  return (
    <UserContext.Provider value={
      {user, setUser}
    }>
      <BrowserRouter>
      <GlobalStyles />
        <NavBar />
        <RouteIndex />
        <Outlet />
      </BrowserRouter>
    </UserContext.Provider>
  );
}
