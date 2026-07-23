import type { ProjectTech } from "./project";

export interface Experience {

    id:number;

    company:string;

    role:string;

    start:string;

    end:string;

    location:string;

    description:string;

    technologies:ProjectTech[];

    projectSlug?:string;

}