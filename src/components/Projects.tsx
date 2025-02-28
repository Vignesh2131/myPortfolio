import { Badge } from "./ui/badge";
import ProjectCard from "./ProjectCard";
import projects from "@/lib/projects";
const Projects = () => {
  return (
    <section className="flex flex-col mx-auto items-center gap-y-2 mb-12">
      <h2>
        <Badge className="text-base text-white" variant="outline">
          My Projects
        </Badge>
      </h2>
      <div className="flex flex-col items-center gap-y-1 mb-4">
        <h3 className="text-4xl font-bold">Take a look at my latest work!</h3>
        <p className="font-light">
          I&apos;ve explored projects across frontend and backend. Here are some
          of my top picks.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 items-center">
        {projects.map((project, i) => (<ProjectCard
          title={project.projectName}
          description={project.projectDescription}
          skills={project.techstack}
          livelink={project.livelink}
          github={project.repolink}
          key={i} />))}
      </div>
    </section>
  );
}

export default Projects