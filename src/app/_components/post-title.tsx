import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-[2em] font-bold tracking-tight mb-[10px] leading-[1.2]">
      {children}
    </h1>
  );
}
