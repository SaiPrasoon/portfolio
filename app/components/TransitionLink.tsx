"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
}

const TransitionLink = ({ children, href, ...props }: TransitionLinkProps) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Link
      href={href}
      {...props}
      className={`text-sm font-light 
        hover:font-medium
      hover:text-indigo-800
      ${pathname === href ? "font-bold text-indigo-800" : ""}
      `}
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
    >
      {children}
    </Link>
  );
};

export default TransitionLink;
