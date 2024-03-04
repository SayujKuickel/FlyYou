import Footer from "../components/FooterComponent";
import Header from "../components/Header";
import Projects from "../components/Projects";

import { supportOrganization, howWeWork } from "../constants";

export default function RegisteredSupportOrganization() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />

      <div className="container mx-auto">
        <Projects projects={supportOrganization} />

        <div className="text-center mt-[10rem]">
          <h2 className="text-6xl lg:text-8xl font-bold mt-6 md:mt-0">
            FlyYou Incorporated
          </h2>
          <h2 className="text-base md:text-xl lg:text-2xl font-light mt-6 md:mt-0">
            Bridging Cultures and Building Futures
          </h2>
        </div>

        <h2 className="text-4xl lg:text-6xl mt-32">How we Work?</h2>
        <ul className="mt-10 flex flex-wrap gap-10 justify-between">
          {howWeWork.map((item) => (
            <li
              key={item.id}
              className=" lg:w-[38rem] p-4 md:p-8 rounded-md relative"
            >
              <p className=" absolute z-10 top-2 left-1 opacity-30 flex flex-col text-center">
                <span className="text-4xl font-semibold">Step</span>
                <span className="text-7xl font-bold  -translate-y-2">
                  {item.id < 10 ? `0${item.id}` : item.id}
                </span>
              </p>
              <div className=" ml-24 relative">
                <h2 className="text-4xl font-semibold mb-4 opacity-95">
                  {item.title}
                </h2>
                <p className="text-xl text-[#F9FAFBaa]">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-[100vh] block"></div>
      <Footer />
    </main>
  );
}
