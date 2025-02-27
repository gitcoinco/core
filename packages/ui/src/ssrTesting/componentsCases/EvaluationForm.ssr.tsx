import { SSRComponent } from "@/types";

import { EvaluationFormHelper } from "./helperComponents/EvaluationFormHelper";

const evaluationFormSSR: SSRComponent<React.ComponentProps<typeof EvaluationFormHelper>> = {
  component: EvaluationFormHelper,
  isClient: true,
  isFullNext: false,
  tooltipMessage: "setState issue",
  cases: [
    {
      label: "Default",
      props: {
        groups: [],
      },
    },
    {
      label: "With Groups",
      props: {
        groups: [
          {
            id: "group1",
            heading: "Question 1",
          },
          {
            id: "group2",
            heading: "Question 2",
          },
          {
            id: "group3",
            heading: "Question 3",
          },
        ],
      },
    },
    {
      label: "With Custom Options",
      props: {
        groups: [
          {
            id: "group1",
            heading: "Do you like coding?",
            options: [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No", disabled: true },
              { value: "maybe", label: "Maybe", disabled: true },
            ],
          },
          {
            id: "group2",
            heading: "Do you like coffee?",
            options: [
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ],
          },
        ],
      },
    },
  ],
};

export default evaluationFormSSR;
