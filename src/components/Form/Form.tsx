import React, { useRef, useState } from "react";
import { useAddingParticipating } from "../state/hooks/useAddingParticipating";
import { useErrorMessage } from "../state/hooks/useErrorMessage";
import { FormContainer, FormGroup, FormInput, FormButton, FormError } from './styles';
export const Form = () => {
  const [name, setName] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const addingToList = useAddingParticipating()

  const errorMessage = useErrorMessage();

  const addParticipants = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addingToList(name);
    setName('');
    inputRef.current?.focus();
  }  

  return (
    <FormContainer onSubmit={addParticipants}>
      <FormGroup>
        <FormInput
          ref={inputRef} 
          type='text' 
          placeholder='Insira os nomes dos participantes'
          value={name}
          onChange={event => setName(event.target.value)}
          />
        <FormButton disabled={!name}>Adicionar</FormButton>
        {errorMessage && <FormError role='alert'>{errorMessage}</FormError>}
      </FormGroup>
    </FormContainer>
  )
}