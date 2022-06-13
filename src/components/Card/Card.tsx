import { HeroSectionButton, HeroSectionContainer, HeroSectionDisplay, HeroSectionFooterBox, HeroSectionImage, HeroSectionInput, HeroSectionTitle } from "./styles";
import  imageTwo  from '../../images/bags.svg'; 

export const Card: React.FC = ({ children }) => {
  return (
    <>
      <HeroSectionContainer>
        {children}
        <HeroSectionTitle>
          Vamos começar!
        </HeroSectionTitle>
        <HeroSectionInput>

        </HeroSectionInput>
        <HeroSectionDisplay>

        </HeroSectionDisplay>
        <HeroSectionFooterBox>
          <HeroSectionButton>
            Iniciar brincadeira!
          </HeroSectionButton>
          <HeroSectionImage src={imageTwo} />
        </HeroSectionFooterBox>
      </HeroSectionContainer>
    </>
  )
};