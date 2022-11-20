import styled from "styled-components";
import { theme } from "@/styles/theme";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PollList from "./PollList";

export default function CourseList() {
  const mockCourses = [ "Science", "English"];
  const [ activeCourse, setActiveCourse ] = useState< number | null >(null);

  const courseList = mockCourses.map(( name, index ) => {
    const selected = activeCourse === index ? "selected" : "";
    return (
      <div className={`course ${selected}`} key={index} onClick={() => setActiveCourse(index)}>
        <h2>{name}</h2>
        <div className="horizontal-line"></div>
      </div>
    )
  });

  function onClick() {

  }

  return (
    <UpperDiv>
      <Div>
        { courseList }
        <div className="add-course" onClick={onClick}>
          <FontAwesomeIcon className="icon" icon={faCirclePlus} />
        </div>
      </Div>
      { activeCourse === null ? <h1>MindFULL+</h1> : <PollList />}
    </UpperDiv>
  )
}

const UpperDiv = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    color: ${theme.bluewood};
    font-weight: 900;
    margin-right: 35vw;
    margin-top: 30px;
  }
`;

const Div = styled.div`
  width: 250px;
  background-color: ${theme.bluewood};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .course {
    width: 100%;
    background-color: ${theme.bluewood};
    border-radius: 10px;

    h2 {
      color: ${theme.white};
      letter-spacing: 1px;
      padding: 0px 20px;
      line-height: 36px;
    }

    .horizontal-line {
      width: 230px;
      border-bottom: 1px solid ${theme.white};
      margin-left: 10px;
    }
  }

  .course:hover {
    cursor: pointer;
  }

  .course.selected {
    background-color: ${theme.white};
    border-radius: 10px 0 0 10px;

    h2 {
      color: ${theme.bluewood};
    }

    .horizontal-line {
      display: none;
    }
  }

  .add-course {
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.bluewood};
    border-radius: 10px;

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