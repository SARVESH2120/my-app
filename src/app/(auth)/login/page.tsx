// "use client";
// import { Button, Card, FormLabel, Input, Sheet, Typography } from "@mui/joy";
// import { useForm } from "react-hook-form";

// const RegisterForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <Sheet
//       variant="outlined"
//       sx={{
//         maxWidth: 300,
//         mx: "auto",
//         my: "auto",
//         py: 3,
//         px: 2,
//         display: "flex",
//         flexDirection: "column",
//         gap: 3,
//         borderRadius: "sm",
//         boxShadow: "md",
//         alignSelf: "center",
//       }}
//     >
//       <FormLabel>Register Page Using React Hook Form</FormLabel>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Input
//           sx={{ mt: 3 }}
//           {...register("username", { required: true })}
//           placeholder="Username"
//         />
//         <Typography level="body-xs">
//           {errors.username && <span>This field is required</span>}
//         </Typography>

//         <Input
//           sx={{ mt: 3 }}
//           id="email"
//           {...register("email", {
//             required: "This field is required",

//             pattern: {
//               value: /\S+@\S+\.\S+/,
//               message: "Entered value does not match email format",
//             },
//           })}
//           type="email"
//           placeholder="Enter a email"
//         />
//         <Typography level="body-xs">
//           {errors.email && <span role="alert">{errors.email.message}</span>}
//         </Typography>

//         <Input
//           sx={{ mt: 3 }}
//           {...register("password", { required: true })}
//           placeholder="Password"
//           type="password"
//         />
//         <Typography level="body-xs">
//           {errors.password && <span>This field is required</span>}
//         </Typography>
//         <Button sx={{ mt: 3 }} type="submit">
//           Register
//         </Button>
//       </form>
//     </Sheet>
//   );
// };

// export default RegisterForm;
import React from 'react'

const page = () => {
  return (
    <div>Login</div>
  )
}

export default page