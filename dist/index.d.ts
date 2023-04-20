import React from "react";

type IfProps = {
  if: boolean;
  children: React.ReactNode;
};
type ElseProps = {
  children: React.ReactNode;
  if?: boolean;
};
declare function If({ if: condition, children }: IfProps): JSX.Element;
declare function Else({ children }: ElseProp): JSX.Element;

export { Else, If };
