export const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-center text-3xl text-shadow bg-gradient-to-l from-white  via-slate-400 to-white py-2 text-slate-100 font-semibold mb-3">
      {children}
    </h1>
  );
};
