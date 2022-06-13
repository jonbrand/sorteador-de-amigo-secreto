import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListParticipants } from "../state/hooks/useListParticipants";
import { ListParticipants } from "./ListParticipants";

jest.mock('../state/hooks/useListParticipants', () => {
  return {
    useListParticipants: jest.fn()
  }
});

describe('o comportamento do ListParticipants.tsx', () => {
  beforeEach(() => {
    (useListParticipants as jest.Mock).mockReturnValue([])
  })
  test('deve ser renderizada uma lista sem elementos', () => {
    render(
      <RecoilRoot>
        <ListParticipants />
      </RecoilRoot>
    )
  
    const itens = screen.queryAllByRole('listItem')
  
    expect(itens).toHaveLength(0);
  });
});

describe('uma lista preenchida de participantes', () => {
  const participants = ['Jonatas', 'Isiane'];
  beforeEach(() => {
    (useListParticipants as jest.Mock).mockReturnValue(participants)
  });
  test('deve renderizar uma lista preenchida com participantes', () => {
    render(
      <RecoilRoot>
        <ListParticipants />
      </RecoilRoot>
    )
  
    const itens = screen.queryAllByRole('listitem')
  
    expect(itens).toHaveLength(participants.length);
  });
});