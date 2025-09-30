import type { Article } from "domain/articles/models/Article";

const API_BASE = "/articles";

export const articlesRepository = {
  getArticles: async (): Promise<Article[]> => {
    const res = await fetch(API_BASE);
    if (!res.ok) throw new Error("Failed to fetch articles");
    return res.json();
  },
  getArticle: async (id: string): Promise<Article> => {
    const res = await fetch(`${API_BASE}/${id}`);
    if (!res.ok) throw new Error("Article not found");
    return res.json();
  },
  deleteArticle: async (id: string) => {
    const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete article");
    return id;
  },
};
