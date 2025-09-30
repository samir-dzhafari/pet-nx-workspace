import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { Article } from "domain/articles/models/Article";

const API_BASE = "/articles";

export const useArticlesQuery = () =>
  useQuery<Article[]>({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await fetch(API_BASE);
      if (!res.ok) throw new Error("Failed to fetch articles");
      return res.json();
    },
  });

export const useArticleQuery = (id: string) =>
  useQuery<Article>({
    queryKey: ["articles", id],
    queryFn: async () => {
      const res = await fetch(`${API_BASE}/${id}`);
      if (!res.ok) throw new Error("Article not found");
      return res.json();
    },
  });

export const useDeleteArticleMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete article");
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData<Article[]>(["articles"], (old) =>
        old ? old.filter((a) => a.id !== id) : []
      );
    },
  });
};
