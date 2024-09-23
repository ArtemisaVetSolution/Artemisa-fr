import {Table, Paper, TableContainer, TableHead, TableRow, TableCell, TableBody, TablePagination, Typography } from "@mui/material";
import { useState } from "react";

interface Column {
  key: string;
  label: string;
}

interface IProps {
    columns: Column[];
    rows: any[];
}

export default function TableComponent({ columns, rows }: IProps) {


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangePage = (_: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
      <Paper sx={{ width: '90%', overflow: 'visible', height: '90%' }}>
        <TableContainer sx={{ height: '100%', overflowY:'scroll', backgroundColor:'ligth.main'}}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead  >
              <TableRow >
                {columns.map((column) => (
                  <TableCell
                    key={column.key}
                    sx={{backgroundColor: 'dark.main', color: 'ligth.main', }}

                  >
                    <Typography variant='subtitle1' >{column.label}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              { rows.length === 0 ? <TableRow sx={{textAlign:'center'}}>
              <Typography variant='subtitle2'>No se encontraron resultados</Typography>
              </TableRow>
              : rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.key];
                        return (
                          <TableCell key={column.key} sx={{backgroundColor: 'ligth.main'}} >
                            <Typography variant='subtitle2'>{value}</Typography>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Filas por página:"
        />
      </Paper>
    );
  }