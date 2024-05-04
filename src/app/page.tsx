import Header from "@/components/Header";
import About from "@/pages/About";
import Experience from "@/pages/Experience";
import Project from "@/pages/Project";

export default function Home() {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Project />
          </main>
        </div>
      </div>
    </>
  );
}
