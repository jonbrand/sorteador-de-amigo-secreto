import React, { useRef, useState } from "react";
import { useAddingParticipating } from "../state/hooks/useAddingParticipating";
import { useErrorMessage } from "../state/hooks/useErrorMessage";

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
    <form onSubmit={addParticipants}>
      <input
        ref={inputRef} 
        type='text' 
        placeholder='Insira os nomes dos participantes'
        value={name}
        onChange={event => setName(event.target.value)}
        />
      <button disabled={!name}>Adicionar</button>
      {errorMessage && <p role='alert'>{errorMessage}</p>}
    </form>
  )
}