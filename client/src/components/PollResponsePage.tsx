import axios from "axios";
import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../styles/theme";

export function PollResponsePage() {
  const pollId = useParams<{ pollId: string }>().pollId;
  const [pollResponses, setPollResponses] = useState([]);
  const navigate = useNavigate();
  async function fetchResponses() {
    const foundResponses = await axios.get(`http://localhost:3000/api/polls/${pollId}/responses`);
    setPollResponses(foundResponses.data.data);
  }

  useMemo(() => {
    fetchResponses();
  }, [pollId])

  const onClick = () => {
    navigate('/dashboard');
  }

  const pollResponseList = pollResponses.map((response: any) => {
    return(
      <div key={response.id}>
        <h2>{response.response}</h2>
        <p>{`This student believed the lesson was ${response.sentiment}. They felt ${response.feeling}, about ${response.method} because ${response.reason}`}</p>
      </div>
    )
  })
  return (
    <div>
      {pollResponseList.length ?
      <Container>
      {pollResponseList}
      <button onClick={onClick}>Head Back</button>
      </Container> :
      <Container>
      <h1>No Responses Yet</h1>
      <button onClick={onClick}>Head Back</button>
      </Container>
      }
    </div>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: ${theme.bluewood};
    font-weight: 900;
    margin-top: 30px;
    align-self: center;
  }
  button {
      background: #3b3c3e;
      border: 0;
      padding: 10px 20px;
      margin-top: 40px;
      color: white;
      border-radius: 20px;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      width: 120px;
      align-self: center;
    }
`
