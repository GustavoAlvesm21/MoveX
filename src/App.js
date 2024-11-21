import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjetoUm from './paginas/ProjetoUm';
import Home from './paginas/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path = "/home" element={<Home />} />
        <Route path = "/projetoUm" element={<ProjetoUm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;