// client-side component
"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

// Define the About component.
const About = () => {
  // Use the useSectionInView custom hook to track when the "About" section is in view.
  const { ref } = useSectionInView("About");

  // Return the About section, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Display the section heading for "About me." */}
      <SectionHeading>About me</SectionHeading>

      {/* Display a paragraph with information about the user's background and interests. */}
      <p className="mb-3">
        My name is Julian Carter, and I am a highly skilled full stack developer with
        expertise in AI/ML, web scraping and automation. Residing in the
        Tallinn, Harjumaa, Estonia, and a proud graduate of
        Tallinn University of Technology, I bring a unique blend of technical prowess and creative
        problem-solving to every project I undertake. With a passion and a
        team-oriented mindset, I approach challenges with dedication and strive
        to elevate projects to new heights. Let's collaborate and achieve
        outstanding results together!
      </p>

      {/* Display another paragraph about the user's interests and hobbies. */}
      <p>
        Apart from sitting in front of Computer 🖥️ I like playing basketball 🏀
        and love spending time outdoors in Nature 🌴
      </p>
      <p>
        Got something to say or need any kind of help please feel free to reach
        out! I'll try my best to respond.
      </p>
    </motion.section>
  );
};

// Export the About component.
export default About;
