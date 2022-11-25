import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import InputField from "../../../Album/components/form-controll/InputField";

TodoForm.propTypes = {
  onsubmit: PropTypes.func,
};

function TodoForm(props) {
  const form = useForm({
    defaultValues: {
      title: "",
    },
  });

  const handleSubmit = (value) => {};
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" lanel="Todo" form={useForm} />
    </form>
  );
}

export default TodoForm;
