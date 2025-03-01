import {
  House,
  FolderOpenDot,
  Github,
  UserRound,
  Boxes,
  Twitter,
  FileUser
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-8 inset-x-0 mx-auto z-[5000] flex justify-center px-4 py-3 max-w-fit rounded-full border bg-black border-white shadow-sm shadow-slate-50 mb-10">
      <div className="flex items-center justify-around gap-x-2">
        <ul className="flex items-center gap-x-3">
          <li className="transition font-light duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
            <House strokeWidth={1} className="h-5 w-5" />
          </li>
          <li className="transition  duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
            <Boxes strokeWidth={1} className="h-5 w-5" />
          </li>
          <li className="transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
            <FolderOpenDot strokeWidth={1} className="h-5 w-5" />
          </li>
          <li className="transition  duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
            <UserRound strokeWidth={1} className="h-5 w-5" />
          </li>
        </ul>
        <div className="bg-white h-full w-[1px]"></div>

        <ul className="flex items-center gap-x-3">
          <a href="\Vignesh_Resume.pdf" download>
            <li className="transition  duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
              <FileUser strokeWidth={1} className="h-5 w-5" />
            </li>
          </a>
          <a href="https://github.com/Vignesh2131">
            <li className="transition  duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
              <Github strokeWidth={1} className="h-5 w-5" />
            </li>
          </a>
          <a href="https://x.com/automatedlife21">
            <li className="transition  duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
              <Twitter strokeWidth={1} className="h-5 w-5" />
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
