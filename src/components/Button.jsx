export default function Button({
  children,
  alignment = "left",
  type = "secondary",
  className = "",
  onClick,
}) {
  const buttonClasses = `${type === "primary" ? "bg-blue-900" : ""} ${
    alignment === "center" ? "mx-auto" : ""
  } block px-6 py-2 rounded-full hover:cursor-pointer border-2 border-blue-800 hover:bg-blue-800 hover:-translate-y-[2px] transition-all text-md w-fit ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}
