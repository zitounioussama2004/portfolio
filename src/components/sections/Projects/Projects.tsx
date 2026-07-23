import { useMemo, useState } from "react";

import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";

import { projects } from "../../../data/projects";

import ProjectGrid from "./ProjectGrid";
import ProjectToolbar from "./ProjectToolbar";
import LoadMore from "./LoadMore";

const ITEMS_PER_PAGE = 6;

const Projects = () => {
  const [search, setSearch] = useState("");

  const [selected, setSelected] = useState("All");

  const [visible, setVisible] = useState(ITEMS_PER_PAGE);

  const categories = useMemo(() => {
    const all = new Set<string>();

    projects.forEach((project) => {
      project.categories.forEach((category) => {
        all.add(category);
      });
    });

    return ["All", ...Array.from(all).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selected === "All" || project.categories.includes(selected);

      const keyword = search.trim().toLowerCase();

      const matchesSearch =
        keyword === "" || project.title.trim().toLowerCase().includes(keyword);

      return matchesCategory && matchesSearch;
    });
  }, [search, selected]);

  const displayedProjects = filteredProjects.slice(0, visible);

  return (
    <section id="projects" className="py-32">
      <Container>
        <SectionTitle title="Featured Projects" subtitle="Things I've Built" />

        <ProjectToolbar
          search={search}
          onSearch={(value) => {
            setSearch(value);

            setVisible(ITEMS_PER_PAGE);
          }}
          selected={selected}
          onSelect={(value) => {
            setSelected(value);

            setVisible(ITEMS_PER_PAGE);
          }}
          categories={categories}
        />

        <ProjectGrid projects={displayedProjects} />

        <LoadMore
          visible={visible}
          total={filteredProjects.length}
          onLoadMore={() => setVisible((v) => v + ITEMS_PER_PAGE)}
          onShowLess={() => setVisible(ITEMS_PER_PAGE)}
        />
      </Container>
    </section>
  );
};

export default Projects;
