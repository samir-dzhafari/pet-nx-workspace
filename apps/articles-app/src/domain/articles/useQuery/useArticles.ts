import { useQuery } from "@tanstack/react-query";
import { Article } from "../models/Article";
import { articlesRepository } from "data/articles/articulesRepository";

export const useArticles = () => {
  return useQuery<Article[]>({
    queryKey: ["articles"],
    queryFn: () => articlesRepository.getArticles(),
  });
};
