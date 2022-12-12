import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useController } from "react-hook-form";

InputField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  // object destructuring
  const { control, name, label, disabled, ...rest } = props;

  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    name: name,
    control: control,
  });

  return (
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
      {...rest}
    />
  );
}

export default InputField;
