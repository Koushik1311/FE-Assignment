import SearchInput from "../ui/SearchInput";

export default function MobileSearchbar() {
  return (
    <div className="lg:hidden">
      <div className="my-2">
        <SearchInput />
      </div>
      <div className="border-b border-slate-300 w-screen -mx-3" />
    </div>
  );
}
