import config from "../config/details";

export default function Header() {
  return (
    <nav className="flex flex-col p-5 bg-header text-white w-full">
      <div className="flex flex-col items-center">
        <img
          src="/profile-pic.png"
          width="80px"
          height="80px"
          className="pb-10"
        />
        <p className="text-lg hover:text-headerhover">Mohamed Ather Sajjad</p>
      </div>

      <ul className="pt-10">
        <li className="pb-5 cursor-pointer hover:text-headerhover">
          <a href="/" className="block">
            Intro
          </a>
        </li>
        <li className="pb-5 cursor-pointer hover:text-headerhover">
          <a href={config.resumeURL} className="block" target="_blank">
            Resume
          </a>
        </li>
        <li className="pb-5 cursor-pointer hover:text-headerhover">
          <a href="/projects" className="block">
            Project
          </a>
        </li>
        {/* <li className="pb-5 cursor-pointer hover:text-headerhover">
          <a href="/hireme">Hire Me</a>
        </li> */}
      </ul>
    </nav>
  );
}
