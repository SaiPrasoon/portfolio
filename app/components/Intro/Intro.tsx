import { fetchProfileData } from "@/app/lib/data";
import MyImage from "@/assets/My_Image.jpg";
import Image from "next/image";
import styles from "./Intro.module.css";

const Intro = async () => {
  const profileData = await fetchProfileData();

  return (
    <div className={styles.introContainer}>
      <Image src={MyImage} alt="My Image" className={styles.myImage} />
      <div className={styles.introduction}>
        <span className="font-bold">Hello There!</span>
        <span className="font-normal">{profileData.aboutme}</span>
      </div>
    </div>
  );
};

export default Intro;
