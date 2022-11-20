import { Login } from "./components/Login";
import { Notfound } from "./routes/404";

import {
  Route,
  Routes,
} from 'react-router-dom';
import { Register } from "./components/Register";
import TeacherDashboard from "./components/TeacherDashboard";
import PollResponseForm from "./components/PollResponseForm";

export default function RouteIndex(): JSX.Element {
  // const { userState: { user } } = useGlobalUserContext();

  return (
    <Routes>
      <Route path="/login" element={true ? <Login /> : <TeacherDashboard />}  />
      <Route path="/register" element={<Register />} />
      <Route path="/pollform/:pollId" element={<PollResponseForm />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Notfound  />}/>
    </Routes>
  );
}
