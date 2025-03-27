import {
  iAward,
  iContact,
  iEducation,
  iExperience,
  iProfileData,
  iProject,
  iSkill,
} from "../utils/interfaces";

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

const formatContactResponse = (response: Response): iContact => {
  const formattedResponse: iContact = {
    mobileNumber: response.mobilenumber,
    emailId: response.emailid,
    githubUrl: response.githuburl,
    linkedInUrl: response.linkedinurl,
    twitterUrl: response.twitterurl,
  };
  return formattedResponse;
};

const formatExperienceResponse = (response: Response): iExperience => {
  const formattedResponse: iExperience = {
    id: response.id,
    companyName: response.companyname,
    companyLogo: response.companylogo,
    isCurrent: response.iscurrent,
    startDate: new Date(response.startdate),
    endDate: new Date(response.enddate),
    projects: [],
  };

  response?.projects?.forEach((projectData: iProject) => {
    formattedResponse.projects.push(formatProjectResponse(projectData));
  });

  return formattedResponse;
};

const formatProjectResponse = (response: Response): iProject => {
  const formattedResponse: iProject = {
    id: response?.projectid ?? response?.id,
    projectName: response.projectname,
    projectUrl: response.projecturl,
    isCurrent: response.iscurrent,
    startDate: new Date(response.startdate),
    endDate: new Date(response.enddate),
    responsibilities: [...response.responsibilities],
  };

  return formattedResponse;
};

const formatSkillResponse = (response: Response): iSkill => {
  const formattedResponse: iSkill = {
    name: response.name,
    logo: response.logo,
    id: response.id,
    type: response.type,
  };
  return formattedResponse;
};

const formatEducationResponse = (response: Response): iEducation => {
  const formattedResponse: iEducation = {
    id: response.id,
    degree: response.degree,
    institution: response.institution,
    startDate: new Date(response.startdate),
    endDate: new Date(response.enddate),
    grade: response.grade,
  };
  return formattedResponse;
};

const formatAwardResponse = (response: Response): iAward => {
  const formattedResponse: iAward = {
    id: response.id,
    name: response.name,
    docUrl: response.docurl,
    description: response.description,
    year: response.year,
  };
  return formattedResponse;
};

export {
  formatAwardResponse,
  formatContactResponse,
  formatEducationResponse,
  formatExperienceResponse,
  formatProfileDataResponse,
  formatProjectResponse,
  formatSkillResponse,
};
