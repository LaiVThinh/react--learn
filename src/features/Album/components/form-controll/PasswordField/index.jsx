import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useController } from "react-hook-form";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
PasswordField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { control, name, label, disabled } = props;
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassWord = () => {
    setShowPassword((x) => !x);
  };

  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    name: name,
    control: control,
  });

  return (
    <div>
      <TextField
        error={!!error}
        disabled={disabled}
        label={label}
        value={value}
        helperText={error ? error.message : undefined}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        onBlur={() => {
          onBlur();
        }}
      />
      
    </div>
  );
}

export default PasswordField;
