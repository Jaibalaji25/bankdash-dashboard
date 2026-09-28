function ExpenseChart() {
  const expenses = [
    { day: "Mon", amount: 40 },
    { day: "Tue", amount: 70 },
    { day: "Wed", amount: 50 },
    { day: "Thu", amount: 90 },
    { day: "Fri", amount: 60 },
    { day: "Sat", amount: 80 },
    { day: "Sun", amount: 45 },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm w-full overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold">Weekly Expenses</h2>

          <p className="text-sm text-gray-500 mt-1">Your spending this week</p>
        </div>

        <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-full sm:w-auto">
          <option>This Week</option>
          <option>Last Week</option>
        </select>
      </div>

      {/* Chart */}
      <div className="flex items-end justify-between h-56 gap-2 sm:gap-3">
        {expenses.map((expense, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-end h-full flex-1"
          >
            <div
              className="w-5 sm:w-8 bg-blue-500 rounded-t-lg"
              style={{
                height: `${expense.amount * 2}px`,
              }}
            ></div>

            <p className="text-[11px] sm:text-xs text-gray-500 mt-2">
              {expense.day}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseChart;
