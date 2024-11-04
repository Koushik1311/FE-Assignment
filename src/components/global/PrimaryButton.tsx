type PrimaryButtonProps = {
  children: React.ReactNode;
};

export default function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <button className="bg-rose-500 text-white border border-rose-500 rounded-[4px] h-[26px] px-4 text-sm font-medium pb-[2px]">
      {children}
    </button>
  );
}
