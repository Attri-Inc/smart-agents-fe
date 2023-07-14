import React, { useMemo, useState } from "react";
import {
  useTable,
  usePagination,
  useFilters,
  Column,
  TableInstance,
  FilterProps,
} from "react-table";
import "tailwindcss/tailwind.css";

interface TableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
}

const DefaultColumnFilter: React.FC<FilterProps<any>> = ({
  column: { filterValue, setFilter },
}) => {
  return (
    <input
      type="text"
      className="px-2 py-1 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
      value={filterValue || ""}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Filter..."
    />
  );
};

const Table = <T extends object>({ columns, data }: TableProps<T>) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { pageIndex: tablePageIndex },
    gotoPage,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setPageSize: setTablePageSize,
  }: TableInstance<T> = useTable(
    {
      columns: useMemo(() => {
        return columns.map((column) => ({
          ...column,
          Filter: DefaultColumnFilter,
        }));
      }, [columns]),
      data,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    usePagination
  );

  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newSize = Number(event.target.value);
    setPageSize(newSize);
    setTablePageSize(newSize);
  };

  const pageCount = Math.ceil(rows.length / pageSize);

  const renderPagination = () => (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center">
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className="px-2 py-1 rounded bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-500"
        >
          {"<<"}
        </button>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="px-2 py-1 rounded bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-500"
        >
          {"<"}
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="px-2 py-1 rounded bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-500"
        >
          {">"}
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className="px-2 py-1 rounded bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-500"
        >
          {">>"}
        </button>
        <span className="ml-2">
          Page{" "}
          <strong>
            {tablePageIndex + 1} of {pageCount}
          </strong>
        </span>
      </div>
      <div className="flex items-center">
        <span>Page Size: </span>
        <select
          value={pageSize}
          onChange={handlePageSizeChange}
          className="px-2 py-1 ml-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
        >
          {[10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <table className="w-full border border-gray-300" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-4 py-2 bg-gray-200 text-left"
                >
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows
            .slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)
            .map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="px-4 py-2 border-t border-gray-300"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
        </tbody>
      </table>
      {renderPagination()}
    </div>
  );
};

export default Table;
