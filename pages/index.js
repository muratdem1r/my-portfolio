import Head from "next/head";
import MobileFirstSection from "../components/MobileFirstSection/MobileFirstSection";
import Me from "../components/Me/Me";

export default function Home() {
  return (
    <>
      <Head>
        <title>Murat Demir</title>
        <meta name="description" content="Generated by muratdem1r" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto p-5">
        <Me />
        {/* <MobileFirstSection /> */}
      </div>
    </>
  );
}
