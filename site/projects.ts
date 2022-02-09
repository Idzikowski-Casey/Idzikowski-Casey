import { hyperStyled } from "@macrostrat/hyper";
import styles from "./site.module.scss";
import data from "./projects.json";
import Link from "next/link";

const h = hyperStyled(styles);

interface ProjectCardI {
  title: string;
  description: string;
  github?: string;
  nextLink?: string;
}

const ProjectData: ProjectCardI[] = data;

function ProjectCard(props: ProjectCardI) {
  return h("div.project-card", [
    h("h3", [props.title]),
    h("p.info-description", [props.description]),
    h.if(props.github != undefined)(
      "a.github-link",
      {
        href: props.github,
        target: "_blank",
      },
      ["View on Github"]
    ),
    h.if(props.nextLink != undefined)(
      Link,
      { href: props.nextLink||"", as: process.env.BACKEND_URL + props.nextLink },
      [h("a.github-link", ["Demo"])]
    ),
  ]);
}

function Projects() {
  return h("div.projects-page", { id: "projects" }, [
    h("h3.projects-title", ["Check out my recent projects!"]),
    h("div.projects-list", [
      ProjectData.map((project, i) => {
        return h(ProjectCard, { key: i, ...project });
      }),
    ]),
  ]);
}

export { Projects };
