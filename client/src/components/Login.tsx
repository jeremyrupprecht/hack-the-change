import styled from "styled-components";
import { theme } from "@/styles/theme";
import { FormEvent, useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserProvider";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function onClick(e: FormEvent) {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/api/auth/login", {
      email,
      password,
    })
    if (setUser === undefined) return;

    setUser({
      name: res.data.name,
      role: res.data.role,
      id: res.data.id,
      email: res.data.email,
    });

    navigate('/dashboard');
  }

  return (
    <Div>
      <h1>Login</h1>
      <form onSubmit={onClick}>
      <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />

        <div className="reroute">Not a MindFULL+ user yet? Click <a href="http://localhost:3030/register">here</a> to register.</div>
        <button type="submit">Login</button>
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

    .reroute {
      margin-top: 20px;
      font-size: 14px;
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
