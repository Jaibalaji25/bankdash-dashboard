function Settings() {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Settings</h1>

      <p className="text-gray-500 mt-2 mb-6">Manage your account settings</p>

      <div className="bg-white rounded-2xl p-6 shadow-sm max-w-2xl space-y-5">
        <div>
          <p className="text-sm text-gray-500">Account Name</p>
          <p className="font-semibold mt-1">BankDash User</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="font-semibold mt-1">user@example.com</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Mobile Number</p>
          <p className="font-semibold mt-1">+91 XXXXX XXXXX</p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">
          Update Settings
        </button>
      </div>
    </div>
  );
}

export default Settings;
