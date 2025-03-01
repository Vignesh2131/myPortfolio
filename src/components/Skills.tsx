import { Badge } from "./ui/badge";
const skillset = ["React.js", "Next.js", "Recoil", "TailwindCSS", "TypeScript", "JavaScript", "MongoDB", "Prisma ORM", "Node.js", "Express.js",
    "Cloudflare","Socket.io"
]
const Skills = () => {
  return (
    <section className="flex mx-auto flex-col w-[300px] md:w-[700px] mb-8">
      <div className="mb-0 md:mb-2">
        <h1 className="text-base md:text-xl font-bold">Skills</h1>
      </div>
      <div className="">
        {skillset.map((skill, i) => (
          <Badge key={i} variant="secondary" className="mr-1 mb-1">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}

export default Skills