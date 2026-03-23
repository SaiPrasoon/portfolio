import { Github, LinkedinIcon, Mail, Phone, TwitterIcon } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/app/components/MotionWrapper";
import { fetchContactInfo } from "@/app/lib/data";
import ContactInfoSection from "./ContactInfoSection";
import { ContactActionType } from "@/app/utils/constants";

const Contact = async () => {
  const contactInfo = await fetchContactInfo();

  return (
    <div className="flex flex-col gap-6 py-2">
      <FadeInUp>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Get in Touch
        </h1>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-2xl">
          {`Whether you have a question, a collaboration idea, or just want to say hello — I'd love to hear from you. Reach out through any of the channels below.`}
        </p>
      </FadeInUp>

      <StaggerContainer className="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
        <StaggerItem>
          <ContactInfoSection
            icon={<Phone size={20} />}
            label={contactInfo.mobileNumber}
            displayLabel="Phone"
            actionType={ContactActionType.COPY}
          />
        </StaggerItem>

        <StaggerItem>
          <ContactInfoSection
            icon={<Mail size={20} />}
            label={contactInfo.emailId}
            displayLabel="Email"
            actionType={ContactActionType.COPY}
          />
        </StaggerItem>

        <StaggerItem>
          <ContactInfoSection
            icon={<LinkedinIcon size={20} />}
            label={contactInfo.linkedInUrl}
            displayLabel="LinkedIn"
            actionType={ContactActionType.NAVIGATE}
          />
        </StaggerItem>

        <StaggerItem>
          <ContactInfoSection
            icon={<Github size={20} />}
            label={contactInfo.githubUrl}
            displayLabel="GitHub"
            actionType={ContactActionType.NAVIGATE}
          />
        </StaggerItem>

        {contactInfo.twitterUrl ? (
          <StaggerItem>
            <ContactInfoSection
              icon={<TwitterIcon size={20} />}
              label={contactInfo.twitterUrl}
              displayLabel="Twitter"
              actionType={ContactActionType.NAVIGATE}
            />
          </StaggerItem>
        ) : null}
      </StaggerContainer>
    </div>
  );
};

export default Contact;
