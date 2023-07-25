
import Navbar from "../components/Navbar/Navbar";

const IncomeTransaction = (props) => {
  const { transaction, setTransaction, totalIncome, setTotalIncome } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransaction([
      ...transaction,
      {
        details: e.target.details.value,
        amount: e.target.amount.value,
        type: "income",
      },
    ]);
    setTotalIncome(parseInt(totalIncome) + parseInt(e.target.amount.value));
    e.target.reset();
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-20">
        <h2 className="text-3xl mb-10">Total Income {totalIncome} taka</h2>
        <form className="flex" onSubmit={handleSubmit}>
          <input
            name="details"
            type="text"
            placeholder="Income Details"
            className="input input-bordered input-warning w-full m-5 max-w-xs"
          />
          <input
            name="amount"
            type="number"
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
                .filter((item) => item.type === "income")
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

export default IncomeTransaction;
