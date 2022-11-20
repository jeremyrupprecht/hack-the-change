import styled from "styled-components";
import { theme } from "@/styles/theme";

export function Register(): JSX.Element {
  async function onClick(formData: any) {
    console.log(formData)
  }
  return (
    <Div>
      <h1>Register</h1>
      <form onClick={onClick}>
        <label>Email:</label>
        <input type="email" required />

        <label>Password:</label>
        <input type="password" required />

        <label>Confirm Password:</label>
        <input type="password" required />

        <label>Select Role:</label>
        <select required>
          <option className="default-select" value="" disabled selected>Please select a role</option>
          <option value="teacher">Teacher</option>
          <option value="parent">Parent</option>
          <option value="student">Student</option>
        </select>

        <button>Create Account</button>
      </form>
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 80px;

  h1 {
    color: ${theme.bluewood}
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 420px;
    padding: 40px;

    label, input, button {
      letter-spacing: 1px;
    }

    label {
      margin: 25px 0 15px;
      text-transform: uppercase;
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

    select {
      width: 150px;
      height: 24px;
      border: none;
      border-radius: 2px;
      background-color: inherit;
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
      align-self: center;
    }
  }
`;
