import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import '@testing-library/jest-dom'
import { useListParticipants } from '../../components/state/hooks/useListParticipants'
import { useRaffleResult } from "../../components/state/hooks/useRaffleResult";
import { Raffle } from "./Raffle";

jest.mock('../../components/state/hooks/useListParticipants', () => {
  return {
    useListParticipants: jest.fn()
  }
});

jest.mock('../../components/state/hooks/useRaffleResult', () => {
  return {
    useRaffleResult: jest.fn()
  }
});

 describe('na pagina de sorteio', () => {
  const participants = [
    'Jonatas',
    'Davi',
    'Isiane'
  ];

  const result = new Map([
    ['Jonatas', 'Davi'],
    ['Davi', 'Isiane'],
    ['Isiane', 'Jonatas']
  ]);

  beforeEach(() => {
    (useListParticipants as jest.Mock).mockReturnValue(participants);
    (useRaffleResult as jest.Mock).mockReturnValue(result);
  })
  test('todos os participantes podem exibir o seu amigo secreto', () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    )

    const options = screen.queryAllByRole('option');
    
    expect(options).toHaveLength(participants.length);
  });

  test('o amigo secreto e exibido quando solicitado', () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    )

    const select = screen.getByPlaceholderText('Selecione o seu nome');
    
    fireEvent.change(select, {
      target: {
        value: participants[0]
      }
    });

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const secretFriend = screen.getByRole('alert');

    expect(secretFriend).toBeInTheDocument();
  });
 });