import {
  fetchAwards,
  fetchContactInfo,
  fetchEducation,
  fetchExperiences,
  fetchProfileData,
  fetchSkills,
} from "@/app/lib/data";
import AdminDashboard from "./components/AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const [profile, contact, experiences, skills, educationList, awards] =
    await Promise.all([
      fetchProfileData(),
      fetchContactInfo(),
      fetchExperiences(),
      fetchSkills(),
      fetchEducation(),
      fetchAwards(),
    ]);

  return (
    <AdminDashboard
      profile={profile}
      contact={contact}
      experiences={experiences}
      skills={skills}
      educationList={educationList}
      awards={awards}
    />
  );
}
