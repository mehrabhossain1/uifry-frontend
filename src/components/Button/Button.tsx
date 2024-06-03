const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[180px] h-[60px] rounded bg-[#000000] flex justify-center items-center">
      <p className="text-[#FFFFFF] text-[18px] font-[500]">{children}</p>
    </div>
  );
};

export default Button;
