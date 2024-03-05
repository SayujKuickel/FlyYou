import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Features from "../components/Features";

import { ABSLayout, ABSFeatures } from "../constants";

export default function ABSEnglishConversation() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />

      <div className="container mx-auto">
        <Projects projects={ABSLayout} />

        <h2 className="text-4xl lg:text-6xl mt-32">Our Features</h2>
        <Features features={ABSFeatures} />
      </div>

      <Footer />
    </main>
  );
}
