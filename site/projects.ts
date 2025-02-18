import { hyperStyled } from "@macrostrat/hyper";
import styles from "./site.module.scss";
import data from "./projects.json";
import Link from "next/link";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useRef } from "react";

const h = hyperStyled(styles);

interface ProjectCardI {
  title: string;
  description: string;
  github?: string;
  nextLink?: string;
  documentation?: string;
}

const ProjectData: ProjectCardI[] = data;

function ProjectCard(props: ProjectCardI) {
  return h("div.project-card", [
    h("div", [
      h("h3", [props.title]),
      h("p.info-description", [props.description]),
    ]),
    h("div.githuhb-link-container", [
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
        {
          href: props.nextLink || "",
          as: props.nextLink,
        },
        [h("a.github-link", ["Demo"])]
      ),
      h.if(props.documentation != undefined)(
        "a.github-link",
        {
          href: props.documentation || "",
          target: "_blank",
        },
        [h("a.github-link", ["Docs"])]
      ),
    ]),
  ]);
}

function SideButton({ onClick, left }) {
  //FaChevronRight
  return h("div.chev-side-con", [
    h("a.chev-down", { onClick }, [
      left ? h(FaChevronLeft) : h(FaChevronRight),
    ]),
  ]);
}

function Projects() {
  const ref = useRef(null);

  const scrollProjects = (offset: number) => {
    if (ref.current) {
      ref.current.scrollLeft += offset;
    }
  };

  return h("div.projects-page", { id: "projects" }, [
    h("h3.projects-title", ["Check out my recent projects!"]),
    h("div.project-carrosel", [
      h("div", [
        h(SideButton, { onClick: () => scrollProjects(-400), left: true }),
      ]),
      h("div.projects-list", { ref }, [
        ProjectData.map((project, i) => {
          return h(ProjectCard, { key: i, ...project });
        }),
      ]),
      h("div", [
        h(SideButton, { onClick: () => scrollProjects(400), left: false }),
      ]),
    ]),
  ]);
}

export { Projects };
