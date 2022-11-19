import styled from "styled-components";
import { theme } from "@/styles/theme";

export default function Login() {
  function onClick() {

  }

  return (
    <Div>
      <h1>Login</h1>
      <form onClick={onClick}>
        <label>Email:</label>
        <input type='email' required />

        <label>Password:</label>
        <input type='pasword' required />
      </form>
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  h1 {
    color: ${theme.bluewood};
  }
`;