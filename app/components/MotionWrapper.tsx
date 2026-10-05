import { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * CSS-only entrance motion. Server components, no client JS, and content is
 * never left invisible by a stalled animation or a failed script.
 */
export const FadeInUp = ({ children, className }: MotionWrapperProps) => (
  <div className={`rise ${className ?? ""}`}>{children}</div>
);

export const StaggerContainer = ({
  children,
  className,
}: MotionWrapperProps) => (
  <div className={`stagger ${className ?? ""}`}>{children}</div>
);

export const StaggerItem = ({ children, className }: MotionWrapperProps) => (
  <div className={className}>{children}</div>
);
