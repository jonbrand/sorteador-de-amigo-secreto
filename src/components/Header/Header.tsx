import { HeaderContainer, HeaderImageOne, HeaderLogo } from "./styles";
import logo from '../../images/logo.svg';
import imageOne from '../../images/person.svg';

export const Header = () => {
  return (
    <>
      <HeaderContainer>
          <HeaderLogo src={logo}/>
          <HeaderImageOne src={imageOne} />
      </HeaderContainer>
    </>
  )
};