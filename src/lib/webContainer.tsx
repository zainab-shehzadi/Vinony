"use client";

import * as React from "react";
import { cn } from "./utils";

type Props = React.PropsWithChildren<{
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}>;

export default function WebContainer({ children, className, as = "div" }: Props) {
  const Comp = as as any;

  return (
    <Comp
      className={cn(
        "flex flex-col items-center w-full px-2 md:px-6 xl:px-16 h-[90vh] overflow-hidden md:overflow-visible relative",
        className
      )}
    >
      {children}
    </Comp>
  );
}

// flex-grow overflow-y-auto  no-scrollbar
