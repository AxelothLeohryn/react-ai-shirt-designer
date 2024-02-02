import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <div className="flex flex-row gap-5 bg-gray rounded p-2 shadow-sm">
              <img
                src="./react.svg"
                alt="logo"
                className="w-8 h-8 object-contain"
              ></img>
              <img
                src="./threejs.png"
                alt="logo"
                className="w-8 h-8 object-contain"
              ></img>
              <img
                src="./framer-motion.svg"
                alt="logo"
                className="w-8 h-8 object-contain"
              ></img>
              <img
                src="./nodejs-icon.svg"
                alt="logo"
                className="w-8 h-8 object-contain"
              ></img>
            </div>
          </motion.header>

          <motion.div className="" home-content {...headContainerAnimation}>
            <motion.div className="flex flex-col gap-5" {...headTextAnimation}>
              <h1 className="head-text">
                {" "}
                LET'S <br className="xl:block hidden" />
                DESIGN
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation}>
              <p className="max-w-md font-normal text-gray-600 text-base">
                Visualize your unique and exclusive T-shirt with this unique
                <strong> 3D </strong>customization tool.{" "}
                <strong>Choose your own files</strong> or{" "}
                <strong>ask the AI</strong> to make a design for you.
              </p>

              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm mt-5"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
