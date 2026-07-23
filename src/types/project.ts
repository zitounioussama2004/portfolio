export interface ProjectTech {
    name: string;
    color: string;
}

export interface Project {

    id: number;

    slug: string;

    title: string;

    subtitle: string;

    description: string;

    longDescription: string;

    cover: string;

    images: string[];

    technologies: ProjectTech[];

    features: string[];

    role: string;

    duration: string;

    categories: string[];

    featured: boolean;

}