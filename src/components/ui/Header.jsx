import { styled } from "styled-components"

const StyledHeader = styled.header`
background-color: lavender;
color: deeppink;
padding: 20px;
`

export default function Header(props) {
    return (<StyledHeader>
        <h1>Header</h1>
        {props.children}
        </StyledHeader>)
}