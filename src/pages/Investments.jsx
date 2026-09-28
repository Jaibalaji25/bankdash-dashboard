function Investments() {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Investments
      </h1>

      <p className="text-gray-500 mt-2 mb-6">Track your investments</p>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <p className="text-gray-500">Total Investment</p>
        <h2 className="text-3xl font-bold mt-2">₹2,50,000</h2>

        <div className="mt-6 space-y-4">
          <div className="flex justify-between">
            <span>Mutual Funds</span>
            <span className="font-semibold">₹1,50,000</span>
          </div>

          <div className="flex justify-between">
            <span>Fixed Deposit</span>
            <span className="font-semibold">₹1,00,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investments;
