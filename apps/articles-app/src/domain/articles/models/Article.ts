import { ArticleResponse } from "data/articles/models/ArticleResponse";

export type Article = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export const mapArticleResponseToDomain = (
  article: ArticleResponse
): Article => ({
  id: article.id,
  title: article.title,
  content: article.content,
  createdAt: article.createdAt,
});
