import React from "react";

function Loader() {
  return (
    <div className="h-screen w-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000]">
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
      </div>
    </div>
  );
}

export default Loader;
