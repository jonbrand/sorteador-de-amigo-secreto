import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Header } from './components/Header/Header';
/* import { HeroSection } from './components/HeroSection/HeroSection'; */

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={Header} />
        </Routes>
       {/*  /* <Header />
        <HeroSection /> */}
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
