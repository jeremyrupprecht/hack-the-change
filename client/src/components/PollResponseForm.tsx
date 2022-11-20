import { useState } from "react";
import axios from "axios";
// Styled Components
import styled from "styled-components";
import { theme } from "@/styles/theme";

function PollResponseForm() {
  const [studentAnswer, setStudentAnswer] = useState("");


  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Handle submit was called: ", e);
    console.log("Student Answer Recorded: ", studentAnswer);

    // Need an axios post here to FastAPI
    axios.post(`http://localhost:8000/userId_TEMP/polls/pollId_TEMP`, {
      pollId: "pollId_TEMP", // pull from context?
      userId: "userId_TEMP", // ^^
      response: studentAnswer
    })
    .then((res) => {
      console.log(res);
    })
  }

  return (
    <Div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Title prop goes here</h1>
        <label>How do you feel about this?</label>
        <input
          type="text"
          name="student-answer"
          value={studentAnswer}
          onChange={(e) => setStudentAnswer(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin-top: 80px;

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 420px;
    padding: 40px;

    label, input, button {
      letter-spacing: 1px;
    }

    label {
      margin: 25px 0 15px;
    }

    input {
      display: block;
      padding: 10px 6px;
      width: 100%;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid ${theme.mediumGray};
      color: ${theme.darkGray};
      background-color: ${theme.background};
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
      width: 90px;
      align-self: center;
    }
  }

  h1 {
    color: ${theme.bluewood};
  }
`;
export default PollResponseForm
