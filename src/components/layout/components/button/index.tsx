const Button = ({
  children,
  type,
}: {
  children?: React.ReactNode;
  type?: "outline" | "fill";
}) => {
  return (
    <>
      <button
        className={`${
          type === "outline"
            ? "border-2 border-white text-white hover:bg-[#e0e0e01d]"
            : type == "fill"
            ? "bg-color-2 hover:bg-[#333333] text-white"
            : "border-2 border-white text-white hover:bg-[#e0e0e01d]"
        }  py-2 px-4 outline-0 duration-200`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
