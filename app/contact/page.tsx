import { GitGraph, LinkedinIcon, Mail, Phone, TwitterIcon } from "lucide-react";
import { fetchContactInfo } from "../lib/data";
import ContactInfoSection from "./ContactInfoSection";
import { ContactActionType } from "../utils/constants";

const Contact = async () => {
  const contactInfo = await fetchContactInfo();

  return (
    <div className="flex flex-col gap-4 p-2">
      <div className="text-base font-medium">
        Let’s connect! Whether you have a question, a collaboration idea, or
        just want to say hello, I’d love to hear from you. Feel free to reach
        out through any of the channels below, and I’ll get back to you as soon
        as possible. Looking forward to connecting!
      </div>

      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <ContactInfoSection
          icon={<Phone />}
          label={contactInfo.mobileNumber}
          actionType={ContactActionType.COPY}
        />

        <ContactInfoSection
          icon={<Mail />}
          label={contactInfo.emailId}
          actionType={ContactActionType.COPY}
        />

        <ContactInfoSection
          icon={<LinkedinIcon />}
          label={contactInfo.linkedInUrl}
          actionType={ContactActionType.NAVIGATE}
        />

        <ContactInfoSection
          icon={<GitGraph />}
          label={contactInfo.githubUrl}
          actionType={ContactActionType.NAVIGATE}
        />

        {contactInfo.twitterUrl ? (
          <ContactInfoSection
            icon={<TwitterIcon />}
            label={contactInfo.twitterUrl}
            actionType={ContactActionType.NAVIGATE}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Contact;
