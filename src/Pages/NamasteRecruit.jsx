import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";

// import { supportOrganization, howWeWork } from "../constants";

import Features from "../components/Features";

import { NamasteRecruitLayout, NamasteFeatures } from "../constants";

export default function NamasteRecruit() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />

      <div className="container mx-auto">
        <Projects projects={NamasteRecruitLayout} />

        <h2 className="text-4xl lg:text-6xl mt-32">Our Features</h2>
        <Features features={NamasteFeatures} />
      </div>

      <Footer />
    </main>
  );
}
