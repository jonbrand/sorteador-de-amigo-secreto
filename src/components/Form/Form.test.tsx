import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Form } from './Form';

test('quando o input esta vazio, novos participantes nao pode ser adicionados', () => {
  render(
    <RecoilRoot>
      <Form />
    </RecoilRoot>
  );
  
  // encontrar no DOM o input
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

  // encontrar o botao
  const button = screen.getByRole('button');

  // garantir que o input esteja no documento
  expect(input).toBeInTheDocument();
  
  // garantir que o botao esteja desabilitado
  expect(button).toBeDisabled();
});

test('adicionar um participante caso exista um nome preenchido', () => {
  render(
    <RecoilRoot>
      <Form />
    </RecoilRoot>
  );
  
  // encontrar no DOM o input
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

  // encontrar o botao
  const button = screen.getByRole('button');

  // inserir um valor no input
  fireEvent.change(input, {
    target: {
      value: 'Jonatas',
    }
  });

  // clicar no botao de submeter
  fireEvent.click(button);

  // garantir que o input esteja com o foco ativo
  expect(input).toHaveFocus();

  // garantir que o input nao tenha um valor
  expect(input).toHaveValue('');
  
});

test('nomes duplicados nao podem ser adicionados na lista', () => {
  render(
    <RecoilRoot>
      <Form />
    </RecoilRoot>
  );
  
  // encontrar no DOM o input
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

  // encontrar o botao
  const button = screen.getByRole('button');

  // inserir um valor no input
  fireEvent.change(input, {
    target: {
      value: 'Jonatas',
    }
  });

  // clicar no botao de submeter
  fireEvent.click(button);

  fireEvent.change(input, {
    target: {
      value: 'Jonatas',
    }
  });

  // clicar no botao de submeter
  fireEvent.click(button);
  
  const errorMessage = screen.getByRole('alert');

  expect(errorMessage.textContent).toBe('Nomes duplicados nao sao permitidos!');
});

