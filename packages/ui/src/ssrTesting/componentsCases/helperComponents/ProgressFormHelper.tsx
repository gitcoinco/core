"use client";

import { useState } from "react";
import { useEffect } from "react";

export const LastStepFormSummary = ({
  getValues,
}: {
  getValues: () => Promise<Record<string, any>>;
}) => {
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
