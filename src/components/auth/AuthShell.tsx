import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AuthShell({ children }: Props) {
  return (
    <div className="auth-page auth-bg ">
      <div className="w-full flex justify-center ">{children}</div>
    </div>
  );
}
