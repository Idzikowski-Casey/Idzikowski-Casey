import { hyperStyled } from "@macrostrat/hyper";
import styles from "./site.module.scss";

const h = hyperStyled(styles);

function Description() {
  return h("p", [
    "I am a software developer with over 2 years\
         of working experience developing full-stack \
         web applications. As a developer at ",
    h(
      "a.macrostrat-link",
      { href: "https://macrostrat.org/", target: "_blank" },
      ["Macrostrat"]
    ),
    " I am part of a small team which has \
         allowed me to gain knowledge and insight\
          into every aspect of application development.\
        Although my work has encompassed frontend, \
        backend, testing, and even DevOps, my \
        passion lies in solving complex logic problems with scalable solutions.",
  ]);
}

function ContactMe() {
  return h("div.contact-me", [
    h("div", [
      h("p", ["Casey Idzikowski"]),
      h("p", ["idzikowski.casey@gmail.com"]),
    ]),
    h(AccountBtns),
  ]);
}

function AccountBtns() {
  const github = "https://github.com/Idzikowski-Casey";
  const linkden = "https://www.linkedin.com/in/casey-idzikowski-742858108/";

  return h("div.acn-btns", [
    h("a", { href: github, target: "_blank" }, [
      h("img", {
        src: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
        width: 125,
      }),
    ]),
    h("a", { href: linkden, target: "_blank" }, [
      h("img", {
        src: "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",
        width: 125,
      }),
    ]),
  ]);
}

function MyImage() {
  return h("img.profile-pic", {
    src: process.env.NEXT_PUBLIC_BASE_URL + "/profilepic.png",
    alt: "profile-pic",
  });
}

function About() {
  return h("div.about-page", { id: "about" }, [
    h("div.two-column", [
      h(MyImage),
      h("div", [
        h("div", [h("h2", ["About Me"]), h(Description)]),
        h("div", [h("h2", ["Contact Me"]), h(ContactMe)]),
      ]),
    ]),
  ]);
}

export { About };
