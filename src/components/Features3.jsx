import { motion } from "framer-motion";

import feature3 from "../assets/images/feature3.png";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features3 = () => {
  return (
    <section
      className="w-full bg-bgDark2 pt-24 -mt-8  mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0    md:pt-[12vw] lg:pt-16"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="block-subtitle">The Instant Rewind</span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Record and Replay Meetings
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
              Never miss a moment with our recording feature. Whether it’s for review or for those who couldn’t attend, you can easily record meetings and replay them later. It’s like having your own personal meeting archive
              </p>
              <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Meeting Recording</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Cloud Storage</span>
                </li>
              </ul>
            </div>
          </div>
            <div className="mb-8 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  src={feature3.src}
                  alt="Feature image recording"
                  className="rounded-xl  main-border-gray mx-auto "
                  aria-label="Feature image 3"
                />
              </div>
            </div>
        </div>
      </motion.div>
    </section>
  );
};
