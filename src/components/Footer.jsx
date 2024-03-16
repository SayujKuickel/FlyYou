import FlyYouLogo from "../Assets/FlyYouLogo.png";
import IdeaGenLogo from "../Assets/IdeaGenLogo.png";
import FacebookIcon from "../Assets/icons/facebook-logo.svg";
import InstagramIcon from "../Assets/icons/instagram-logo.svg";

import Button from "./Button";

import { Link } from "react-router-dom";

const plans = [
  {
    id: 1,
    title_en: "Curious about our pricing?",
    title_jp: "料金プランについて知りたいですか？",
    description_en: "We offer variety of plans. Click Below to contact us.",
    description_jp:
      "私たちはさまざまなプランを提供しています。下記をクリックしてご連絡ください。",
    link: "/contact",
    btnText: "Contact us",
  },
  {
    id: 2,
    title_en: "Wanna Know More About Our Company?",
    title_jp: "当社について詳しく知りたいですか？",

    description_en: "Please Follow the below link to see our company profile.",
    description_jp: "下記のリンクをクリックして、会社の概要をご覧ください。",
    link: "/about",
    btnText: "Company Profile",
  },
  {
    id: 3,
    title_en: "Looking for a job?",
    title_jp: "求人情報をお探しですか？",
    description_en:
      "We have various of offerings per your need. Please follow the link to view our offerings.",
    description_jp:
      "私たちはあなたのニーズに合ったさまざまなサービスを提供しています。下記のリンクをクリックして、サービス内容をご覧ください。",
    link: "/",
    btnText: "Recruitment",
  },
];

export default function Footer() {
  return (
    <>
      <div className="mt-36"></div>
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-5 my-16">
        {plans.map(
          ({
            id,
            title_en,
            description_en,
            title_jp,
            description_jp,
            link,
            btnText,
          }) => (
            <div
              key={id}
              className="h-full flex flex-col gap-4 md:gap-8 justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold md:text-3xl">
                  {title_en}
                </h3>
                <p>{description_en}</p>
              </div>
              <Button type="primary" className="m-0 scale-[.95]">
                <Link to={link}>{btnText}</Link>
              </Button>
            </div>
          )
        )}
      </section>
      {/* FOOTER */}
      <footer>
        <div className="container mx-auto bg-[#141415] md:rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3 md:p-6 lg:p-10">
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

          <ul className="flex flex-col gap-3 mt-6 md:mt-0 text-[#F9FAFBaa]">
            <li>
              <h2 className="text-2xl font-bold mt-6 md:mt-0 text-white">
                Quick Links
              </h2>
            </li>
            <li className="hover:text-white">
              <a href="">Lorem.</a>
            </li>
            <li className="hover:text-white">
              <a href="">Ut?</a>
            </li>
            <li className="hover:text-white">
              <a href="">Nostrum!</a>
            </li>
            <li className="hover:text-white">
              <a href="">Aut.</a>
            </li>
            <li className="hover:text-white">
              <a href="">Quasi.</a>
            </li>
          </ul>

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
