<<<<<<< HEAD
import Image from "next/image";
import styles from "./page.module.css";
import fgr from "../public/hero.png";
import Button from "@/components/Button/Button";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.heroh1}>
          Better Design <br /> for your digital <br /> products.
        </h1>

        <p className={styles.herop}>
          {" "}
          Turning your Idea into Reality. We bring together <br /> the teams
          from the global tech industry.
        </p>

        <Button url="/portfolio" text="see our Works" />
      </div>
      <div className={styles.hero}>
        <Image src={fgr} alt="logo" className={styles.img} />
      </div>
    </div>
  );
}
=======
import Image from "next/image";
import styles from "./page.module.css";
import fgr from "../public/hero.png";
import Button from "@/components/Button/Button";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.heroh1}>
          Better Design <br /> for your digital <br /> products.
        </h1>

        <p className={styles.herop}>
          {" "}
          Turning your Idea into Reality. We bring together <br /> the teams
          from the global tech industry.
        </p>

        <Button url="/portfolio" text="see our Works" />
      </div>
      <div className={styles.hero}>
        <Image src={fgr} alt="logo" className={styles.img} />
      </div>
    </div>
  );
}
>>>>>>> 91eb025d213b349f0940b74f78dae0b98895365a
