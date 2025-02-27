import { SSRComponent } from "@gitcoin/types";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/primitives/Table/Table";

const TableComponent = (props: React.ComponentProps<typeof Table>) => (
  <Table {...props}>
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

const tableSSR: SSRComponent<React.ComponentProps<typeof TableComponent>> = {
  component: TableComponent,
  cases: [
    {
      label: "Default",
      props: {},
    },
  ],
};

export default tableSSR;
