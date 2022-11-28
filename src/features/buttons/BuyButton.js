import Button from "@mui/material/Button";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function BuyButton(props) {
  const handleClick = () => {};

  return (
    <Button variant="contained" color="success">
      Buy <ShoppingCartIcon />
    </Button>
  );
}
