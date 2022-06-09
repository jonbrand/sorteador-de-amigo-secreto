import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  padding-top: 120px;

  @media screen and (max-width: 800px) {
    padding-top: 60px;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeaderLogo = styled.img`
  width: 351px;
  height: 117px;

  @media screen and (max-width: 800px) {
    width: 235px;
    height: 199px;
  }
`;

export const HeaderImageOne = styled.img`
  z-index: 1;
`;