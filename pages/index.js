import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [iphoneScale, setIphoneScale] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIphoneScale(true);
    }, 500);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main className={styles.main}>
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <h1 className="text-red-900 mb-5">
              Welcome to my portfolio Murat Demirr
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              iure minima, hic ea maiores qui ullam dolorem nulla accusantium.
              Accusamus, dignissimos? Sunt quaerat dolorem amet nam
              reprehenderit facilis obcaecati cum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              iure minima, hic ea maiores qui ullam dolorem nulla accusantium.
              Accusamus, dignissimos? Sunt quaerat dolorem amet nam
              reprehenderit facilis obcaecati cum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              iure minima, hic ea maiores qui ullam dolorem nulla accusantium.
              Accusamus, dignissimos? Sunt quaerat dolorem amet nam
              reprehenderit facilis obcaecati cum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              iure minima, hic ea maiores qui ullam dolorem nulla accusantium.
              Accusamus, dignissimos? Sunt quaerat dolorem amet nam
              reprehenderit facilis obcaecati cum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              iure minima, hic ea maiores qui ullam dolorem nulla accusantium.
              Accusamus, dignissimos? Sunt quaerat dolorem amet nam
              reprehenderit facilis obcaecati cum!
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
