import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { SimpleRow, SimpleCol } from "src/types/DataDisplay";

interface TableProps<Row> {
  rows: Row[];
  columns: SimpleCol<Row>[];
}

const SimpleTable = <Row extends SimpleRow,>({
  rows,
  columns,
}: TableProps<Row>): React.ReactElement => {
  const columnFields: (keyof Row)[] = columns.map((column) => column.field);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell>{column.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              {columnFields.map((field) => (
                <TableCell>{row[field]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
