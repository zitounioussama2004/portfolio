import type { IconType } from "react-icons";

export interface Skills {
  name: string;
  icon: IconType;
  level: number;
  category:
    | "Backend"
    | "Frontend"
    | "Mobile"
    | "AI"
    | "Database"
    | "Tools";
  color: string;
}


export interface Skill {

    id:number;

    name:string;

    icon:IconType;

    color:string;

    level:number;

    category:
        |"Backend"
        |"Frontend"
        |"Mobile"
        |"AI"
        |"Database"
        |"Tools";

}