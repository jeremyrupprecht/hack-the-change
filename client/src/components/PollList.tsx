import styled from "styled-components";
import { theme } from "@/styles/theme";
import Poll from "./Poll"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PollList() {
    const questions= ["Q0", "Q1", "Q2", "Q3"];
    const pollList = questions.map( (Q) => {
      return (
        <Poll name={Q}/>
      )
    });

    return (
      <Div>
        <div className="course-list">
          <h1 className="poll-title">Polls</h1>
          { pollList }
        </div>
        <div className="add-poll">
          <FontAwesomeIcon className="icon" icon={faCirclePlus} />
        </div>
      </Div>
    )

}

const Div = styled.div`
width: 100%;
border-radius: 0 10px 10px 0;
background-color: ${theme.white};

.course-list {
  .poll-title {
    margin: 10px;
  }
}

.add-poll {
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
`;