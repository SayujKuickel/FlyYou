import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />
      <div className="grid place-items-center text-center mt-20">
        <div>
          <h2 className="text-6xl lg:text-8xl font-bold mt-6 md:mt-0">
            Error 404
          </h2>
          <h2 className="text-base md:text-xl lg:text-2xl font-light mt-6 md:mt-0">
            The Page you are looking for is not found
          </h2>
          <Button alignment="center" classes="mt-8">
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
