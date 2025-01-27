import { ListGridColumn } from "./ListGrid";

export interface TMockData0 {
  id: number;
  name: string;
  description: string;
}

export const mockData0: TMockData0[] = [
  { id: 1, name: "Item 1", description: "Description 1" },
  { id: 2, name: "Item 2", description: "Description 2" },
  { id: 3, name: "Item 3", description: "Description 3" },
];

export const mockColumns0: ListGridColumn<TMockData0>[] = [
  {
    header: "Name",
    key: "name",
    render: (item: TMockData0) => <span>{item.name}</span>,
  },
  {
    header: "Description",
    key: "description",
    render: (item: TMockData0) => <span>{item.description}</span>,
  },
];

export const mockGetRowKey0 = (item: TMockData0) => item.id;
