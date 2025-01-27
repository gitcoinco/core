import moment from "moment";
import { title } from "process";

import { FormField, FormStep } from "@/types";

const program = {
  chainId: 10,
  programId: "1",
  programName: "Cool program",
} as {
  chainId: number;
  programId: string;
  programName: string;
};
const roundDetailsFields: FormField[] = [
  {
    field: {
      name: "program",
      label: "Program",
      validation: { isObject: true },
    },
    component: "DisabledProgramInput",
  },
  {
    field: {
      name: "name",
      label: "Round name",
      className: "border-grey-300",
      validation: {
        required: true,
        stringValidation: { minLength: 5 },
      },
    },
    component: "Input",
    placeholder: "My Round Name",
  },
  {
    field: {
      name: "payoutToken",
      label: "Select payout token",
      validation: { required: true },
    },
    component: "Select",
    options: [
      {
        items: [
          { label: "ETH", value: "ETH" },
          { label: "USDC", value: "USDC" },
        ],
      },
    ],
    placeholder: "Select",
    className: "bg-white border-grey-300",
    size: "md",
  },
  {
    field: {
      name: "banner",
      label: "Cover image",
      validation: {
        required: true,
        fileValidation: {},
      },
    },
    component: "FileUpload",
    mimeTypes: ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/svg+xml"],
  },
];

const roundDescriptionAndRequirementsFields: FormField[] = [
  {
    field: {
      name: "description",
      label: "Round description",
      validation: { required: true },
      className: "border-grey-300",
    },
    component: "MarkdownEditor",
  },
  {
    field: {
      name: "requirements",
      label: "What requirements do you have from applicants?",
      className: "border-grey-300",
      validation: { arrayValidation: { minItems: 1 } },
    },
    component: "FieldArray",
    placeholder: "Enter an eligibility requirement",
    addButtonLabel: "Add requirement",
    removeIconType: "x",
    itemName: "Requirement",
  },
];

const roundDetailsArgs = {
  fields: roundDetailsFields,
  persistKey: "storybook-round-setup-round-details",
  defaultValues: {
    program: program,
  },
};

const roundDescriptionAndRequirementsArgs = {
  fields: roundDescriptionAndRequirementsFields,
  persistKey: "storybook-round-setup-round-description-and-requirements",
};
const metrics = [
  {
    title: "Metric 1",
    description: "Description for Metric 1",
    identifier: "metric-1",
    onReadMore: () => void 0,
  },
  {
    title: "Metric 2",
    description: "Description for Metric 2",
    identifier: "metric-2",
    onReadMore: () => void 0,
  },
  {
    title: "Metric 3",
    description: "Description for Metric 3",
    identifier: "metric-3",
    onReadMore: () => void 0,
  },
];
const metricsFields: FormField[] = [
  {
    field: {
      name: "metrics",
      label: "",
      validation: { arrayValidation: { minItems: 1 } },
    },
    component: "Metrics",
    metrics: metrics,
  },
];

const metricsArgs = {
  fields: metricsFields,
  persistKey: "storybook-round-setup-impact-metrics",
};

const roundDatesFields: FormField[] = [
  {
    field: {
      name: "roundDates",
      label: "",
      validation: { isRoundDates: true },
    },
    component: "RoundDates",
  },
];

const roundDatesArgs = {
  fields: roundDatesFields,
  persistKey: "storybook-round-setup-round-dates",
  defaultValues: {
    roundDates: {
      timezone: moment.tz.guess(),
      round: {
        noEndDate: false,
      },
    },
  },
};

const applicationQuestionsFields: FormField[] = [
  {
    field: {
      name: "applicationQuestions",
      label: "",
      validation: { isObject: true },
    },
    component: "ApplicationQuestions",
  },
];

const applicationQuestionsArgs = {
  fields: applicationQuestionsFields,
  persistKey: "storybook-round-setup-application-questions",
};

const voterAllowlistFields: FormField[] = [
  {
    field: {
      name: "voterAllowlist",
      label: "",
      validation: {
        arrayValidation: {
          itemType: "address",
          minItems: 2,
          maxItems: 100,
          minItemsMessage: "At least two addresses are required",
          maxItemsMessage: "Maximum of 100 addresses allowed",
        },
      },
    },
    component: "Allowlist",
  },
];

const voterAllowlistArgs = {
  fields: voterAllowlistFields,
  persistKey: "storybook-round-setup-voter-allowlist",
};

const deployArgs = {
  fields: [],
  persistKey: "storybook-round-setup-deploy",
};

export const roundSetupSteps = [
  {
    name: "Round details",
    formProps: roundDetailsArgs,
    stepProps: {
      formTitle: "Round details",
      formDescription:
        "Fill out the details about your round. You can change most of these at any time.",
    },
  },
  {
    name: "Round dates",
    formProps: roundDatesArgs,
    stepProps: {
      formTitle: "Round dates",
      formDescription: "Configure the dates for the application and payout periods.",
    },
  },
  {
    name: "Round description & requirements",
    formProps: roundDescriptionAndRequirementsArgs,
    stepProps: {
      formTitle: "Round description & requirements",
      formDescription:
        "Provide details about your round and specify the requirements for applicants.",
    },
  },
  {
    name: "Impact metrics",
    formProps: metricsArgs,
    stepProps: {
      formTitle: "Impact metrics",
      formDescription: "Define your impact categories for the application form.",
    },
  },
  {
    name: "Application questions",
    formProps: applicationQuestionsArgs,
    stepProps: {
      formTitle: "Application questions",
      formDescription: "Add questions for project owners to complete their application.",
    },
  },
  {
    name: "Voter allowlist",
    formProps: voterAllowlistArgs,
    stepProps: {
      formTitle: "Voter allowlist",
      formDescription: "Provide wallet addresses to grant voter access to the round.",
    },
  },
  {
    name: "Deploy",
    formProps: deployArgs,
    stepProps: {
      formTitle: "Review your round and deploy onchain",
      formDescription: "You can edit your round after it’s been deployed. ",
    },
  },
] satisfies FormStep[];
