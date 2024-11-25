export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-slate-500 hover:bg-slate-600 text-slate-50 px-3 py-2 rounded-md flex items-center gap-2">
      {children}
    </button>
  );
};
