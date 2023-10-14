import Image from "next/image";
import styles from "./ui-hero.module.css";

const UIHero: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2>
        Welcome to <span>Doggo</span>
        <br />
        Experience the dog research as never before
      </h2>
      <div>
        <Image
          src="/hero-dog.png"
          alt="dog image"
          width={250}
          height={300}
          className={styles.dog}
        />
      </div>
    </div>
  );
};

export default UIHero;
