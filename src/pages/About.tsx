export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Back in 2021,I joined
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.dypcoei.edu.in/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="https://www.dypcoei.edu.in/ (opens in a new tab)"
          >
            Dr. D. Y. Patil College of Engineering & Innovation in Varale, Pune
          </a>
          , to study computer engineering. Since then, I've been diving into
          coding ,DSA and web development
        </p>
        <p className="mb-4">
          My main focus these days is building accessible user interfaces for
          our customers at . I most enjoy building software in the sweet spot
          where design and engineering meet — things that look good but are also
          built well under the hood. In my free time, I've also released an that
          covers everything you need to know to build a web app with the Spotify
          API.
        </p>
        <p>
          When I’m not at the computer,I hit the gym to stay healthy. I also
          like to rock climbing{" "}
          
        </p>
      </div>
    </section>
  );
}
