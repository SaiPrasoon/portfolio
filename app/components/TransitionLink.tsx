"use client";

import { useTransitionRouter } from "next-view-transitions";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className: string;
}

const TransitionLink = ({ children, href, ...props }: TransitionLinkProps) => {
 
  const router = useTransitionRouter();

  return (
    <Link
      href={href}
      {...props}
      onClick={(e) => {
        e.preventDefault();
        router.push(href, {
          onTransitionReady: pageAnimation,
        });
      }}
    >
      {children}
    </Link>
  );
};

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateX(0)",
      },
      {
        opacity: 0.5,
        scale: 0.9,
        transform: "translateX(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76,0,0.24,1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        transform: "translateX(100%)",
      },
      {
        transform: "translateX(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76,0,0.24,1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

export default TransitionLink;
