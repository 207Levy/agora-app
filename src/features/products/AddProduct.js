import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useState } from "react";
import { MenuItem, Select, TextareaAutosize, TextField } from "@mui/material";
import { addItem, selectProducts } from "../../app/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";

export default function AddProduct(props) {
  const [amount, setAmount] = useState(0);
  const [name, setVendor] = useState("");
  const [price, setDate] = useState(0);

  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const handlePrice = (event) => {
    const value = event.target.value;
    setDate(value);
  };

  const handleName = (event) => {
    const value = event.target.value;
    setVendor(value);
  };

  const handleAmount = (event) => {
    const value = event.target.value;
    setAmount(value);
  };

  const addNewItem = () => {
    if (name === "") {
      alert("Please give a name for your product...");
      return;
    }
    dispatch(addItem(new Product(name, parseInt(price), parseInt(amount))));
  };
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h4" component="div" color="primary">
          Add New Item
        </Typography>

        <TextField
          sx={{ m: 1, minWidth: 120 }}
          required
          id="outlined-required"
          label="Vendor-info"
          defaultValue=""
          placeholder="Item name"
          onChange={handleName}
        />
        <br />
        <br />

        <TextField
          sx={{ m: 1, minWidth: 120 }}
          component="div"
          required
          label="Price"
          id="outlined-required"
          type="number"
          placeholder="Price"
          onChange={handlePrice}
        />
        <br />
        <br />

        <TextField
          sx={{ m: 1, minWidth: 120 }}
          component="div"
          required
          label="Amount"
          id="outlined-required"
          type="number"
          placeholder="Amount"
          onChange={handleAmount}
        />
      </CardContent>
      <CardActions>
        <Button variant="contained" color="success" onClick={addNewItem}>
          Add Item
        </Button>
      </CardActions>
    </Card>
  );
}
