
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage.jsx';
import IncomeTransaction from './pages/IncomeTransaction.jsx';
import ExpenseTrnsaction from './pages/ExpenseTrnsaction.jsx';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar/Navbar.jsx';

import './App.css';

function App() {

  return (
    <div>
      <h1>Hi there</h1>
      {/* <Navbar /> */}
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
