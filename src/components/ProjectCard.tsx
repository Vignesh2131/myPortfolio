import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
    <div className="w-[350px] mx-auto rounded-md border border-white">
      <div className="relative w-full h-48">
        <Image
          src={`/${title}.png`}
          alt={title}
          fill
          className="object-fit rounded-t-md"
        />
      </div>
      <div className="p-2 flex flex-col gap-y-2">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <div className="space-y-4">
          <p className="text-gray-700 text-sm">{description}</p>

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

        <div className="flex gap-x-1">
          <Button className="px-2 text-xs">
            <Github />
            GitHub
          </Button>
          <Button className="px-2 text-xs">
            <ExternalLink />
            Live Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
