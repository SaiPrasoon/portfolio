import { neon } from "@neondatabase/serverless";
import {
  formatExperienceResponse,
  formatProfileDataResponse,
} from "../services/dataFormatter";

const sql = neon(`${process.env.DATABASE_URL}`);

const fetchProfileData = async () => {
  "use server";

  const rows = await sql("select * from profiledata;");

  return formatProfileDataResponse(rows[0]);
};

const fetchRecentExperiences = async () => {
  "use server";

  const rows = await sql(`SELECT 
    e.id,
    e.companyname,
    e.companylogo,
    e.iscurrent,
    e.startdate,
    e.enddate,
    COALESCE(
        JSON_AGG(
            JSON_BUILD_OBJECT(
                'projectid', p.id,
                'projectname', p.projectname,
                'projecturl', p.projecturl,
                'iscurrent', p.iscurrent,
                'startdate', p.startdate,
                'enddate', p.enddate,
                'responsibilities', p.responsibilities
            )
        ) FILTER (WHERE p.id IS NOT NULL), 
        '[]'
    ) AS projects
FROM 
    experience e
LEFT JOIN 
    projects p
ON 
    e.id = p.experienceid
GROUP BY 
    e.id
ORDER BY 
    e.startdate DESC
LIMIT 3;
`);

  const formattedRows = rows.map((rowData) =>
    formatExperienceResponse(rowData)
  );

  return formattedRows;
};

const fetchTechSkills = async () => {
  "use server";

  const rows = await sql("select * from skills where type = 'TECH';");

  return rows;
};

export { fetchProfileData, fetchRecentExperiences, fetchTechSkills };
