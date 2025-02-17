import { useMemo, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "./Pagination";

const PaginationWrapper = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const totalItems = 200; // Total number of items in your dataset

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(totalItems / rowsPerPage)),
    [totalItems, rowsPerPage],
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleRowsChange = (newRowsPerPage: number) => {
    const newTotalPages = Math.ceil(totalItems / newRowsPerPage);

    // Calculate which page should contain the first item of the current page
    const firstItemIndex = (currentPage - 1) * rowsPerPage;
    const newCurrentPage = Math.ceil((firstItemIndex + 1) / newRowsPerPage);

    setRowsPerPage(newRowsPerPage);
    setCurrentPage(Math.min(newCurrentPage, newTotalPages));
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      rowsPerPage={rowsPerPage}
      onPageChange={handlePageChange}
      onRowsChange={handleRowsChange}
    />
  );
};

const meta: Meta<typeof Pagination> = {
  title: "Primitives/Pagination",
  component: PaginationWrapper,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => <PaginationWrapper />,
};
