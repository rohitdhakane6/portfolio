import React from "react";

function LeftSider() {
  return (
    <div className="md:fixed left-0 bottom-2 px-10 py-5 static">
      <div className="flex flex-col items-center">
        <div className="flex md:flex-col gap-3 flex-row">
          <a href="https://www.google.com/">
            {" "}
            <i className="ri-facebook-circle-line text-gray-400 text-xl hover:text-white  "></i>
          </a>

          <i className="ri-mail-line text-gray-400 text-xl hover:text-white "></i>
          <i className="ri-instagram-line text-gray-400 text-xl hover:text-white   "></i>
          <i className="ri-linkedin-box-line text-gray-400 text-xl hover:text-white   "></i>
          <i className="ri-github-line text-gray-400 text-xl hover:text-white   "></i>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] hidden md:inline"></div>
      </div>
    </div>
  );
}

export default LeftSider;
