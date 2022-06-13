import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Settings } from './pages/Settings/Settings';

export function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Settings />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}
