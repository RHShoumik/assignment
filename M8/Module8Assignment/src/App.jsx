
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage.jsx';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './App.css';

function App() {

  return (
    <div>
      <h1>Hi there</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
