import { useState } from "react";

function PollResponseForm() {
  const [studentAnswer, setStudentAnswer] = useState("");


  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Handle submit was called: ", e);
    console.log("Student Answer Recorded: ", studentAnswer);

    // Need an axios post here to FastAPI
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Title prop goes here</h1>
      <input
        type="text"
        name="student-answer"
        value={studentAnswer}
        onChange={(e) => setStudentAnswer(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default PollResponseForm
