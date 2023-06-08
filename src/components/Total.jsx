import { useContext } from "react";
import { CartContext } from "../components/CartProvider";

export default function Total() {
  const { total } = useContext(CartContext);
  return <div>Total: {parseFloat(total).toFixed(2)} NOK</div>;
}
