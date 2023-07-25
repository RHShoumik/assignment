
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage.jsx';
import IncomeTransaction from './pages/IncomeTransaction.jsx';
import ExpenseTrnsaction from './pages/ExpenseTrnsaction.jsx';
import NotFound from './pages/NotFound';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/income" element={<IncomeTransaction />}/>
          <Route path="/expense" element={<ExpenseTrnsaction />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
