import styled from "styled-components";
import logoImage from '../../assets/img/logo.png'


const StyledLogo = styled.img`
  max-width: 100%;
  border-radius: 20px;
  width: 60px;
`;


export const Logo = () => {
    return <StyledLogo src={ logoImage }/>
}