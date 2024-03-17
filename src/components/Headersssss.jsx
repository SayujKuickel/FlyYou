// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Button from "./Button";

// // icons
// import Logo from "../Assets/FlyYouLogo.png";

// import CrossIcon from "../assets/icons/cross-nav.svg";
// import BarsIcon from "../assets/icons/bars-nav.svg";
// import PopupMenu from "./PopupMenu";

// import { pages } from "../pages";

// export default function NavBar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="relative">
//       <div className="container mx-auto flex items-center justify-between relatve px-2 md:px-0 ">
//         <div className="flex items-center">
//           <Link to="/">
//             <img
//               src={Logo}
//               className="w-28 aspect-square "
//               alt="Collcat-logo"
//             />
//           </Link>
//         </div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-4 font-sans text-xl font-semibold text-gray-800 ">
//           <Link to="/" className="hover:text-primary-500">
//             Home
//           </Link>
//           <Link to="/about" className="hover:text-primary-500">
//             About us
//           </Link>

//           <PopupMenu text="Services" itemList={pages} />

//           <Link className="hover:text-primary-500" to="/projects">
//             Projects
//           </Link>
//           <Link to="/contact">
//             <Button>Contact Us</Button>
//           </Link>
//         </div>

//         {/* mobile Nav */}
//         <div className="block md:hidden">
//           <button
//             className=" relative z-[50001]"
//             onClick={() =>
//               setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen)
//             }
//           >
//             {mobileMenuOpen ? (
//               <img
//                 src={CrossIcon}
//                 alt={CrossIcon}
//                 className="brightness-0 invert scale-y-90 w-8 aspect-square"
//               />
//             ) : (
//               <img
//                 src={BarsIcon}
//                 alt={BarsIcon}
//                 className="w-8 aspect-square"
//               />
//             )}
//           </button>

//           {mobileMenuOpen && (
//             <div className="absolute h-screen w-full backdrop-blur-md bg-primary-500/60 right-0 top-0 z-[5000] grid place-content-center">
//               <div className="text-xl text-center font-bold font-sans text-slate-300 flex flex-col gap-4">
//                 <Link
//                   to="/"
//                   className="hover:cursor-pointer hover:text-gray-300"
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   to="/about"
//                   className="hover:cursor-pointer hover:text-gray-300"
//                 >
//                   About Us
//                 </Link>

//                 <PopupMenu text="Services" itemList={pages} />

//                 <Link to="/projects">Projects</Link>
//                 <Link to="/contact">Contact Us</Link>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }
