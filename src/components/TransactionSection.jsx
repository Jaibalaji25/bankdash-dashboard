import { useEffect, useState } from "react";
import api from "../services/api";
import { motion } from "framer-motion";

function TransactionSection() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api
      .get("/posts?_limit=4")
      .then((res) => {
        const data = res.data.map((_item, index) => ({
          name: [
            "UPI Payment",
            "ATM Withdrawal",
            "Electricity Bill",
            "Salary Credit",
          ][index],
          date: "28 Sep 2026",
          amount: ["-₹1,200", "-₹5,000", "-₹2,450", "+₹25,000"][index],
        }));

        setTransactions(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm w-full overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg sm:text-xl font-semibold">
          Recent Transactions
        </h2>

        <button className="text-blue-600 font-medium text-sm sm:text-base whitespace-nowrap">
          See All
        </button>
      </div>

      {/* Transactions */}
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <motion.div
            key={transaction.name}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
            }}
            className="flex justify-between items-center gap-4 border-b border-gray-100 pb-4"
          >
            {/* Transaction Info */}
            <div className="min-w-0">
              <h3 className="font-medium text-gray-800 truncate">
                {transaction.name}
              </h3>

              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>

            {/* Amount */}
            <p
              className={`font-semibold text-sm sm:text-base whitespace-nowrap ${
                transaction.amount.startsWith("+")
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {transaction.amount}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TransactionSection;
