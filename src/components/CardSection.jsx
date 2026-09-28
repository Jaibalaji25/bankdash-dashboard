import { motion } from "framer-motion";

function CardSection() {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm w-full overflow-hidden">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg sm:text-xl font-semibold">My Cards</h2>

        <button className="text-blue-600 font-medium text-sm sm:text-base">
          See All
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-2xl p-5 sm:p-6 min-h-52 w-full"
      >
        <div className="flex justify-between items-start gap-3">
          <div>
            <p className="text-sm opacity-80">Balance</p>

            <h3 className="text-xl sm:text-2xl font-bold mt-2">
              {" "}
              ₹1,25,000.00
            </h3>
          </div>

          <div className="text-base sm:text-lg font-bold whitespace-nowrap">
            Corporation Bank
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <p className="text-sm opacity-80">Card Number</p>

          <p className="text-base sm:text-lg tracking-widest break-words">
            **** **** **** 1234
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default CardSection;
