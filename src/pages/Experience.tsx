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
            companyName="OctaNet Services Pvt Ltd."
            dateRange="Feb — Mar 2024"
            companyUrl="https://verification.givemycertificate.com/v/8fcd40d1-6345-4a09-9771-e02a888ad033"
            skills={["HTML", "CSS", "JavaScript"]}
            jobDescription="Worked on front-end development tasks using HTML, CSS, and JavaScript."
            jobTitle="Internship"
          />
        </ol>
        <Resume />
      </div>
    </section>
  );
}
