function Loans() {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Loans</h1>

      <p className="text-gray-500 mt-2 mb-6">Manage your active loans</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-gray-500">Home Loan</p>
          <h2 className="text-2xl font-bold mt-2">₹18,50,000</h2>
          <p className="text-sm text-gray-500 mt-2">Remaining amount</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-gray-500">Monthly EMI</p>
          <h2 className="text-2xl font-bold mt-2">₹24,500</h2>
          <p className="text-sm text-gray-500 mt-2">Next payment: 5 Oct 2026</p>
        </div>
      </div>
    </div>
  );
}

export default Loans;
