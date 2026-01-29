"use client";

import * as React from "react";
import { cn } from "./utils";

type Props = React.PropsWithChildren<{
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}>;

export default function Container({ children, className, as = "div" }: Props) {
  const Comp = as as any;

  return (
    <Comp
      className={cn(
        "mx-auto w-full bg-white dark:bg-background ",
        "pt-10 md:pt-20 lg:pt-32",
        "px-6 md:px-10 lg:px-14 xl:px-20",
        className
      )}
    >
      {children}
    </Comp>
  );
}
