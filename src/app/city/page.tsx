"use client";
import { Input, Sheet, Typography } from "@mui/joy";
import SearchBar from "./SearchBar";

const page = () => {
  return (
    <Sheet
      sx={{
        maxWidth: 300,
        mx: "auto",
        my: "auto",
        py: 3,
        px: 2,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        borderRadius: "sm",
        boxShadow: "md",
        alignSelf: "center",
      }}
    >
      <Typography color="primary" level="title-lg" variant="plain">
        Enter the cityName
      </Typography>
      <SearchBar />
    </Sheet>
  );
};

export default page;
