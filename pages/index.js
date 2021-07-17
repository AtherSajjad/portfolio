import Head from "next/head";
import Header from "../components/header";
import config from "../config/details";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 min-h-screen">
      <Head>
        <title>{config.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="md:col-span-4 flex flex-col flex-grow items-center p-5 md:p-20">
        <img src="/profile-pic.png" className="w-40 h-40" />
        <p className="pt-10 text-lg">
          Hi! I am {config.name}. I am a passionate programmer with 5
          years of experience. Loves to mentor upcoming developers. On a path to
          be a 10x developer. I have a masters degree in computer science.
          Currently working as {config.position} for{" "}
          <a href={config.companyURL}>{config.companyName}</a>. Loves building
          enterprise software. In my 5 years of experience i have hands on
          experience in developing, Web, Mobile , Desktop and IoT based
          applications.
        </p>
        <div className="flex flex-row items-center justify-between pt-5">
          <a
            href={config.github}
            title="Sajjad on Github"
            className="px-4"
            target="_blank"
          >
            <img src="/github.png" className="w-12" />
          </a>
          <a
            href={config.twitter}
            title="Sajjad on Twitter"
            className="px-4"
            target="_blank"
          >
            <img src="/twitter.png" className="w-12" />
          </a>
          <a
            href="https://www.facebook.com/ather.sajjad1"
            title={config.facebook}
            className="px-4"
            target="_blank"
          >
            <img src="facebook.png" className="w-12" />
          </a>
        </div>
      </main>
    </div>
  );
}
