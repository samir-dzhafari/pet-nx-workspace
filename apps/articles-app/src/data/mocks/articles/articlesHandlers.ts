import { http, HttpResponse } from "msw";
import { articlesData } from "./articlesData";

export const articlesHandlers = [
  http.get("/articles", () => {
    return HttpResponse.json(articlesData);
  }),

  http.get("/articles/:id", ({ params }) => {
    const { id } = params;
    const article = articlesData.find((a) => a.id === id);

    if (!article) {
      return HttpResponse.json(
        { message: "Article not found" },
        { status: 404 }
      );
    }

    return HttpResponse.json(article);
  }),

  http.delete("/articles/:id", ({ params }) => {
    const { id } = params;
    const index = articlesData.findIndex((a) => a.id === id);

    if (index === -1) {
      return HttpResponse.json(
        { message: "Article not found" },
        { status: 404 }
      );
    }

    articlesData.splice(index, 1);

    return HttpResponse.json({ success: true });
  }),
];
