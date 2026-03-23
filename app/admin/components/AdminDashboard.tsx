"use client";

import {
  iAward,
  iContact,
  iEducation,
  iExperience,
  iProfileData,
  iSkill,
} from "@/app/utils/interfaces";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const getFileName = (url: string) => {
  try {
    const decoded = decodeURIComponent(url);
    const pathPart = decoded.split("?")[0];
    const fullName = pathPart.split("/").pop() || "file";
    return fullName.replace(/^\d+_/, "");
  } catch {
    return "file";
  }
};
import ContactForm from "./forms/ContactForm";
import ProfileForm from "./forms/ProfileForm";
import AwardsTable from "./tables/AwardsTable";
import EducationTable from "./tables/EducationTable";
import ExperienceTable from "./tables/ExperienceTable";
import SkillsTable from "./tables/SkillsTable";

interface AdminDashboardProps {
  profile: iProfileData;
  contact: iContact;
  experiences: iExperience[];
  skills: iSkill[];
  educationList: iEducation[];
  awards: iAward[];
}

export default function AdminDashboard({
  profile,
  contact,
  experiences,
  skills,
  educationList,
  awards,
}: AdminDashboardProps) {
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const router = useRouter();

  const handleSuccess = () => {
    setShowProfileForm(false);
    setShowContactForm(false);
    router.refresh();
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>

      <Tabs defaultValue="profile">
        <TabsList className="flex-wrap h-auto">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="awards">Awards</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-4">
          <div id="profile">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Profile</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowProfileForm(true)}
                  className="gap-1.5"
                >
                  <Pencil size={14} /> Edit
                </Button>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Full Name
                  </span>
                  <p className="text-sm">{profile.fullName}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Date of Birth
                  </span>
                  <p className="text-sm text-muted-foreground">
                    {profile.dateOfBirth
                      ? new Date(profile.dateOfBirth).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                      : "Not set"}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    About Me
                  </span>
                  <p className="text-sm text-muted-foreground">{profile.aboutMe}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Resume
                  </span>
                  <p className="text-sm text-muted-foreground truncate">
                    {profile.resumeUrl ? getFileName(profile.resumeUrl) : "Not set"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <ProfileForm
            open={showProfileForm}
            onOpenChange={setShowProfileForm}
            profile={profile}
            onSuccess={handleSuccess}
          />
        </TabsContent>

        <TabsContent value="contact" className="mt-4">
          <div id="contact">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Contact Info</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowContactForm(true)}
                  className="gap-1.5"
                >
                  <Pencil size={14} /> Edit
                </Button>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { label: "Phone", value: contact.mobileNumber },
                  { label: "Email", value: contact.emailId },
                  { label: "GitHub", value: contact.githubUrl },
                  { label: "LinkedIn", value: contact.linkedInUrl },
                  { label: "Twitter", value: contact.twitterUrl },
                ].map((item) => (
                  <div key={item.label}>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </span>
                    <p className="text-sm truncate">{item.value || "Not set"}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <ContactForm
            open={showContactForm}
            onOpenChange={setShowContactForm}
            contact={contact}
            onSuccess={handleSuccess}
          />
        </TabsContent>

        <TabsContent value="experience" className="mt-4">
          <div id="experience">
            <ExperienceTable experiences={experiences} />
          </div>
        </TabsContent>

        <TabsContent value="skills" className="mt-4">
          <div id="skills">
            <SkillsTable skills={skills} />
          </div>
        </TabsContent>

        <TabsContent value="education" className="mt-4">
          <div id="education">
            <EducationTable educationList={educationList} />
          </div>
        </TabsContent>

        <TabsContent value="awards" className="mt-4">
          <div id="awards">
            <AwardsTable awards={awards} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
