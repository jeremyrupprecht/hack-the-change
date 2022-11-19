import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function NavBar(): JSX.Element {
  return (
    <Nav>
      <h1>MindFULL+</h1>
      <div className='logout-user-icon'>
        <h2 className='logout'>Logout</h2>
        <div className='user-icon'>
          <FontAwesomeIcon className='icon' icon={faUser} />
        </div>
      </div>
    </Nav>
  );
}

const Nav = styled.div`
  background-color: ${theme.bluewood};
  height: 60px;
  color: ${theme.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  .logout-user-icon {
    display: flex;
    flex-direction: row;
    align-items: center;

    .logout {
      margin-right: 30px;
    }

    .user-icon {
      background-color: ${theme.white};
      width: 46px;
      height: 46px;
      border-radius: 24px;
      display: flex;
      justify-content: center;
      align-items: center;

      .icon {
        /* background-color: ${theme.bluewood}; */
        color: ${theme.bluewood};
        width: 24px;
        height: 28px;
      }
    }
  }
`;
