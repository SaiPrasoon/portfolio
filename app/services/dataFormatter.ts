import { iExperience, iProfileData, iProject } from "../utils/interfaces";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Response = Record<string, any>;

const formatProfileDataResponse = (response: Response): iProfileData => {
  const formattedResponse: iProfileData = {
    aboutMe: response.aboutMe,
    fullName: response.fullName,
    dateOfBirth: response.dateOfBirth,
  };
  return formattedResponse;
};

const formatExperienceResponse = (response: Response): iExperience => {
  const formattedResponse: iExperience = {
    id: response.id,
    companyName: response.companyname,
    companyLogo: response.companylogo,
    isCurrent: response.iscurrent,
    startDate: response.startdate,
    endDate: response.enddate,
    projects: [],
  };

  response?.projects?.forEach((projectData: iProject) => {
    formattedResponse.projects.push(formatProjectResponse(projectData));
  });

  return formattedResponse;
};

const formatProjectResponse = (response: Response): iProject => {
  console.log(response, "project");
  const formattedResponse: iProject = {
    id: response?.projectid ?? response?.id,
    projectName: response.projectname,
    projectUrl: response.projecturl,
    isCurrent: response.iscurrent,
    startDate: response.startdate,
    endDate: response.enddate,
    responsibilities: [...response.responsibilities],
  };

  return formattedResponse;
};

export {
  formatProfileDataResponse,
  formatExperienceResponse,
  formatProjectResponse,
};
