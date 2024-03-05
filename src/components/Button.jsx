export default function Button({
  children,
  alignment = "left",
  type = "secondary",
  classes = "",
  onClick,
}) {
  return (
    <a
      className={`${type === "primary" ? "bg-blue-900" : ""} ${
        alignment === "center" ? "mx-auto" : ""
      } block w-fit px-6 py-2 rounded-full hover:cursor-pointer border-2 border-blue-800 hover:bg-blue-800 hover:-translate-y-[2px] transition-all text-md ${classes}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
