"use client";

import { iContact } from "@/app/utils/interfaces";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { toast } from "sonner";

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contact: iContact;
  onSuccess: () => void;
}

export default function ContactForm({
  open,
  onOpenChange,
  contact,
  onSuccess,
}: ContactFormProps) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [linkedInUrl, setLinkedInUrl] = useState("");
  const [twitterUrl, setTwitterUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMobileNumber(contact.mobileNumber);
    setEmailId(contact.emailId);
    setGithubUrl(contact.githubUrl);
    setLinkedInUrl(contact.linkedInUrl);
    setTwitterUrl(contact.twitterUrl || "");
  }, [contact, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/admin/contact", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber, emailId, githubUrl, linkedInUrl, twitterUrl }),
      });

      if (res.ok) {
        toast.success("Contact updated");
        onSuccess();
      } else {
        toast.error("Failed to update contact");
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
          <DialogTitle>Edit Contact</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Mobile Number</Label>
            <Input value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Email</Label>
            <Input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} required />
          </div>
          <div className="flex flex-col gap-2">
            <Label>GitHub URL</Label>
            <Input value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label>LinkedIn URL</Label>
            <Input value={linkedInUrl} onChange={(e) => setLinkedInUrl(e.target.value)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Twitter URL</Label>
            <Input value={twitterUrl} onChange={(e) => setTwitterUrl(e.target.value)} />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
