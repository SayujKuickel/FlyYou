import FlyYouLogo from "../Assets/FlyYouLogo.png";
import IdeaGenLogo from "../Assets/IdeaGenLogo.png";
import FacebookIcon from "../Assets/icons/facebook-logo.svg";
import InstagramIcon from "../Assets/icons/instagram-logo.svg";

import Button from "./Button";

import { Link } from "react-router-dom";

const plans = [
  {
    id: 1,
    title: "Curious about our pricing?",
    description: "We offer variety of plans. Click Below to contact us.",
    link: "/contact",
    btnText: "Contact us",
  },
  {
    id: 2,
    title: "Wanna Know More About Our Company?",
    description: "Please Follow the below link to see our company profile.",
    link: "/about",
    btnText: "Company Profile",
  },
  {
    id: 3,
    title: "Looking for a job?",
    description:
      "We have various of offerings per your need. Please follow the link to view our offerings.",
    link: "/",
    btnText: "Recruitment",
  },
];

export default function Footer() {
  return (
    <>
      <div className="mt-36"></div>
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-5 my-16">
        {plans.map(({ id, title, description, link, btnText }) => (
          <div
            key={id}
            className="h-full flex flex-col gap-4 md:gap-8 justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold md:text-3xl">{title}</h3>
              <p>{description}</p>
            </div>
            <Button type="primary" className="m-0 scale-[.95]">
              <Link to={link}>{btnText}</Link>
            </Button>
          </div>
        ))}
      </section>
      {/* FOOTER */}
      <footer>
        <div className="container mx-auto bg-[#141415] md:rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  md:p-6 lg:p-10">
          <div>
            <img src={FlyYouLogo} className="h-16 brightness-0 invert" alt="" />
            <p className="text-[#F9FAFBaa]">Flyyou &copy; All right reserved</p>

            <h3 className="uppercase font-bold mt-8">Developed By</h3>
            <img
              src={IdeaGenLogo}
              className="h-12 brightness-0 invert"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-3 mt-6 md:mt-0 text-[#F9FAFBaa]">
            <Link to="/">Home</Link>
            <Link to="/about">Company</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <ul className="flex flex-col gap-3 mt-6 md:mt-0 text-[#F9FAFBaa]">
            <li>
              <h2 className="text-2xl font-bold mt-6 md:mt-0 text-white">
                Projects
              </h2>
            </li>

            <li>
              <Link
                className="hover:text-white"
                to="/projects/registered_support_organization"
              >
                Registered Support Organization
              </Link>
            </li>

            <li>
              <Link className="hover:text-white" to="/projects/namaste_recruit">
                Namaste Recruit
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-white"
                to="/projects/abs_english_conversation"
              >
                ABS English Conversation
              </Link>
            </li>
          </ul>

          <div>
            <h2 className="text-2xl font-bold mt-6 md:mt-0">
              Our Social Links
            </h2>
            <div className="flex gap-3 my-4">
              <a href="">
                <img
                  className="w-8 mx-1 hover:scale-110 transition-all"
                  src={FacebookIcon}
                />
              </a>
              <a href="">
                <img
                  className="w-8 mx-1 hover:scale-110 transition-all"
                  src={InstagramIcon}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
