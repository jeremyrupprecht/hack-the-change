import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useContext, useMemo} from 'react';
import { UserContext } from '../../contexts/UserProvider';

export default function NavBar(): JSX.Element {
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate();
  const handleLogout = () => {
    if (setUser === undefined) return
    setUser(undefined);
    navigate('/login');
  }
  const handleLogin = () => {
    navigate('/login');
  }
  const buttonElement = useMemo(() => {
    if (user) {
      return (
        <h2 onClick={handleLogout} className='logout'>Logout</h2>
      );
    } else {
      return (
        <h2 onClick={handleLogin} className='logout'>Login</h2>
      );
    }
  }, [user])

  return (
    <Nav>
      <h1>MindFULL+</h1>
      <div className='logout-user-icon'>
        {buttonElement}
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
        color: ${theme.bluewood};
        width: 24px;
        height: 28px;
      }
    }
  }
`;
