function CreditCards() {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Credit Cards
      </h1>

      <p className="text-gray-500 mt-2 mb-6">Manage your credit cards</p>

      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-2xl p-6 shadow-sm max-w-xl">
        <p className="text-sm opacity-80">Credit Card</p>

        <h2 className="text-2xl font-bold mt-6">**** **** **** 5678</h2>

        <div className="flex justify-between mt-8">
          <div>
            <p className="text-xs opacity-70">Available Limit</p>
            <p className="font-semibold">₹85,000</p>
          </div>

          <div>
            <p className="text-xs opacity-70">Used</p>
            <p className="font-semibold">₹15,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCards;
