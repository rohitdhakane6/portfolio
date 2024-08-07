import ArchiveProjectCard from "@/components/ArchiveProjectCard";
import React from "react";

export default function page() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:py-24">
        <a
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            ></path>
          </svg>
          Rohit Dhakane
        </a>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          All Projects
        </h1>
        <table id="content" className="mt-12 w-full border-collapse text-left">
          <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
            <tr>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                Year
              </th>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                Project
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 ">
                Made at
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                Built with
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            <ArchiveProjectCard
              Year="2023"
              ProjectName="Persona Portfolio"
              Link="https://rohitdhakane.vercel.app/"
              MadeAt=""
              skills={["Next.js", "Tailwind CSS"]}
            />
            <ArchiveProjectCard
              Year="2023"
              ProjectName="Zomato Replica"
              Link="https://github.com/rohitdhakane6/Zomato-Master"
              MadeAt=""
              skills={[
                "Node.js",
                "React.js",
                "MongoDB",
  
              ]}
            />
            <ArchiveProjectCard
              Year="2022"
              ProjectName="Sociopedia Social Media App"
              Link="https://github.com/rohitdhakane6/Social-Media-App-Sociopedia"
              MadeAt=""
              skills={[
                "Node.js",
                "React.js",
                "Mongodb",
                
              ]}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
