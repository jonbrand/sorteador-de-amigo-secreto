import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 120px;

  background: #4B69FD;
  border: 2px solid #000000;
  height: auto;

  min-height: 100vh;

  @media screen and (max-width: 800px) {
    padding-top: 60px;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeaderContentLogo = styled.div`
  position: absolute;

  left: 149px;
  top: 123px;
`;

export const HeaderLogo = styled.img`
  width: 351px;
  height: 117px;

  @media screen and (max-width: 800px) {
    width: 235px;
    height: 199px;
  }
`;

export const HeaderContentImage = styled.div`
  position: absolute;
  left: 600px;
  top: 105px;
`;

export const HeaderImageOne = styled.img`
  z-index: 1;
  width: 450px;
  height: 277px;

  @media screen and (max-width: 800px) {
    width: 235px;
    height: 199px;
  }
`;