import { neon } from "@neondatabase/serverless";

const sql = neon(`${process.env.DATABASE_URL}`);

const fetchProfileData = async () => {
  "use server";

  const rows = await sql("select * from profiledata;");

  return rows[0];
};

export { fetchProfileData };
