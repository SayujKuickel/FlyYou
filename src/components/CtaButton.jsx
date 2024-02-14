export default function CtaButton({ children }) {
  return (
    <a className="bg-blue-900 block w-fit mx-auto mt-16 px-6 py-2 rounded-full hover:cursor-pointer hover:bg-blue-800 hover:-translate-y-1 transition-all">
      {children}
    </a>
  );
}
