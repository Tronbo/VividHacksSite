import styles from "./landing.module.css";
import Svg from "../../public/logo.svg";

const Landing = () => {
  return (
    <div className={styles.container}>
      <span className={styles.heading}>
        <h1 className={styles.topHeading}>
          Hacking for <br />
          EVERYONE.
        </h1>
      </span>
      <button className={styles.button}>Register Now</button>
      <h3 className={styles.date}>October 12, 2021</h3>
      <p>
        A 60-Hour Student Lead Hackathon Designed For{" "}
        <span className={styles.text}>Everybody.</span>
      </p>
      <div className={styles.horizontalRule}>
        <div className={styles.line} />
        <img
          src={Svg.src}
          alt="logo.svg"
          style={{
            width: "4.5rem",
            marginRight: "0.5rem",
          }}
        />
        <div className={styles.line} />
      </div>
    </div>
  );
};

export default Landing;
