import { Login } from "./components/Login";
import { Notfound } from "./routes/404";

import {
  Route,
  Routes,
} from 'react-router-dom';
import { Register } from "./components/Register";
import TeacherDashboard from "./components/TeacherDashboard";
import PollResponseForm from "./components/PollResponseForm";
import { PollResponsePage } from "./components/PollResponsePage";
import { CreateCoursePage } from "./components/CreateCoursePage";
import { PollCreatePage } from "./components/PollCreatePage";

export default function RouteIndex(): JSX.Element {
  // const { userState: { user } } = useGlobalUserContext();

  return (
    <Routes>
      <Route path="/login" element={true ? <Login /> : <TeacherDashboard />}  />
      <Route path="/register" element={<Register />} />
      <Route path="/pollform/:pollId" element={<PollResponseForm />} />
      <Route path="/dashboard" element={<TeacherDashboard />} />
      <Route path="/polls/:pollId" element={<PollResponsePage />} />
      <Route path="/course/create" element={<CreateCoursePage />} />
      <Route path="/poll/create/:courseId" element={<PollCreatePage />} />
      <Route path="*" element={<Notfound  />}/>
    </Routes>
  );
}
