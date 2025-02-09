import { hyperStyled } from "@macrostrat/hyper";
import styles from "./site.module.scss";

const h = hyperStyled(styles);

function Description() {
  return h("p", [
    "I am a software engineer with multiple years\
         of working experience developing full-stack \
         web applications and native Android apps. As a developer at ",
    h(
      "a.macrostrat-link",
      { href: "https://www.audible.com/", target: "_blank" },
      ["Audible"]
    ),
    " my focus is on improving the Core Android app experience. \
     I am passionate about delivering \
    customer facing features as well as improving app architecture. \
    Professionally, I'm excited about constantly \
    learning new technologies, techniques, or algorithms \
    that will make the programs I write faster, more \
    scalable, and more maintainable.\
    ",
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
    src: process.env.NEXT_PUBLIC_BASE_URL + "/profile-v2.png",
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
