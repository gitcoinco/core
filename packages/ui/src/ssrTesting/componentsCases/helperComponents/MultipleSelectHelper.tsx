"use client";

import { MultipleSelect } from "@/components/MultipleSelect";

export const MultipleSelectHelper = (
  props: Omit<React.ComponentProps<typeof MultipleSelect>, "onChange">,
) => {
  const fullProps = {
    onChange: (values: any) => console.log(values),
    ...props,
  };
  return <MultipleSelect {...fullProps} />;
};
