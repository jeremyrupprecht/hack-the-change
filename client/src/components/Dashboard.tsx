import { useContext, useMemo } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserProvider";
import CourseList from "./CourseList";
import StudentCourseList from "./StudentCourseList";

export default function  Dashboard() {
  const { user, setUser } = useContext(UserContext)

  const ele = useMemo(() => {
    return user?.role === "TEACHER" ? <CourseList /> : <StudentCourseList />
  }, [user])

  return (
    <Div>
      {ele}
    </Div>
  )
}

const Div = styled.div`
  margin: 15px;
`;
