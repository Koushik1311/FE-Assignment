import { CiPlay1, CiStreamOn } from "react-icons/ci";
import {
  MdOutlineEmojiEvents,
  MdOutlineLocalActivity,
  MdOutlineSportsHandball,
} from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";

export default function CategoryBar() {
  return (
    <div className="flex items-center justify-between">
      <ul className="flex items-center justify-center gap-5 overflow-y-scroll">
        <li>
          <button className="w-16 flex flex-col justify-center items-center lg:items-start">
            <RiMovie2Line className="w-8 h-8 lg:hidden" />
            <>Movies</>
          </button>
        </li>
        <li>
          <button className="w-16 flex flex-col justify-center items-center lg:items-start">
            <CiStreamOn className="w-8 h-8 lg:hidden" />
            <>Stream</>
          </button>
        </li>
        <li>
          <button className="w-16 flex flex-col justify-center items-center lg:items-start">
            <MdOutlineEmojiEvents className="w-8 h-8 lg:hidden" />
            <>Events</>
          </button>
        </li>
        <li>
          <button className="w-16 flex flex-col justify-center items-center">
            <CiPlay1 className="w-8 h-8 lg:hidden" />
            <>Plays</>
          </button>
        </li>
        <li>
          <button className="w-16 flex flex-col justify-center items-center lg:items-start">
            <MdOutlineSportsHandball className="w-8 h-8 lg:hidden" />
            <>Sports</>
          </button>
        </li>
        <li>
          <button className="w-16 flex flex-col justify-center items-center lg:items-start">
            <MdOutlineLocalActivity className="w-8 h-8 lg:hidden" />
            <>Activities</>
          </button>
        </li>
      </ul>
      <ul className="hidden lg:flex items-center justify-center gap-5">
        <li>
          <button>ListYourShow</button>
        </li>
        <li>
          <button>Corporates</button>
        </li>
        <li>
          <button>Offers</button>
        </li>
        <li>
          <button>Gift</button>
        </li>
      </ul>
    </div>
  );
}
