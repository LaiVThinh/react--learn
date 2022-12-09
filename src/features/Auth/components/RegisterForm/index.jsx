import { yupResolver } from "@hookform/resolvers/yup";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Button, Typography } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../Album/components/form-controll/InputField";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const [showPassword, setShowPassword] = useState(false);

  console.log("sadgasdg");

  const schema = yup.object().shape({
    name: yup.string().required("Plz enter your fullname"),
    email: yup
      .string()
      .required("Plz enter your email")
      .email("Email is invalid!"),
  });

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleTodoSubmit = (values) => {
    const { onSubmit } = props;

    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <div>
      <Avatar className="avatar">
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography className="title" component="h3" variant="h5">
        Create Acount
      </Typography>
      <form onSubmit={handleSubmit(handleTodoSubmit)}>
        <DialogContent>
          <InputField
            control={control}
            label="Name"
            name="name"
            fullWidth
            sx={{ marginBottom: "15px" }}
          />

          <InputField
            control={control}
            label="Email Address"
            name="email"
            fullWidth
            sx={{ marginBottom: "15px" }}
          />

          <InputField
            type="password"
            control={control}
            label="Password"
            name="password"
            fullWidth
            sx={{ marginBottom: "15px" }}
          />

          <InputField
            type="password"
            control={control}
            label="Retype Password"
            name="retypePassword"
            fullWidth
            sx={{ marginBottom: "15px" }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Create an acount
          </Button>
        </DialogContent>
      </form>
    </div>
  );
}

export default RegisterForm;
