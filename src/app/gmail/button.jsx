import { Button } from "@mui/joy";
import { ReactNode } from "react";


const Btn = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default Btn;
