import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
interface CardProps{
  title: string,
  description: string,
  skills: string[],
  livelink: string,
  github:string,
  
}
export default function ProjectCard({title,description,skills,livelink,github}:CardProps) {
  return (
    <div className="w-[300px] md:w-[350px] mx-auto rounded-md border border-white">
      <div className="relative w-full h-44 md:h-48">
        <Image
          src={`/${title}.png`}
          alt={title}
          fill
          className="object-fit rounded-t-md"
        />
      </div>
      <div className="p-2 flex flex-col sm:gap-y-1 md:gap-y-2">
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        <div className="flex flex-col gap-y-1">
          <p className="text-gray-500 text-sm">{description}</p>

          <div className="flex flex-wrap gap-1">
            {skills.map((skill, i) => (
              <Badge
                key={i}
                variant="outline"
                className="bg-white text-black border-black"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-x-1 mt-1">
          <a href={github}>
            <Badge className="px-2 text-xs flex gap-x-1">
              <Github size={14}/>
              GitHub
            </Badge>
          </a>
          <a href={livelink}>
            <Badge className="px-2 text-xs flex gap-x-1">
              <ExternalLink size={14} />
              Live Demo
            </Badge>
          </a>
        </div>
      </div>
    </div>
  );
}
