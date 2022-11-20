import { theme } from "@/styles/theme";
import styled from "styled-components";

interface props {
  name: string;
}

export default function Course( { name }: props ) {

  return (
    <Div>
      <h2>{name}</h2>
    </Div>
  )
}

const Div = styled.div`
  width: 230px;
  border-bottom: 1px solid ${theme.gray};

  h2 {
    letter-spacing: 1px;
    color: ${theme.white};
    line-height: 40px;
    padding-left: 14px;
  }
`;