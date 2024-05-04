import ExperienceCard from "@/components/ExperienceCard";
import Resume from "@/components/Resume";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          <ExperienceCard
            companyNamde="Upstatement"
            dateRange="2018 — 2024"
            companyUrl="https://upstatement.com"
            skills={["TypeScript", "javaScript"]}
            jobDescription="Build, style, and ship high-quality websites, design systems,
                  mobile apps, and digital experiences for a diverse array of
                  projects for clients including Harvard Business School,
                  Everytown for Gun Safety, Pratt Institute, Koala Health,
                  Vanderbilt University, The 19th News, and more. Provide
                  leadership within engineering department through close
                  collaboration, knowledge shares, and spearheading the
                  development of internal tools."
            jobTitle="Lead Engineer"
          />
        </ol>
        <Resume/>
      </div>
    </section>
  );
}
