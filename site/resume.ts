import { hyperStyled } from "@macrostrat/hyper";
import { ReactChild } from "react";
import styles from "./site.module.scss";
import data from "./resume.json";

const h = hyperStyled(styles);

// interface ResumeDataI {
//   education: InfoChildI[];
//   work: InfoChildI[];
// }

interface InfoBlockI {
  header: string;
  children: ReactChild;
}

const info: InfoChildI[] = [
  {
    header: "University of Wisconsin Madison",
    subtitle: "B.S Geosciences",
    date: "May 2020",
    description:
      "At the University of Wisconsin-Madison, I assisted a then Ph.D. candidate, now Postdoc, in a 6 week long geologic field season in Western Australia. This fieldwork led to 2 years of independent undergraduate research culminating in a poster presentation at Geologic Society of America 2019. Studying geoscience has provided me with a strong interdisciplinary education.",
  },
];

interface InfoChildI {
  header: string;
  subtitle: string;
  date: string;
  description: string;
}

function InfoChild(props: InfoChildI) {
  return h("div", [
    h("h2.info-child-header", [props.header]),
    h("div.subtitle-date", [
      h("p.info-subtitle", [props.subtitle]),
      " | ",
      h("p.info-date", [props.date]),
    ]),
    h("p.info-description", [props.description]),
  ]);
}

function InfoBlock(props: InfoBlockI) {
  return h("div.info-block", [
    h("h3.info-header", props.header),
    h("div.info-child", [props.children]),
  ]);
}

interface SkillsI {
  header: string;
  values: string[];
}

function Skills(props: SkillsI) {
  return h("div", [
    h("h3.info-child-header", [props.header]),
    props.values.map((v, i) => {
      return h("li.skill-value", { key: i }, [v]);
    }),
  ]);
}

function Resume() {
  return h("div.resume-page", { id: "resume" }, [
    Object.entries(data).map(([key, value], i) => {
      if (key == "skills") return;
      return h("div", [
        h(InfoBlock, { key: i, header: key }, [
          //@ts-ignore
          value.map((infoChild: InfoChildI, j: number) => {
            return h(InfoChild, { key: j, ...infoChild });
          }),
        ]),
        h("div.divider"),
      ]);
    }),
    h(InfoBlock, { header: "skills" }, [
      h("div.skills", [
        Object.entries(data.skills).map(([key, value], n) => {
          return h(Skills, { key: n, header: key, values: value });
        }),
      ]),
    ]),
  ]);
}

export { Resume };
