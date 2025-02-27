export interface TListGridData {
  id: number;
  name: string;
  description: string;
}

export const mockListGrid: TListGridData[] = [
  { id: 1, name: "Item 1", description: "Description 1" },
  { id: 2, name: "Item 2", description: "Description 2" },
  { id: 3, name: "Item 3", description: "Description 3" },
];

export const mockListGridColumns = [
  {
    header: "Name",
    key: "name",
    render: (item: TListGridData) => <span>{item.name}</span>,
  },
  {
    header: "Description",
    key: "description",
    render: (item: TListGridData) => <span>{item.description}</span>,
  },
];

export const mockGetRowKey0 = (item: TListGridData) => item.id;
