import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const IncomeTransaction = () => {
  const [income, setIncome] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIncome([
      ...income,
      { details: e.target.details.value, amount: e.target.amount.value },
    ]);
    console.log(income);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-20">
        <h2 className="text-3xl">This is Income page</h2>
        <form className="flex" onSubmit={handleSubmit}>
          <input
            name="details"
            type="text"
            placeholder="Income Details"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <input
            name="amount"
            type="number"
            placeholder="Amount"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <button className="btn btn-info">Add</button>
        </form>
        <div className="overflow-x-auto mt-50">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Details</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {income.map((item) => (
                <tr index>
                  <td>{item.details}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IncomeTransaction;
