import { Link } from "react-router-dom";

export const Header = () =>{
    return(
        <>
        {
  /* Navigation */
}
<header className="sticky top-0 z-40 py-4 px-6 flex items-center justify-between border-b border-gray-800 bg-gray-900">
  <div className="text-xl font-bold">DevPortfolio</div>

  <nav className="hidden md:flex items-center space-x-8 ">
    <Link to="/about" className="text-gray-300 hover:text-white">
      About
    </Link>
    <Link to="/skill" className="text-gray-300 hover:text-white">
      Skill
    </Link>
    <Link to="/project" className="text-gray-300 hover:text-white">
      Project
    </Link>
    <Link to="/experience" className="text-gray-300 hover:text-white">
      Experience
    </Link>
    <Link to="/contact" className="text-gray-300 hover:text-white">
      Contact
    </Link>
    <Link to="/Blog" className="text-gray-300 hover:text-white">
      Blog
    </Link>
  </nav>

  <div className="flex items-center space-x-4">
    <button className="p-2 rounded-full hover:bg-amber-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    </button>
    <button className="px-4 py-2 border border-gray-700 rounded-md text-white hover:bg-gray-800">
      <a
        href="/Tsedey's Resume(F).pdf"
        className="flex items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </button>
  </div>
</header>;
        </>
    )
}

