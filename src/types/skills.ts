import type { IconType } from "react-icons";


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
        |"Artificial Intelligence"
        |"Database"
        |"Tools"
        |"Development Tools";

}