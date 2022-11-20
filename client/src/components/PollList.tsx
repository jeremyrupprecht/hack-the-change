import styled from "styled-components";
import { theme } from "@/styles/theme";
import Poll from "./Poll"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function PollList({courseId}: {courseId: string | null}) {
    // const questions= ["Q0", "Q1", "Q2", "Q3"];
    const [questions, setQuestions] = useState([])

    async function fetchQuestions() {
        const foundQuestions = await axios.get(`http://localhost:3000/api/polls/${courseId}`);
        setQuestions(foundQuestions.data.data);
    }

    useMemo(() => {
      fetchQuestions()
    }, [courseId]);

    const pollList = questions.map((Q: {question: string, id: string}) => {
      return (
        <Link to={`/polls/${Q.id}`}>
          <Poll name={Q.question}/>
        </Link>
      )
    });
    const navigate = useNavigate()
    function onClick() {
      navigate(`/poll/create/${courseId}`);
    }

    return (
      <Div>
        <div className="course-list">
          <h1 className="poll-title">Polls</h1>
          { pollList.length ? pollList : <h1>MindFULL+</h1>}
        </div>
        <div onClick={onClick} className="add-poll">
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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: inherit;
    border-radius: 10px;

    .icon {
      color: ${theme.bluewood};
      width: 35px;
      height: 35px;
    }

    .icon:hover {
      cursor: pointer;
    }
  }
`;
