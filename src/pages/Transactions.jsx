import { useEffect, useState } from "react";
import api from "../services/api";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await api.get("/posts");

        const indianTransactions = response.data
          .slice(0, 8)
          .map((item, index) => ({
            id: item.id,
            name: [
              "UPI Payment",
              "ATM Withdrawal",
              "Electricity Bill",
              "Salary Credit",
              "Mobile Recharge",
              "Online Shopping",
              "Grocery Payment",
              "Bank Transfer",
            ][index],
            amount: [
              "-₹1,200",
              "-₹5,000",
              "-₹2,450",
              "+₹25,000",
              "-₹850",
              "-₹2,100",
              "-₹1,500",
              "+₹10,000",
            ][index],
          }));

        setTransactions(indianTransactions);
      } catch (error) {
        console.error(error);
        setError("Failed to load transactions.");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Transactions</h1>

      {loading && <p className="text-gray-500">Loading transactions...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 border-b last:border-b-0"
            >
              <div>
                <h2 className="font-medium">{transaction.name}</h2>

                <p className="text-sm text-gray-500">
                  Transaction #{transaction.id}
                </p>
              </div>

              <span
                className={`text-sm font-medium ${
                  transaction.amount.startsWith("+")
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {transaction.amount}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Transactions;
