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
    logo: string;
    id: number;
    type: string;
}

export interface iAward {
    id: number;
    name: string;
    docUrl: string;
    description: string;
    year: number;
}

export interface iContact {
    mobileNumber: string;
    emailId: string;
    githubUrl: string;
    linkedInUrl: string;
    twitterUrl: string;
}

export interface iEducation {
    id: number;
    degree: string;
    institution: string;
    startDate: Date;
    endDate: Date;
    grade: string;
}