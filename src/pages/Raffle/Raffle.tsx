import React, { useState } from "react";
import { useListParticipants } from "../../components/state/hooks/useListParticipants"
import { useRaffleResult } from '../../components/state/hooks/useRaffleResult';
import { Card } from '../../components/Card/Card';
import { RaffleButton, RaffleContainer, RaffleFooter, RaffleForm, RaffleOption, RaffleParagraph, RaffleSelect } from "./styles";
/* import {imageThree} from '../../images/airplane.png'; */

export const Raffle = () => {
  const participants = useListParticipants();

  const [participantTime, setParticipantTime] = useState('');

  const [secretFriend, setSecretFriend] = useState('');

  const result = useRaffleResult();

  const raffle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(result.has(participantTime)) {

      setSecretFriend(result.get(participantTime)!)

    }
  }

  return (
    <Card>
      <RaffleContainer>
        <h2>Quem vai tirar o papelzinho? </h2>
        <RaffleForm onSubmit={raffle}>
          <RaffleSelect 
            required 
            name='participanteDaVez' 
            id='participanteDaVez' 
            placeholder='Selecione o seu nome'
            value={participantTime}
            onChange={event => setParticipantTime(event.target.value)}
          >
            {participants.map(participant => <RaffleOption key={participant}>{participant}</RaffleOption>)}
          </RaffleSelect>
          <RaffleButton>Sortear</RaffleButton>
        </RaffleForm>
        {secretFriend && <RaffleParagraph role='alert'>{secretFriend}</RaffleParagraph>}
        <RaffleFooter>
          {/* <AirplaneImage src={imageThree}/> */}
        </RaffleFooter>
      </RaffleContainer>
    </Card>
  );
};