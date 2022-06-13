import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Raffle } from './pages/Raffle/Raffle';
import { Settings } from './pages/Settings/Settings';

export function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Settings />} />
          <Route path='/raffle' element={<Raffle />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}
