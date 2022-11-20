import styled from "styled-components";
import CourseList from "./CourseList";
import { theme } from "@/styles/theme";

export default function TeacherDashboard() {
  return (
    <Div>
      <CourseList />
    </Div>
  )
}

const Div = styled.div`
  margin: 15px;
`;