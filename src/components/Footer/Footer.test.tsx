import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import "@testing-library/jest-dom/extend-expect";
import { Footer } from "./Footer";
import { useListParticipants } from "../state/hooks/useListParticipants";

jest.mock('../state/hooks/useListParticipants', () => {
  return {
    useListParticipants: jest.fn()
  }
});

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate
  }
});

describe('quando nao existem participantes suficientes', () => {
  beforeEach(() => {
    (useListParticipants as jest.Mock).mockReturnValue([])
  })

  test('a brincadeira nao pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    )

    const button = screen.getByRole('button');

    expect(button).toBeDisabled()
  });
});

describe('quando existem participantes suficientes', () => {
  beforeEach(() => {
    (useListParticipants as jest.Mock).mockReturnValue(['Jonatas', 'Vitoria', 'Isiane'])
  })
  test('a brincadeira pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    )

    const button = screen.getByRole('button');

    expect(button).not.toBeDisabled()
  });

  test('a brincadeira foi iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    )

    const button = screen.getByRole('button');

    fireEvent.click(button);
    // quantas vezes foi chamada
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    // qual a rota chamada
    expect(mockNavigate).toHaveBeenCalledWith('/raffle');
  });
});