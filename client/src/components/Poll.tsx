import { theme } from "@/styles/theme";
import styled from "styled-components";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface props {
  name: string;
}

export default function Course( { name }: props ) {
    function onClick() {
        console.log("hello", name)
    }

  return (
    <Div onClick={onClick}>
      <h2>{name}</h2>
      <div className="icon">
        <FontAwesomeIcon className="icon" icon={faArrowRight} />
      </div>
    </Div>
  )
}

const Div = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  :hover {
    background-color: lightgrey;
    }
  h2 {
    letter-spacing: 1px;
    line-height: 40px;
    padding-left: 14px;
  }
  .icon {
      width: 35px;
      height: 35px;
      :hover {
        transform: scale(1.1);
      }
    }
`;