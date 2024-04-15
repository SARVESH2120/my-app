import { Sheet, Typography } from "@mui/joy";

const Page = () => {
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
        backgroundColor:"InfoBackground"
      }}
    >
      <Typography color="neutral" level="h1" variant="solid">
        This component in pages in home
      </Typography>
    </Sheet>
  );
};

export default Page;
