import ProjectCard from "@/components/ProjectCard";

export default function Project() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list ">
          <ProjectCard
            Title="Personal Portfolio"
            ImagePath="/Portfolio.png"
            Url="/"
            Description="Portfolio is a personal website build using Next.js and Tailwind CSS to showcase my projects and skills"
          />
          <ProjectCard
            Title="Zomato replica"
            ImagePath="/Zomato-master.png"
            Url="https://github.com/rohitdhakane6/Zomato-Master"
            Description="Zomato Clone is a web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It aims to replicate the functionality of the Zomato platform, allowing users to explore restaurants, view menus, and login."
          />
          <ProjectCard
            Title="Sociopedia Social Media App"
            ImagePath="https://private-user-images.githubusercontent.com/109848812/271590678-9c3625e9-c4e9-4269-94e3-f06bd8375efe.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTY3NTExNTYsIm5iZiI6MTcxNjc1MDg1NiwicGF0aCI6Ii8xMDk4NDg4MTIvMjcxNTkwNjc4LTljMzYyNWU5LWM0ZTktNDI2OS05NGUzLWYwNmJkODM3NWVmZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUyNlQxOTE0MTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iODM1MzE5YTA2ZjkxNDE4MWEwYjMyZjQ0YjgxYjRiNjM4ZmFlYmE2MWRiZmFlMWQ0YTkxNTRmMjY1ZjQ4YzExJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.w9aBTBXHNPEcUvJzElPgoT5qLI6kJP0BwIuM9U0pW-U"
            Url="https://github.com/rohitdhakane6/Social-Media-App-Sociopedia?tab=readme-ov-file"
            Description="Sociopedia is a social media application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to connect, share posts, and interact with each other in a social media environment."
          />
        </ul>
        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight  text-slate-200 group"
            aria-label="View Full Project Archive"
            href="/archive"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Full Project{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  Archive
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
