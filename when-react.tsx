import React, { useMemo, useRef } from "react";
type IfProps = {
  if: boolean;
  children: React.ReactNode;
};

type ElseProps = {
  children: React.ReactNode;
  if?: boolean;
};
function If({ if: condition, children }: IfProps) {
  const conditionRef = useRef<boolean>(!!condition);
  conditionRef.current = useMemo(() => {
    return !!condition;
  }, [!condition]);

  return (
    <>
      {(Array.isArray(children) ? children : [children]).map((child, i) => {
        const ChildComponent = child.type as React.ElementType;
        if (ChildComponent === Else) {
          if (conditionRef.current) return null;
          const currentCondition = child.props.if;
          conditionRef.current =
            !!currentCondition || currentCondition === undefined;
          if (currentCondition !== undefined && !currentCondition) return null;
          return <Else {...child.props} key={i} ______________={true} />;
        }
        return !!condition && child;
      })}
    </>
  );
}

function Else({
  children,
  ______________,
}: ElseProps & { ______________?: boolean }) {
  if (!______________) {
    throw new Error("Parent node must be <If>");
  }
  return <>{children}</>;
}
export { Else, If };
