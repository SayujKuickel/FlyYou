export default function Footer() {
  return (
    <footer className="mt-32">
      <div
        className="container mx-auto bg-[#141415] md:rounded-2xl 
                  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4
                  p-3 md:p-6 lg:p-10
      "
      >
        <div>
          <img src="fly-youlogo.png" className="h-16" alt="" />
          <p className="text-[#F9FAFBaa]">Flyyou &copy; All right reserved</p>

          <h3 className="uppercase font-bold mt-4 mb-2">Developed By</h3>
          <img src="fly-youlogo.png" className="h-12" alt="" />
        </div>

        <ul className="flex flex-col gap-3 mt-6 md:mt-0">
          <li>
            <h3 className="uppercase font-bold">Quick Links</h3>
          </li>
          <li className="text-[#F9FAFBaa]">
            <a href="">Company</a>
          </li>
          <li className="text-[#F9FAFBaa]">
            <a href="">Articles</a>
          </li>
          <li className="text-[#F9FAFBaa]">
            <a href="">Contacts</a>
          </li>
          <li className="text-[#F9FAFBaa]">
            <a href="">Recuritment</a>
          </li>
          <li className="text-[#F9FAFBaa]">
            <a href="">Privacy Policy</a>{" "}
          </li>
        </ul>

        <ul className="flex flex-col gap-3 mt-6 md:mt-0">
          <li>
            <h3 className="uppercase font-bold">projects</h3>
          </li>
          <li className="text-[#F9FAFBaa]">
            <a href="">Registered Support Organization</a>
          </li>
          <li className="text-[#F9FAFBaa]">
            <a href="">Namaste Recruit</a>
          </li>
          <li className="text-[#F9FAFBaa]">
            <a href="">ABS English Conversation</a>
          </li>
        </ul>

        <div>
          <h2 className="text-2xl font-bold mt-6 md:mt-0">Follow us</h2>
          <div className="flex gap-3 my-4">
            <a href="">
              <img
                className="w-10"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
              />
            </a>
            <a href="">
              <img
                className="w-10"
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
