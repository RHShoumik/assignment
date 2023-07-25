
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage.jsx';
import IncomeTransaction from './pages/IncomeTransaction.jsx';
import ExpenseTrnsaction from './pages/ExpenseTrnsaction.jsx';
import NotFound from './pages/NotFound';
import { useState } from 'react';


function App() {

  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/income" element={<IncomeTransaction income={income} setIncome={setIncome} totalIncome={totalIncome} setTotalIncome={setTotalIncome}/>}/>
          <Route path="/expense" element={<ExpenseTrnsaction />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
