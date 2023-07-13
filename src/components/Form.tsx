import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { usePostTodos } from '../hooks/usePostTodo';


export const Form = () => {

  const { data } = usePostTodos();

  console.log(data);
  
  return (
    <div>Form</div>
  )
}
