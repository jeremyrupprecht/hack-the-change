import styled from "styled-components";
import CourseList from "./CourseList";
import PollList from "./PollList";
import { theme } from "@/styles/theme";

export default function TeacherDashboard() {
  return (
    <Div>
      <CourseList />
      <PollList />
    </Div>
  )
}

const Div = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: row;
`;