import React from "react";
import { useForm } from "react-hook-form";
import { Inputs, TODO } from "../../types/todo-types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "../common/ErrorMessage";

type TodoFormProps = {
  addTODO: (title: string) => void;
};

// schema for TODO-FORM
const schema = yup.object().shape({
  title: yup.string().required(),
});

export const TodoForm = ({ addTODO }: TodoFormProps) => {
  // setup react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Inputs) => {
    addTODO(data.title);
    reset()
  };

  return (
    <>
      <form
        className="flex flex-col lg:flex-row gap-2 lg:gap-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Enter TODO"
          className={"inputField"}
          {...register("title")}
        />
        <button type="submit" className="btn btn-primary">
          add todo
        </button>
      </form>
      {errors.title && (
        <div className="my-2">
          <ErrorMessage message="Please enter a TODO title" />
        </div>
      )}
    </>
  );
};
