import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
import IncomeTransaction from "./pages/IncomeTransaction.jsx";
import ExpenseTrnsaction from "./pages/ExpenseTrnsaction.jsx";
import NotFound from "./pages/NotFound";
import { useState } from "react";

function App() {
  const [transaction, setTransaction] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                totalIncome={totalIncome}
                totalExpense={totalExpense}
                transaction={transaction}
              />
            }
          />
          <Route
            path="/income"
            element={
              <IncomeTransaction
                transaction={transaction}
                setTransaction={setTransaction}
                totalIncome={totalIncome}
                setTotalIncome={setTotalIncome}
              />
            }
          />
          <Route
            path="/expense"
            element={
              <ExpenseTrnsaction
                transaction={transaction}
                setTransaction={setTransaction}
                totalExpense={totalExpense}
                setTotalExpense={setTotalExpense}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
