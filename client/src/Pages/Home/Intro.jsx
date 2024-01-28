import React from "react";

function Intro() {
  return (
    <div className="h-[90vh] bg-primary flex flex-col items-start justify-center gap-8 md:py-10 py-5">
      <h1 className="text-white">Hi I Am</h1>
      <h1 className="md:text-5xl text-3xl text-secondary font-semibold">
        Rohit Dhakane
      </h1>
      <h1 className="md:text-4xl text-2xl text-white font-semibold">
        I Build Things For Web
      </h1>
      <p className="text-white md:w-2/3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, reiciendis pariatur ipsam corporis non maxime officia autem quas! Rerum ipsam consectetur dolorem officiis quisquam? Odio quos maxime autem sed laboriosam?</p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
