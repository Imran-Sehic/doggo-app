import Link from "next/link";
import styles from "./ui-navigation.module.css";

const UINavigation: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Link href={"/"} className={styles.logo}>
        Doggo
      </Link>
      <Link href={"/about"} className={styles.link}>
        About
      </Link>
    </div>
  );
};

export default UINavigation;
