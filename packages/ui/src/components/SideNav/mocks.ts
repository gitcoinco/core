// Sample navigation items
export const sampleItems = [
  {
    content: "Home",
    id: "/home",
    items: [],
  },
  {
    content: "My Programs",
    id: "/my-programs",
    items: [
      {
        content: "My Program 1",
        id: "/my-programs/my-program-1",
        items: [],
      },
      {
        content: "My Program 2",
        id: "/my-programs/my-program-2",
        items: [],
      },
    ],
  },
  {
    content: "My Rounds",
    id: "/my-rounds",
    items: [
      {
        content: "Active Rounds",
        items: [],
        isSeparator: true,
      },
      {
        content: "Cool Round",
        id: "/my-rounds/cool-round",
        items: [],
      },
      {
        content: "Draft Rounds",
        id: "/my-rounds/draft-rounds",
        items: [],
        isSeparator: true,
      },
      {
        content: "Draft Cool Round",
        id: "/my-rounds/draft-cool-round",
        items: [],
      },
    ],
  },
];
