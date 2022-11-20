import styled from "styled-components";
import { theme } from "@/styles/theme";
import Course from "./Course";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CourseList() {
  const mockCourses = [ "Science", "English"];
  const courseList = mockCourses.map( (name) => {
    return (
      <Course name={name} />
    )
  });

  function onClick() {

  }

  return (
    <Div>
      <div className="course-list">
        { courseList }
      </div>
      <div className="add-course" onClick={onClick}>
        <FontAwesomeIcon className="icon" icon={faCirclePlus} />
      </div>
    </Div>
  )
}

const Div = styled.div`
  width: 250px;
  background-color: ${theme.bluewood};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;

  .add-course {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .icon {
      color: ${theme.white};
      width: 35px;
      height: 35px;
    }

    .icon:hover {
      cursor: pointer;
    }
  }
`;