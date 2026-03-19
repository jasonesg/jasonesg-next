import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-lg font-bold tracking-tight leading-snug mb-4">
      {children}
    </h1>
  );
}
