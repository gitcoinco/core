"use client";

import * as React from "react";

import { tv } from "tailwind-variants";

import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/primitives/RadioGroup";

const radioGroupList = tv({
  slots: {
    root: "flex flex-col gap-11",
  },
});

const { root } = radioGroupList();

export interface RadioGroupListProps {
  groups: {
    id: string;
    heading: React.ReactNode;
    buttonsPerRow?: number;
    options: { value: string; label: string; disabled?: boolean }[];
  }[];
  onSelectionChange?: (selections: Record<string, string>) => void;
  className?: string;
}

export const RadioGroupList: React.FC<RadioGroupListProps> = ({
  groups,
  onSelectionChange,
  className,
}) => {
  const [selections, setSelections] = React.useState<Record<string, string>>({});

  const handleSelectionChange = (groupId: string, value: string) => {
    setSelections((prev) => {
      const newSelections = { ...prev, [groupId]: value };
      if (onSelectionChange) {
        onSelectionChange(newSelections);
      }
      return newSelections;
    });
  };

  return (
    <div className={cn(root(), className)}>
      {groups.map((group) => (
        <div key={group.id}>
          <RadioGroup
            buttonsPerRow={group.buttonsPerRow || 3}
            heading={group.heading}
            value={selections[group.id]}
            onValueChange={(value) => handleSelectionChange(group.id, value)}
          >
            {group.options.map((option) => (
              <RadioGroupItem
                key={option.value}
                value={option.value}
                label={option.label}
                disabled={option.disabled}
              />
            ))}
          </RadioGroup>
        </div>
      ))}
    </div>
  );
};
