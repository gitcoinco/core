export const radioGroups = [
  {
    id: "group1",
    heading: "Group 1 Heading",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ],
  },
  {
    id: "group2",
    heading: "Group 2 Heading",
    options: [
      { value: "optionA", label: "Option A" },
      { value: "optionB", label: "Option B" },
    ],
  },
];

export const radioGroupsWithDisabledOptions = [
  {
    id: "group1",
    heading: "Group 1 Heading",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ],
  },
  {
    id: "group2",
    heading: "Group 2 Heading",
    options: [
      { value: "optionA", label: "Option A" },
      { value: "optionB", label: "Option B" },
      { value: "optionC", label: "Option C", disabled: true },
    ],
  },
];
