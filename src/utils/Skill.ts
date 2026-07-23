import { skills } from "../data/skills";

export const getSkillsByCategory = (category: string) =>
  skills.filter((skill) => skill.category === category);