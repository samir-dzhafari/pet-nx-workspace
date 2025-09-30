import { useQuery } from "@tanstack/react-query";
import { Article } from "domain/articles/models/Article";
import { articlesRepository } from "data/articles/articulesRepository";

export const useArticle = (id: string) =>
  useQuery<Article>({
    queryKey: ["articles", id],
    queryFn: () => articlesRepository.getArticle(id),
  });
