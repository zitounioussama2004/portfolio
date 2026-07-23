import { useParams, Navigate } from "react-router-dom";

import Container from "../../components/ui/Container";

import { projects } from "../../data/projects";

import ProjectHero from "./ProjectHero";
import ProjectInfo from "./ProjectInfo";
import ProjectDescription from "./ProjectDescription";
import ProjectTechnologies from "./ProjectTechnologies";
import ProjectFeatures from "./ProjectFeatures";
import ProjectGallery from "./ProjectGallery";

import { useEffect } from "react";

const ProjectDetails = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white py-24">
      <Container>
        <ProjectHero project={project} />

        <ProjectInfo project={project} />

        <ProjectDescription project={project} />

        <ProjectTechnologies project={project} />

        <ProjectFeatures features={project.features} />

        <ProjectGallery project={project} />
      </Container>
    </main>
  );
};

export default ProjectDetails;
