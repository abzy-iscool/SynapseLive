import { motion } from "framer-motion";

import feature2 from "../assets/images/feature2.png";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features2 = () => (
  <section className="w-full bg-bgDark2 mt-12 sm:mt-24 mb-12 lg:my-20 lg:mb-24 pt-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
            <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src={feature2.src}
                alt="Feature image 2"
                className="rounded-xl  main-border-gray"
              />
            </div>
        </div>

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="block-subtitle">Share, Care, and Collaborate</span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Real-Time Screen Sharing
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
            Collaboration is at the heart of every great project. With our real-time screen and file sharing, you can share your ideas as they happen. Show your team what you’re working on, get instant feedback, and watch productivity soar.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
