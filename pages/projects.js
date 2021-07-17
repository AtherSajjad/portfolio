import Head from "next/head";
import Header from "../components/header";
import config from "../config/details";
import Card from "../components/card";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 min-h-screen">
      <Head>
        <title>Dev Ather Sajjad - Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="md:col-span-4 grid grid-cols-1 gap-y-5 p-5 md:p-20">
        {config.projects.map((project, index) => (
          <Card project={project} key={index} />
        ))}
      </main>
    </div>
  );
}
