import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { API_URL } from "../config/config";
import { TODO } from "../types/todo-types";

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (todo:TODO) => {
      const baseURL = `${API_URL}/todos`;
      const bodyparams = {
        data:{
        title: todo.title,
        isDone: todo.isDone
        }
      };
      const response = await axios.post(baseURL, bodyparams, {
        headers: {
          accept: "application/json",
          Authorization: 'Bearer 3509aa290d522bca1f1aa1b33ea0c2bd951e43d4df942a4158871559bbc987c0af7ab49619b5c9f57543c0a9bda285e9d69584330528176b231cba43bccb371a37811aa083eef978365c955c1758776a4c083da88b6b795e78ca16fbd905cc6b48c7b81c4a88dc7d3e374a1707489b3cd637e4de189f0b11a917f641814f33a2'
        },
      });
      return response.data as TODO;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["useAllTODOS"]);
    },
  });
};
