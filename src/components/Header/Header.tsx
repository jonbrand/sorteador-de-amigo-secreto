import { HeaderContainer, HeaderContentImage, HeaderContentLogo, HeaderImageOne, HeaderLogo } from "./styles";
import logo from '../../images/logo.svg';
import imageOne from '../../images/person.svg';

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderContentLogo>
          <HeaderLogo src={logo}/>
        </HeaderContentLogo>
        <HeaderContentImage>
          <HeaderImageOne src={imageOne} />
        </HeaderContentImage>
      </HeaderContainer>
    </>
  )
};