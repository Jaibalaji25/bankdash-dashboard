import { NavLink } from "react-router-dom";

function Sidebar({ onNavigate }) {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Transactions", path: "/transactions" },
    { name: "Accounts", path: "/accounts" },
    { name: "Investments", path: "/investments" },
    { name: "Credit Cards", path: "/credit-cards" },
    { name: "Loans", path: "/loans" },
    { name: "Services", path: "/services" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-10">BankDash</h1>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={onNavigate}
            className={({ isActive }) =>
              `block px-5 py-4 rounded-xl transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
