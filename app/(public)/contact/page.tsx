import { FadeInUp } from "@/app/components/MotionWrapper";
import { fetchContactInfo } from "@/app/lib/data";
import { ContactActionType } from "@/app/utils/constants";
import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import ContactInfoSection from "./ContactInfoSection";

const Contact = async () => {
  const contactInfo = await fetchContactInfo();

  const channels = [
    {
      icon: <Mail size={15} />,
      label: contactInfo.emailId,
      displayLabel: "Email",
      actionType: ContactActionType.COPY,
    },
    {
      icon: <Phone size={15} />,
      label: contactInfo.mobileNumber,
      displayLabel: "Phone",
      actionType: ContactActionType.COPY,
    },
    {
      icon: <Linkedin size={15} />,
      label: contactInfo.linkedInUrl,
      displayLabel: "LinkedIn",
      actionType: ContactActionType.NAVIGATE,
    },
    {
      icon: <Github size={15} />,
      label: contactInfo.githubUrl,
      displayLabel: "GitHub",
      actionType: ContactActionType.NAVIGATE,
    },
    ...(contactInfo.twitterUrl
      ? [
          {
            icon: <Twitter size={15} />,
            label: contactInfo.twitterUrl,
            displayLabel: "Twitter",
            actionType: ContactActionType.NAVIGATE,
          },
        ]
      : []),
  ];

  return (
    <div className="flex flex-col">
      <FadeInUp>
        <h1 className="font-blanco text-heading-lg text-charcoal">
          Get in touch
        </h1>
        <p className="font-degular text-body-lg text-graphite mt-6">
          {`A question, a collaboration, or just to say hello — any of these reach me.`}
        </p>
      </FadeInUp>

      <div className="mt-12 divide-y divide-ash">
        {channels.map((channel) => (
          <ContactInfoSection key={channel.displayLabel} {...channel} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
