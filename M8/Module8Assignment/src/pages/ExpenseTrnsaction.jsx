import React from "react";
import Navbar from "../components/Navbar/Navbar";

const ExpenseTrnsaction = (props) => {
  const { transaction, setTransaction, totalExpense, setTotalExpense } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransaction([
      ...transaction,
      {
        details: e.target.details.value,
        amount: e.target.amount.value,
        type: "expense",
      },
    ]);
    setTotalExpense(parseInt(totalExpense) + parseInt(e.target.amount.value));
    e.target.reset();
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-20">
        <h2 className="text-3xl mb-10">Total Expense {totalExpense} taka</h2>
        <form className="flex" onSubmit={handleSubmit}>
          <input
            name="details"
            type="text"
            required
            placeholder="Expense Details"
            className="input input-bordered input-warning w-full m-5 max-w-xs"
          />
          <input
            name="amount"
            type="number"
            required
            placeholder="Amount"
            className="input input-bordered input-warning w-full m-5 max-w-xs"
          />
          <button className="btn btn-info m-5">Add</button>
        </form>
        <div className="overflow-x-auto mt-50">
          <table className="table table-zebra text-md">
            {/* head */}
            <thead>
              <tr>
                <th>Details</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transaction
                .filter((item) => item.type === "expense")
                .map((item, index) => (
                  <tr key={index}>
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

export default ExpenseTrnsaction;
