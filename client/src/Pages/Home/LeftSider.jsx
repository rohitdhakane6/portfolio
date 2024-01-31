import React from "react";

function LeftSider() {
  return (
    <div className="md:fixed left-0 bottom-2 px-10 py-5 static">
      <div className="flex flex-col items-center">
        <div className="flex md:flex-col gap-3 flex-row">
          <a href="mailto:rohitdhakane6@gmail.com" rel="noopener noreferrer">
            <i className="ri-mail-line text-gray-400 text-xl hover:text-white"></i>
          </a>
          <a href="https://www.linkedin.com/in/rohit-dhakane/" target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-box-line text-gray-400 text-xl hover:text-white"></i>
          </a>
          <a href="https://github.com/rohitdhakane6" target="_blank" rel="noopener noreferrer">
            <i className="ri-github-line text-gray-400 text-xl hover:text-white"></i>
          </a>
          <a href="https://www.instagram.com/rohit__dhakane" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-line text-gray-400 text-xl hover:text-white"></i>
          </a>
          <a href="https://x.com/Rohitdhakane_" target="_blank" rel="noopener noreferrer">
            <i className="ri-twitter-line text-gray-400 text-xl hover:text-white"></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] hidden md:inline"></div>
      </div>
    </div>
  );
}

export default LeftSider;
