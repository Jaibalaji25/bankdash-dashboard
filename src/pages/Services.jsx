function Services() {
  const services = [
    "Money Transfer",
    "Bill Payment",
    "Mobile Recharge",
    "Cheque Book",
    "Bank Statement",
    "UPI Services",
  ];

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Services</h1>

      <p className="text-gray-500 mt-2 mb-6">
        Banking services available to you
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h2 className="font-semibold text-lg">{service}</h2>
            <p className="text-sm text-gray-500 mt-2">
              Access this banking service
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
