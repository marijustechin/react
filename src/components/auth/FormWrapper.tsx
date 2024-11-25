interface IFormWrapperProps {
  children: React.ReactNode;
  title: string;
}
export const FormWrapper = ({ children, title }: IFormWrapperProps) => {
  return (
    <div className="w-[380px] border border-slate-400 drop-shadow-md rounded-lg py-2 px-4">
      <h2 className="text-2xl text-center">🔐 {title}</h2>
      <div>{children}</div>
    </div>
  );
};
