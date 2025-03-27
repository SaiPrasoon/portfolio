export interface iRouteLink {
  label: string;
  link: string;
}

export interface iProfileData {
    fullName: string;
    dateOfBirth: Date;
    aboutMe: string;    
}

export interface iExperience {
    id: number;
  companyName: string;
  companyLogo: string;
  isCurrent: boolean;
  startDate: Date;
  endDate?: Date;
  projects: iProject[]
}

export interface iProject {
    id: number;
    projectName: string;
    projectUrl?: string;
    isCurrent: boolean;
    startDate: Date;
    endDate?: Date;
    responsibilities: string[];
    techStack?: iSkill[];
}

export interface iSkill {
    name: string;
    logo?: string;
}

export interface iAward {
    id: number;
    title: string;
    companyName: string;
    image?: string;
    description?: string;
}

export interface iContact {
    mobileNumber: string;
    emailId: string;
    githubUrl: string;
    linkedInUrl: string;
    twitterUrl: string;
}