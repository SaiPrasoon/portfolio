import React from "react";
import styles from "./Intro.module.css";
import Image from "next/image";
import MyImage from "@/assets/My_Image.jpg";

const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <Image src={MyImage} alt="My Image" className={styles.myImage} />
      <div className={styles.introduction}>
        <span className="font-bold">Hello There!</span>
        <span className="font-normal">
          I’m Sai Prasoon, a Computer Science graduate with over 5 years of
          experience as a software engineer. I specialize in developing
          scalable, user-friendly web applications and have a strong expertise
          in Angular, ReactJS, and AI-driven platforms. I excel in dynamic
          environments, tackling complex challenges with innovative solutions.
          As a dedicated team leader and mentor, I am passionate about fostering
          growth, collaboration, and driving impactful results.
        </span>
      </div>
    </div>
  );
};

export default Intro;
