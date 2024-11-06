import { MobileNavbarContent } from "@/static/MobileNavbarContent";

export default function MobileNavbar() {
  return (
    <div className="absolute bottom-0 left-0 lg:hidden">
      <div className="flex items-center justify-between w-screen py-2">
        {MobileNavbarContent.map((navbar, index) => (
          <button
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
          </button>
        ))}
      </div>
    </div>
  );
}
