import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Doggo - About the foundation!",
  description: "About Doggo and why the Doggo project!",
};

const About: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1>
        Welcome to <span>Doggo</span>!
      </h1>
      <h4>
        <span>Doggo</span> is a project of a couple of people who are willing to
        centralize one of the biggest dog database in a single application.
      </h4>
      <h4>
        At <span>Doggo</span> you can search for a dog by breed and sub-breed.
      </h4>
    </div>
  );
};

export default About;
