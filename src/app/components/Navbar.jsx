"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { montserrat, roboto_mono } from "../utils/fonts";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div>Logo</div>
      <div className="flex ">
        <h1 className={`${roboto_mono.className} text-sm text-black px-2`}>
          Tienda
        </h1>
        <h1 className={`${roboto_mono.className} text-sm text-black px-2`}>
          Marca
        </h1>
        <h1 className={`${roboto_mono.className} text-sm text-black`}>
          Journal
        </h1>
      </div>
    </div>
  );
}
