import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const Homepage = (props) => {

  const {totalIncome, totalExpense, transaction} = props;
  const balance = parseInt(totalIncome) - parseInt(totalExpense);
  return (
    <div>
        <Navbar />
        <div className='flex flex-col items-center justify-center mt-20'>
          <h1 className="text-3xl mb-10">Your reaming balance is {balance} taka</h1>
          <h2 className='text-xl'>All Transactions</h2>
          <div className="overflow-x-auto mt-50">
          <table className="table table-zebra text-md">
            {/* head */}
            <thead>
              <tr>
                <th>Details</th>
                <th>Amount</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {transaction.map((item, index) => (
                  <tr key={index}>
                    <td>{item.details}</td>
                    <td>{item.amount}</td>
                    <td>{item.type}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        </div>
    </div>
  )
}

export default Homepage