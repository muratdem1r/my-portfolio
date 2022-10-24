import { useState } from "react";
import { Switch } from "@headlessui/react";
import styles from "./Me.module.scss";

function Me() {
  const [capped, setCapped] = useState(true);
  const [takeOn, setTakeOn] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const onButtonClick = () => {
    setIsButtonDisabled(true);

    // **** here's the timeout ****
    setTimeout(() => setIsButtonDisabled(false), 1000);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 text-white dark:text-black md:w-3/4 md:mx-auto">
        <div className="grid content-center mt-20">
          <h1 className="text-center font-[James-Stroker] text-7xl m-5 mb-0">
            Murat Demir
          </h1>
          <div className={styles.front_end}>
            <h2>Front-End Developer</h2>
            <h2>Front-End Developer</h2>
          </div>
        </div>
        <div>
          <div
            className={`${styles.me_photo} ${takeOn && styles.take_on} ${
              takeOn == false && styles.take_off
            }`}
          ></div>
          <div className="mt-2 md:ml-16 grid justify-center items-center ">
            <p>{capped ? "Dont click!" : "Put my hat on me!"}</p>
            <div className="py-2 flex justify-center items-center">
              <Switch
                checked={capped}
                onChange={() => {
                  setCapped((prev) => !prev);
                  setTakeOn(!capped);
                  onButtonClick();
                }}
                disabled={isButtonDisabled}
                className={`${capped ? "bg-[#8F7D56]" : "bg-[#5c4f34]"}
  relative inline-flex h-[25px] w-[49px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">button for image animation</span>
                <span
                  aria-hidden="true"
                  className={`${capped ? "translate-x-0" : "translate-x-6"}
    pointer-events-none inline-block h-[22px] w-[22px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.loadImages} aria="hidden"></div>
    </>
  );
}

export default Me;
