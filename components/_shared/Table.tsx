import React from "react";
import { useTable } from "react-table";

const Table: React.FC = () => {
  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
        col3: "react-table",
        col4: "react-table",
        col5: "react-table",
        col6: "react-table",
      },

      {
        col1: "react-table",
        col2: "rocks",
        col3: "react-table",
        col4: "react-table",
        col5: "react-table",
        col6: "react-table",
      },

      {
        col1: "whatever",
        col2: "you want",
        col3: "react-table",
        col4: "react-table",
        col5: "react-table",
        col6: "react-table",
      },
    ],

    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1", // accessor is the "key" in the data
      },

      {
        Header: "Column 2",
        accessor: "col2",
      },
      {
        Header: "Column 3",
        accessor: "col3",
      },
      {
        Header: "Column 4",
        accessor: "col4",
      },
      {
        Header: "Column 5",
        accessor: "col5",
      },
      {
        Header: "Column 6",
        accessor: "col6",
      },
    ],

    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <table
      style={{
        marginTop: "3rem",
      }}
      {...getTableProps()}
    >
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr
            style={{
              backgroundColor: "#FFFFFF",
              border: "solid 1px gray",
            }}
            key={`tableTR-${index}`}
            {...headerGroup.getHeaderGroupProps()}
          >
            {headerGroup.headers.map((column, num) => (
              <th
                key={`tableTH-${num}`}
                {...column.getHeaderProps()}
                style={{
                  border: "solid 1px gray",
                  padding: "16px",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);

          return (
            <tr key={`tableTR-${index}`} {...row.getRowProps()}>
              {row.cells.map((cell, num) => {
                return (
                  <td
                    key={`tableTR-${num}`}
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
