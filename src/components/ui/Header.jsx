import { styled } from "styled-components";

const StyledHeader = styled.header`
  background-color: rgb(244, 244, 244);
  color: white;
  padding: 20px;
`;

export default function Header(props) {
  return <StyledHeader>{props.children}</StyledHeader>;
}
