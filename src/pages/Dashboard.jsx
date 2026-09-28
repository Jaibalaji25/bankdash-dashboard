import CardSection from "../components/cardsection.jsx";
import TransactionSection from "../components/Transactionsection.jsx";
import ExpenseChart from "../components/ExpenseChart.jsx";

function Dashboard() {
  return (
    <div className="w-full">
      <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>

      <p className="text-gray-500 mt-2 mb-6">
        Welcome to your BankDash dashboard.
      </p>

      {/* My Cards + Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CardSection />

        <TransactionSection />
      </div>

      {/* Weekly Expenses */}
      <div className="mt-6 w-full overflow-hidden">
        <ExpenseChart />
      </div>
    </div>
  );
}

export default Dashboard;
