import { fetchProfileData } from "@/app/lib/data";
import styles from "./Intro.module.css";

const Intro = async () => {
  const profileData = await fetchProfileData();

  return (
    <div className={styles.introContainer}>
      <div className={styles.introduction}>
        <span className="font-bold">Welcome to My Portfolio!</span>
        <span className="font-normal">{profileData.aboutMe}</span>
      </div>
    </div>
  );
};

export default Intro;
