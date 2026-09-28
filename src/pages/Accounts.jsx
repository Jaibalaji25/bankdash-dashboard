function Accounts() {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Accounts</h1>

      <p className="text-gray-500 mt-2 mb-6">Manage your bank accounts</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-gray-500">Savings Account</p>
          <h2 className="text-2xl font-bold mt-2">₹1,25,000</h2>
          <p className="text-sm text-gray-500 mt-2">Account No: **** 4582</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-gray-500">Current Account</p>
          <h2 className="text-2xl font-bold mt-2">₹75,000</h2>
          <p className="text-sm text-gray-500 mt-2">Account No: **** 7821</p>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
