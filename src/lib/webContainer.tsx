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
        "flex-grow overflow-y-auto flex flex-col items-center no-scrollbar w-full p-6 md:p-10 xl:p-16 ",
        className
      )}
    >
      {children}
    </Comp>
  );
}
