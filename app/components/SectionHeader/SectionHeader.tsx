import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  viewMoreLink?: string;
  hideLink?: boolean;
}

/** Editorial chapter title — Blanco/serif, never a UI label. */
const SectionHeader = ({
  title,
  viewMoreLink,
  hideLink,
}: SectionHeaderProps) => {
  return (
    <div className="flex flex-row items-baseline justify-between gap-4">
      <h2 className="font-blanco text-heading text-charcoal">{title}</h2>
      {!hideLink ? (
        <Link
          href={viewMoreLink || ""}
          className="font-degular text-caption text-stone hover:text-ink-black transition-colors shrink-0"
        >
          View all <span className="text-[0.75em] align-super">↗</span>
        </Link>
      ) : null}
    </div>
  );
};

export default SectionHeader;
