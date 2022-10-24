import React from "react";
import styles from "./MobileFirstSection.module.scss";
import { GiTeacher } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";

function MobileFirstSection() {
  return (
    <div className="relative">
      <div className={styles.overlay_text}>MOBILE FIRST</div>
      <div className={styles.main}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <div className="flex justify-between items-center bg-right bg-cover">
            <div>
              <h1 className="gradient-text-purple font-bold text-2xl">
                What is a coding bootcamp?
              </h1>
              <p className="font-bold max-w-2xl leading-7 my-4 ">
                A coding bootcamp is a technical training program that teaches
                the programming skills that employers look for.
              </p>
              <p className="max-w-2xl leading-7 my-4">
                Coding bootcamps enable students with little coding proficiency
                to focus on the most important aspects of coding and immediately
                apply their new coding skills to solve real-world problems.
              </p>
              <p className="max-w-2xl leading-7 my-4">
                The goal of many coding bootcamp attendees is to transition into
                a career in web development. They do this by learning to build
                applications at a professional level - which provides the
                foundation they need to build production-ready applications and
                demonstrate they have the skills to add real value to a
                potential employer.
              </p>
            </div>
            <GiTeacher className="hidden lg:block w-1/5 h-1/5 text-zinc-900 mr-10" />
          </div>
          <div className="flex justify-between items-center lg:bg-p-quadro bg-right bg-cover my-32">
            <TbCertificate className="hidden lg:block w-1/5 h-1/5 text-zinc-900 ml-10" />
            <div className="lg:text-right">
              <h1 className="gradient-text-purple font-bold text-2xl">
                Why Coding Bootcamps Are Important?
              </h1>
              <p className="font-bold max-w-2xl leading-7 my-4 ml-auto">
                We live in a world where technology is continuing to evolve.
                Technology is drastically changing how we do everything in our
                lives. It’s more common than ever to get around using Uber or
                Lyft, technology driven transportation companies. Companies like
                Apple, Square and PayPal are changing how we pay for things. It
                seems every industry is being radically impacted by how
                technology is shaping the world around us.
              </p>
              <p className="max-w-2xl leading-7 my-4 ml-auto">
                Software is taking over the world. This shift changes how we
                live our lives, but also requires employees with software
                engineering skills capable of building the technology that we
                all use.
              </p>
              <p className="max-w-2xl leading-7 my-4 ml-auto">
                Attending a coding bootcamp is a viable path to transition into
                a career in web development as an alternative (or supplement) to
                graduating with a 4 year degree in Computer Science to helping
                fill the need of skilled software engineers in industry.
              </p>
            </div>
          </div>
          <div className="my-20">
            <h1 className="gradient-text-orange text-center font-bold text-2xl">
              There’s a lot to learn!
            </h1>
            <p className="font-bold text-center leading-7 my-4">
              Getting professional-level development skills takes a lot of work
              and there are many different skills that are important to learn!
            </p>
            <p className="text-center leading-7 my-4">
              Regardless of the program you choose to enroll in its important to
              know that as a professional developer it is important to have
              certain skill sets. Things like: a programming language, a web
              framework, experience with server and hosting functionality, and
              databases are all important skills to learn. Within each of these
              categories of technologies there are specific technologies, each
              with trade-offs and benefits both for and against them.
            </p>
            <p className="text-center leading-7 my-4">
              Does this sound like a big commitment to you? If it does I don’t
              blame you. Luckily, when learning a skill as complex as
              programming picking up the foundations will set you up better in
              the long run. Given the programming field changes so frequently,
              your best bet is to focus your energy on understanding the
              programming concepts that will withstand the test of time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileFirstSection;
