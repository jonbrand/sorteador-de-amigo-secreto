import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Form } from './components/Form/Form';
/* import { HeroSection } from './components/HeroSection/HeroSection'; */

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={Form} />
        </Routes>
       {/*  /* <Header />
        <HeroSection /> */}
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
