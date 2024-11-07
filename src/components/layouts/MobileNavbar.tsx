import { MobileNavbarContent } from "@/static/MobileNavbarContent";
import Link from "next/link";

export default function MobileNavbar() {
  return (
    <div className="fixed bottom-0 left-0 lg:hidden bg-white z-50">
      <div className="flex items-center justify-between w-screen py-3">
        {MobileNavbarContent.map((navbar, index) => (
          <Link
            href={navbar.link}
            key={index}
            className="flex flex-col items-center justify-center w-full"
          >
            <navbar.icon
              className={`${
                navbar.label === "Home" ? "text-rose-600" : "text-gray-600"
              }`}
            />
            <span
              className={`${
                navbar.label === "Home" ? "text-rose-600" : "text-gray-600"
              }`}
            >
              {navbar.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
