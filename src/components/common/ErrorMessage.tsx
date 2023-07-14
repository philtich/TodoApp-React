import React from "react";

type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <p className="text-red-500 text-xs">{message}</p>;
};
