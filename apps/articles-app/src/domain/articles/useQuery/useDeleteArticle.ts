import { Article } from "domain/articles/models/Article";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { articlesRepository } from "data/articles/articulesRepository";

export const useDeleteArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => articlesRepository.deleteArticle(id),
    onSuccess: (id) => {
      queryClient.setQueryData<Article[]>(["articles"], (old) =>
        old ? old.filter((a) => a.id !== id) : []
      );
    },
  });
};
