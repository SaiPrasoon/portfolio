import { ReactNode } from "react";

interface HeroAnimationsProps {
  aboutMe: string;
  actions: ReactNode;
}

const HeroAnimations = ({ aboutMe, actions }: HeroAnimationsProps) => {
  // Split the bio into paragraphs so the reading column gets real rhythm
  // instead of one dense block.
  const paragraphs = aboutMe
    .split(/(?<=\.)\s+(?=[A-Z])/)
    .reduce<string[]>((acc, sentence, i) => {
      const bucket = Math.floor(i / 2);
      acc[bucket] = acc[bucket] ? `${acc[bucket]} ${sentence}` : sentence;
      return acc;
    }, []);

  return (
    <div className="stagger">
      <p className="meta-label">Senior Frontend Engineer</p>

      <h1 className="font-blanco text-heading-lg md:text-display text-charcoal mt-6">
        Mani Sai Prasoon Bandi
      </h1>

      <div className="mt-8">
        {paragraphs.map((paragraph, i) => (
          <p
            key={i}
            className="font-degular text-body-lg text-graphite mb-[27px] last:mb-0"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-10">{actions}</div>
    </div>
  );
};

export default HeroAnimations;
