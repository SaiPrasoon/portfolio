"use client";

import { iProfileData } from "@/app/utils/interfaces";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import FileUpload from "../FileUpload";

interface ProfileFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  profile: iProfileData;
  onSuccess: () => void;
}

export default function ProfileForm({
  open,
  onOpenChange,
  profile,
  onSuccess,
}: ProfileFormProps) {
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const toDateStr = (d: Date | undefined) => {
    if (!d) return "";
    const date = new Date(d);
    return date.toISOString().split("T")[0];
  };

  useEffect(() => {
    setFullName(profile.fullName);
    setDateOfBirth(toDateStr(profile.dateOfBirth));
    setAboutMe(profile.aboutMe);
    setResumeUrl(profile.resumeUrl);
  }, [profile, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/admin/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, dateOfBirth, aboutMe, resumeUrl }),
      });

      if (res.ok) {
        toast.success("Profile updated");
        onSuccess();
      } else {
        toast.error("Failed to update profile");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Full Name</Label>
            <Input value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Date of Birth</Label>
            <Input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
          </div>
          <div className="flex flex-col gap-2">
            <Label>About Me</Label>
            <Textarea value={aboutMe} onChange={(e) => setAboutMe(e.target.value)} rows={5} required />
          </div>
          <FileUpload
            label="Resume (PDF)"
            value={resumeUrl}
            onChange={setResumeUrl}
            accept="pdf"
            folder="resumes"
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
