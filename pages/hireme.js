import Head from "next/head";
import Header from "../components/header";

export default function HireMe() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 min-h-screen">
      <Head>
        <title>Dev Ather Sajjad - Hire ME</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="md:col-span-4 flex flex-col flex-grow items-center p-5 md:p-20">
        <p>Not available to hire now</p>
      </main>
    </div>
  );
}
