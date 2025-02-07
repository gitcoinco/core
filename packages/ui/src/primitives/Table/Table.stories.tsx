import React, { useState } from "react";

import { Meta, StoryFn } from "@storybook/react";

import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "./Table";

export default {
  title: "Primitives/Table",
  component: Table,
} as Meta;

// Default table example
const Template: StoryFn<React.HTMLAttributes<HTMLTableElement>> = (args) => (
  <Table {...args}>
    <TableCaption>A Sample Table</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Age</TableHead>
        <TableHead>Occupation</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>John Doe</TableCell>
        <TableCell>28</TableCell>
        <TableCell>Developer</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jane Smith</TableCell>
        <TableCell>32</TableCell>
        <TableCell>Designer</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>Footer: End of Data</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

export const Default = Template.bind({});
Default.args = {};

// Striped Rows Example
const StripedRowsTemplate: StoryFn<React.HTMLAttributes<HTMLTableElement>> = (args) => {
  const rows = [
    { name: "John Doe", age: 28, occupation: "Developer" },
    { name: "Jane Smith", age: 32, occupation: "Designer" },
    { name: "Alice Brown", age: 24, occupation: "Engineer" },
    { name: "Bob Johnson", age: 45, occupation: "Manager" },
  ];
  return (
    <Table {...args}>
      <TableCaption>A Striped Table Example</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Occupation</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index} className={index % 2 === 0 ? "bg-grey-50 dark:bg-black" : ""}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.age}</TableCell>
            <TableCell>{row.occupation}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export const StripedRows = StripedRowsTemplate.bind({});
StripedRows.args = {};

// Sortable Table Example
const SortableTableTemplate: StoryFn<React.HTMLAttributes<HTMLTableElement>> = (args) => {
  type Row = { name: string; age: number; occupation: string };
  const initialData: Row[] = [
    { name: "John Doe", age: 28, occupation: "Developer" },
    { name: "Jane Smith", age: 32, occupation: "Designer" },
    { name: "Alice Brown", age: 24, occupation: "Engineer" },
    { name: "Bob Johnson", age: 45, occupation: "Manager" },
  ];

  const [data, setData] = useState<Row[]>(initialData);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Row;
    direction: "asc" | "desc";
  } | null>(null);

  const sortData = (key: keyof Row) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  const getSortIndicator = (key: keyof Row) => {
    if (sortConfig && sortConfig.key === key) {
      return sortConfig.direction === "asc" ? " ▲" : " ▼";
    }
    return "";
  };

  return (
    <Table {...args}>
      <TableCaption>Sortable Table Example</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead onClick={() => sortData("name")} style={{ cursor: "pointer" }}>
            Name{getSortIndicator("name")}
          </TableHead>
          <TableHead onClick={() => sortData("age")} style={{ cursor: "pointer" }}>
            Age{getSortIndicator("age")}
          </TableHead>
          <TableHead onClick={() => sortData("occupation")} style={{ cursor: "pointer" }}>
            Occupation{getSortIndicator("occupation")}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.age}</TableCell>
            <TableCell>{row.occupation}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Click on headers to sort the table.</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export const SortableTable = SortableTableTemplate.bind({});
SortableTable.args = {};

// Compact Table Example
const CompactTableTemplate: StoryFn<React.HTMLAttributes<HTMLTableElement>> = (args) => (
  <Table {...args}>
    <TableCaption>Compact Table Example</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="p-2 text-xs">Name</TableHead>
        <TableHead className="p-2 text-xs">Age</TableHead>
        <TableHead className="p-2 text-xs">Occupation</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="p-2 text-xs">John Doe</TableCell>
        <TableCell className="p-2 text-xs">28</TableCell>
        <TableCell className="p-2 text-xs">Developer</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="p-2 text-xs">Jane Smith</TableCell>
        <TableCell className="p-2 text-xs">32</TableCell>
        <TableCell className="p-2 text-xs">Designer</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={3} className="p-2 text-xs">
          Footer: Compact Layout
        </TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

export const CompactTable = CompactTableTemplate.bind({});
CompactTable.args = {};
