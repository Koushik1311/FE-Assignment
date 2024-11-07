"use client";

import { useRouter } from "next/navigation";
import { CiPlay1, CiStreamOn } from "react-icons/ci";
import {
  MdOutlineEmojiEvents,
  MdOutlineLocalActivity,
  MdOutlineSportsHandball,
} from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";

const mainCategories = [
  { label: "Movies", icon: RiMovie2Line },
  { label: "Stream", icon: CiStreamOn },
  { label: "Events", icon: MdOutlineEmojiEvents },
  { label: "Plays", icon: CiPlay1 },
  { label: "Sports", icon: MdOutlineSportsHandball },
  { label: "Activities", icon: MdOutlineLocalActivity },
];

const additionalCategories = ["List Your Show", "Corporates", "Offers", "Gift"];

export default function CategoryBar() {
  const router = useRouter();

  const handleCategoryClick = (label: string) => {
    router.push(`/?category=${label}`);
  };

  return (
    <div className="flex items-center justify-between mt-2">
      {/* Main Categories (Horizontal scroll on mobile) */}
      <ul className="flex items-center md:justify-between lg:justify-start md:w-full lg:w-auto gap-5 overflow-x-auto scrollbar-hide">
        {mainCategories.map((category, index) => (
          <li key={index}>
            <button
              onClick={() => handleCategoryClick(category.label)}
              className="w-16 flex flex-col justify-center items-center lg:items-start"
            >
              <category.icon className="w-8 h-8 lg:hidden text-rose-500" />
              <span>{category.label}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Additional Categories (Visible on large screens) */}
      <ul className="hidden lg:flex items-center justify-center gap-5">
        {additionalCategories.map((category, index) => (
          <li key={index}>
            <button>{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
