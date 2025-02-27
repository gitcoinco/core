import React from "react";

import { tv } from "tailwind-variants";

const listGridVariants = tv({
  slots: {
    root: "mx-auto flex flex-col gap-4 overflow-x-auto",
    header: "grid gap-4 px-4 py-2",
    headerElement: "flex items-center",
    row: "grid items-center gap-4 px-4 py-2",
  },
  variants: {
    variant: {
      default: {
        header: "font-ui-sans text-base font-bold text-black",
        row: "font-ui-sans text-base font-normal text-black",
      },
    },
    position: {
      center: { headerElement: "justify-center" },
      left: { headerElement: "justify-start" },
      right: { headerElement: "justify-end" },
    },
  },
  defaultVariants: {
    variant: "default",
    position: "left",
  },
});

export interface ListGridColumn<T> {
  header: React.ReactNode;
  key: keyof T | string;
  position?: "center" | "left" | "right";
  width?: string;
  render: (item: T) => React.ReactNode;
}

export interface ListGridProps<T> {
  data: T[];
  columns: ListGridColumn<T>[];
  getRowKey: (item: T) => string | number;
  className?: string;
  rowClassName?: string;
}

export const ListGrid = <T,>({
  data,
  columns,
  getRowKey,
  className,
  rowClassName,
}: ListGridProps<T>) => {
  const { root, header, headerElement, row } = listGridVariants();

  // Generate grid-template-columns style based on column widths
  const gridTemplateColumns = columns
    .map((column) => column.width || "1fr") // Default to '1fr' if no width is specified
    .join(" ");

  return (
    <div className={root({ className })}>
      <div className={header()} style={{ gridTemplateColumns }}>
        {columns.map((column, index) => (
          <div key={index} className={headerElement({ position: column.position })}>
            {column.header}
          </div>
        ))}
      </div>
      {data.map((item, index) => (
        <div
          key={getRowKey ? getRowKey(item) : index}
          className={row({ className: rowClassName })}
          style={{ gridTemplateColumns }}
        >
          {columns.map((column) => (
            <React.Fragment key={column.key as string}>{column.render(item)}</React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};
