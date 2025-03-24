import { neon } from "@neondatabase/serverless";

const sql = neon(`${process.env.DATABASE_URL}`);

const fetchProfileData = async () => {
  "use server";

  const rows = await sql("select * from profiledata;");

  return rows[0];
};

const fetchRecentExperiences = async () => {
  "use server";

  try {
    const recentExperiences = await sql(
      "SELECT * FROM experience ORDER BY startDate DESC LIMIT 3;"
    );

    return recentExperiences;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
};

export { fetchProfileData, fetchRecentExperiences };
