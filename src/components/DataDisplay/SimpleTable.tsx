import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { SimpleRow, SimpleCol } from "src/types/DataDisplay";
import Card from "@mui/material/Card";

interface TableProps<Row> {
  rows: Row[];
  columns: SimpleCol<Row>[];
  minWidth?: number;
}

const SimpleTable = <Row extends SimpleRow>({
  rows,
  columns,
  minWidth,
}: TableProps<Row>): React.ReactElement => {
  return (
    <Card variant="outlined" sx={{ backgroundColor: "transparent" }}>
      <TableContainer>
        <Table sx={{ minWidth: minWidth }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell sx={{ fontWeight: "bolder" }}>
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {columns.map((column) => (
                  <TableCell>{row[column.field]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default SimpleTable;
