import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import PrimaryButton from "../global/PrimaryButton";
import SearchInput from "@/components/ui/SearchInput";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="hidden lg:flex items-center justify-between">
      <div className="flex items-center justify-center gap-5">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            width={200}
            height={50}
            alt="Logo"
            priority
            quality={100}
            className="w-auto h-16"
          />
        </Link>

        {/* Search input */}
        <SearchInput />
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
