import React from "react";

function LeftSider() {
  return (
    <div className="md:fixed left-0 bottom-2 px-10 py-5 static">
      <div className="flex flex-col items-center">
        <div className="flex md:flex-col gap-3 flex-row">
          <a href="https://www.google.com/">
            {" "}
            <i class="ri-facebook-circle-line text-gray-400 text-xl hover:text-white  "></i>
          </a>

          <i class="ri-mail-line text-gray-400 text-xl hover:text-white "></i>
          <i class="ri-instagram-line text-gray-400 text-xl hover:text-white   "></i>
          <i class="ri-linkedin-box-line text-gray-400 text-xl hover:text-white   "></i>
          <i class="ri-github-line text-gray-400 text-xl hover:text-white   "></i>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] hidden md:inline"></div>
      </div>
    </div>
  );
}

export default LeftSider;
