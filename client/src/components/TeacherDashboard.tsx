import { useContext, useMemo } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserProvider";
import CourseList from "./CourseList";
import StudentCourseList from "./StudentCourseList";

export default function  Dashboard() {
  const { user, setUser } = useContext(UserContext)

  courseList = useMemo(() => {
    if (user?.role === "TEACHER") {
      return <CourseList />
    } else if (user?.role === "STUDENT") {
      return <StudentCourseList />
    }
  })

  return (
    <Div>
      <CourseList />
    </Div>
  )
}

const Div = styled.div`
  margin: 15px;
`;
