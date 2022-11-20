import { useContext, useMemo } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserProvider";
import CourseList from "./CourseList";
import StudentCourseList from "./StudentCourseList";

export default function  Dashboard() {
  const { user, setUser } = useContext(UserContext)

  const courseList = useMemo(() => {
    // return user?.role === "TEACHER" ? <CourseList /> :
     return <StudentCourseList />
  }, [user])

  return (
    <Div>
      {courseList}
    </Div>
  )
}

const Div = styled.div`
  margin: 15px;
`;
