"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ShoppingCart, User } from "lucide-react";
import useCartService from "@/lib/hooks/useCartStore";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Initialize the router

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { items } = useCartService();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to handle navigation
  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <header className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <nav className="flex h-14 items-center justify-between border-b border-zinc-200">
          <button
            onClick={() => navigateTo("/")}
            className="flex z-40 font-semibold text-xl"
          >
            721 &nbsp; <span className="text-orange-500">Sportswear</span>
          </button>

          <div>
            <ul className="flex items-stretch space-x-2">
              <li>
                <button
                  className="btn btn-ghost rounded-btn flex items-center p-2"
                  onClick={() => navigateTo("/cart")}
                >
                  <ShoppingCart size={24} />
                  <span className="sr-only">Cart</span>
                </button>
              </li>
              <li className="relative">
                <button
                  className="btn btn-ghost rounded-btn flex items-center p-2"
                  type="button"
                  onClick={toggleDropdown}
                >
                  <User size={24} />
                  <span className="sr-only">Account</span>
                </button>

                {/* Dropdown menu */}
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                    <button
                      onClick={() => navigateTo("/login")}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => navigateTo("/myorders")}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      My Orders
                    </button>
                    <button
                      onClick={() => navigateTo("/settings")}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Account Settings
                    </button>
                    <button
                      onClick={() => navigateTo("/api/auth/logout")}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
