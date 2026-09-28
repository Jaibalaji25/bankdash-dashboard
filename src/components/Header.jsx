import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./sidebar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700 mr-3"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>

        {/* Page Title */}
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="text-sm text-gray-500">Welcome back!</p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Search - Desktop only */}
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block border border-gray-300 rounded-lg px-4 py-2 outline-none w-48"
          />

          {/* Profile */}
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            JB
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 top-0 h-full w-72 bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-full overflow-y-auto">
                <Sidebar />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
