import { useNavigate } from "react-router-dom";
import { useListParticipants } from "../state/hooks/useListParticipants"
import { FooterButton, FooterContainer, ImageBags } from "./styles";
import ImageTwo from '../../images/bags.svg';

export const Footer = () => {
  const participants = useListParticipants();

  const navigateTo = useNavigate();

  const start = () => {
    navigateTo('/raffle')
  }

  return (
    <FooterContainer>
      <FooterButton disabled={participants.length < 3} onClick={start}>Iniciar brincadeira!</FooterButton>
      <ImageBags src={ImageTwo} />
    </FooterContainer>
  )
}