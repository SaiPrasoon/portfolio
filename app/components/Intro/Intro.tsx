import { fetchProfileData } from "@/app/lib/data";
import styles from "./Intro.module.css";
import ResumeButton from "../ResumeButton";

const Intro = async () => {
  const profileData = await fetchProfileData();

  return (
    <div className={styles.introContainer}>
      <div className={styles.introduction}>
        <span className="font-bold">Welcome to My Portfolio!</span>
        <span className="font-normal">{profileData.aboutMe}</span>
        <ResumeButton />
      </div>
    </div>
  );
};

export default Intro;
