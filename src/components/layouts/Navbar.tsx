import Image from "next/image";
import { ChevronDown, Menu, Search } from "lucide-react";
import PrimaryButton from "../global/PrimaryButton";

export default function Navbar() {
  return (
    <nav className="hidden lg:flex items-center justify-between">
      <div className="flex items-center justify-center gap-5">
        {/* Logo */}
        <Image
          src="/logo.png"
          width={200}
          height={50}
          alt="Logo"
          priority
          quality={100}
          className="w-auto h-16"
        />

        <div className="relative">
          {/* Search bar */}
          <Search className="absolute top-[10px] left-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            name="search"
            placeholder="Search for Movies"
            className="border border-gray-200 h-9 pl-12 pr-4 pb-[2px] w-[550px] rounded-md"
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-6">
        {/* Place */}
        <button className="flex items-center justify-center gap-4">
          <span className="">Mumbai</span>
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </button>

        {/* Sign in / Account */}
        <PrimaryButton>Sign in</PrimaryButton>

        {/* menu */}
        <Menu />
      </div>
    </nav>
  );
}
