import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useEffect } from "react";
import { useState } from "react";
import BuyButton from "../buttons/BuyButton";
import { buyItem, selectProducts } from "../../app/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

const columns = [
  { id: "name", label: "Prod. Name", minWidth: 10 },
  {
    id: "amount",
    label: "Available",
    minWidth: 10,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "price",
    label: "Price",
    minWidth: 10,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
 
];

export default function ProductsTable(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [newPrice, setNewPrice] = useState("2");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => {
                const amount = item.amount;
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={item.code}>
                    {columns.map((column) => {
                      const value = item[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}

                    <Button
                      {...(amount > 0 ? "" : "disabled")}
                      variant="contained"
                      color="success"
                      onClick={()=>dispatch(buyItem(item.name))}
                    >
                      Buy <ShoppingCart />
                    </Button>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
