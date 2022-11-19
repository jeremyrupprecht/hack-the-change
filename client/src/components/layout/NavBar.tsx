import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function NavBar(): JSX.Element {
  return (
    <Nav>
      <div className="menu left-side">
        <Link to="/">
        </Link>
        <div className="right-side">
          <NavLink
            className="nav-link"
            to="/home"
          >
          </NavLink>
          <NavLink className="nav-link" to="/activities">
          </NavLink>
          <NavLink className="nav-link" to="/settings">
          </NavLink>
        </div>
      </div>
    </Nav>
  );
}

const Nav = styled.div`
  display: flex;
  justify-content: center;
  background-color: #1cca9e;
  height: 60px;
  width: 100%;
  box-shadow: 0 2px 8px rgb(0 0 0 / 8%);

  .menu {
    padding: 0 24px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    display: flex;

    .logo {
      width: 110px;
      justify-self: start;
    }

    .nav-link {
      margin-left: 14px;
      padding: 10px;

      svg {
        height: 28px;
        width: 28px;

        &.solid-icon {
          display: none;
        }
      }

      &.active {
        svg {
          display: none;
          &.solid-icon {
            display: inline;
          }
        }
      }
    }
  }
`;
