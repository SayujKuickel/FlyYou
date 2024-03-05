import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";

import { RSOLayout, RSOFeatures, services } from "../constants";

export default function RegisteredSupportOrganization() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />

      <div className="container mx-auto">
        <Projects projects={RSOLayout} />

        <div className="text-center mt-[10rem]">
          <h2 className="text-4xl lg:text-8xl font-bold mt-6 md:mt-0">
            FlyYou Incorporated
          </h2>
          <h3 className="text-base md:text-xl lg:text-2xl font-light mt-6 md:mt-0">
            Bridging Cultures and Building Futures
          </h3>

          <ul className="flex flex-wrap justify-center my-10 gap-4 md:gap-8">
            {services.map((service) => (
              <li className="w-52 aspect-square flex flex-col gap-2">
                <div className="w-full rounded-full bg-gray-800/20 p-2 aspect-square grid place-items-center">
                  <img
                    src={service.url}
                    alt={`id for ${service.url}`}
                    className="invert-[70%] hue-rotate-[200deg]"
                  />
                </div>
                <span className="text-xl">{service.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-4xl lg:text-6xl mt-32">How we Work?</h2>
        <Features features={RSOFeatures} />
      </div>
      <Footer />
    </main>
  );
}
