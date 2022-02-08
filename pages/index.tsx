import Head from "next/head";
import { TitlePage, About, Resume, Projects, Footer, NavBar } from "../site";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Casey Idzikowski</title>
        <meta
          name="description"
          content="Casey Idzikowski's personal website"
        />
      </Head>
      <TitlePage />
      <NavBar />
      <About />
      <Resume />
      <Projects />
      <Footer />
    </div>
  );
}
