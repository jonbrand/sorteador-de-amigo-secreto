import React from 'react';
import { render, screen } from '@testing-library/react';
import { Form } from './Form';

test('when input is empty, new participants cannot be added', () => {
  render(<Form />);
  
  // encontrar no DOM o input
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

  // encontrar o botao
  const button = screen.getByRole('button');

  // garantir que o input esteja no documento
  expect(input).toBeInTheDocument();
  
  // garantir que o botao esteja desabilitado
  expect(button).toBeDisabled();
})