import styled from "styled-components";
import { theme } from "@/styles/theme";
import { FormEvent, useContext, useReducer, useState } from "react";
import axios from "axios";
import userContextReducer from "../contexts/user/userContextReducer";
import { initialState } from "../contexts/user/UserContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";

export function Register(): JSX.Element {
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  async function onClick(e: FormEvent) {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/api/users/", {
      name,
      email,
      password,
      role
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
      <h1>Register</h1>
      <form onSubmit={onClick} >
        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <label>Name:</label>
        <input type="name" value={name} onChange={e => setName(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />

        <label>Confirm Password:</label>
        <input type="password" required />

        <label>Select Role:</label>
        <select defaultValue="TEACHER" onChange={e => setRole(e.target.value)} required>
          <option className="default-select" value="" disabled selected>Please select a role</option>
          <option value="TEACHER">Teacher</option>
          <option value="PARENT">Parent</option>
          <option value="STUDENT">Student</option>
        </select>
        <button type="submit">Create Account</button>
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
    width: 800px;
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
