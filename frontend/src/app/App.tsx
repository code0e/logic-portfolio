import { Footer, Header, SiteShell } from "@/components/layout";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { GithubActivity } from "@/components/sections/GithubActivity";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Technologies } from "@/components/sections/Technologies";
import { useSectionNav } from "@/hooks/useSectionNav";

export default function App() {
  const { refs, scrollTo } = useSectionNav();

  return (
    <SiteShell>
      <Header onNavigate={scrollTo} />

      <main className="site-main">
        <Hero onContact={() => scrollTo("contact")} />
        <Projects sectionRef={refs.projects} />
        <About sectionRef={refs.about} />
        <Experience sectionRef={refs.experience} />
        <Technologies />
        <GithubActivity />
        <Contact sectionRef={refs.contact} />
      </main>

      <Footer />
    </SiteShell>
  );
}
