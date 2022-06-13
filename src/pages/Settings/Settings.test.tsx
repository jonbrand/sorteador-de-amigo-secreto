import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil"
import { Settings } from "./Settings";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate
  }
});

describe('a pagina de configuracao', () => {
  test('deve ser renderizada corretamente', () => {
    const { container } = render(
      <RecoilRoot>
        <Settings />
      </RecoilRoot>
    )

    expect(container).toMatchSnapshot();
  })
})