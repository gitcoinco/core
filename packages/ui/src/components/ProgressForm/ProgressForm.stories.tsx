import { useState } from "react";
import { useEffect } from "react";

import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { ProgressForm } from "./ProgressForm";
import { roundSetupSteps } from "./mocks/RoundSetup";

const onSubmit = action("onSubmit");

const meta: Meta<typeof ProgressForm> = {
  title: "Components/ProgressForm",
  component: ProgressForm,
} satisfies Meta<typeof ProgressForm>;

export default meta;

type Story = StoryObj<typeof ProgressForm>;

const LastStepFormSummary = ({ getValues }: { getValues: () => Promise<Record<string, any>> }) => {
  const [values, setValues] = useState<Record<string, any>>({});
  useEffect(() => {
    const fetchValues = async () => {
      const values = await getValues();
      if (values) {
        setValues(values);
      }
    };
    fetchValues();
  }, [getValues]);
  return (
    <div className="h-[600px] overflow-y-auto rounded-2xl bg-grey-50 p-6">
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
};

export const Default: Story = {
  args: {
    name: "Round setup",
    steps: roundSetupSteps,
    onSubmit: async (values: any) => onSubmit(values),
    dbName: "formDB",
    storeName: "formDrafts",
    stepsPersistKey: "roundSetup",
    lastStepFormSummary: LastStepFormSummary,
  },
};
