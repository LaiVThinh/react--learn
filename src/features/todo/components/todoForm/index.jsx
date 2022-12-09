import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import InputField from "../../../Album/components/form-controll/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./styles.scss";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup
    .object({
      title: yup.string().required("Plz enter title"),
    })
    .required();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
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
    <form onSubmit={handleSubmit(handleTodoSubmit)}>
      <InputField name="title" label="Todo" control={control} />
    </form>
  );
}

export default TodoForm;
