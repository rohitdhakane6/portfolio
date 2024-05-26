export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2
          id="about-heading"
          className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only"
        >
          About
        </h2>
      </div>
      <div className="max-w-3xl mx-auto px-4">
        <p className="mb-4">
          In 2021, I joined{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.dypcoei.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dr. D. Y. Patil College of Engineering & Innovation in Varale, Pune (opens in a new tab)"
          >
            Dr. D. Y. Patil College of Engineering & Innovation in Varale, Pune
          </a>
          , to study computer engineering. Since then, I've been diving into
          coding, data structures and algorithms (DSA), and web development.
        </p>
        <div className="mb-4">
          <p className="font-medium text-slate-200">Programming Languages:</p>
          <p >
            I'm proficient in Java, HTML/CSS, JavaScript, and TypeScript.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-medium text-slate-200">Technology & Frameworks:</p>
          <p >
            I work with React.js, Next.js, Node.js, and have experience with
            Prisma ORM, Turborepo, PostgreSQL, and MongoDB.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-medium text-slate-200">Other Skills:</p>
          <p >
            I have basic DevOps skills, problem-solving, and have a strong
            foundation in Data Structures and Algorithms (DSA).
          </p>
        </div>
      </div>
    </section>
  );
}
