import React from "react";
import { Button, Card, Typography } from "@pet-nx-workspace/ui";
import { useNavigate } from "@tanstack/react-router";
import { useArticles } from "domain/articles/useQuery/useArticles";
import { Spinner } from "@pet-nx-workspace/ui";
import { useDeleteArticle } from "domain/articles/useQuery/useDeleteArticle";

export type Article = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export const Articles = () => {
  const navigate = useNavigate();
  const { data: articles = [], isLoading, isError } = useArticles();
  const deleteArticleMutation = useDeleteArticle();

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    event.stopPropagation();
    deleteArticleMutation.mutate(id);
  };

  const handleView = (articleId: String) => {
    navigate({
      to: "/article/$articleId",
      params: {
        articleId,
      },
    });
  };

  if (isLoading) return <Spinner />;

  if (isError)
    return (
      <div className="text-red-500 text-center mt-4">
        Ошибка загрузки статей
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
      {articles.map((article) => (
        <Card
          key={article.id}
          onClick={() => handleView(article.id)}
          className="cursor-pointer"
        >
          <Card.Title>
            <Typography.H3>{article.title}</Typography.H3>
          </Card.Title>
          <Card.Content>
            <Typography.Body>
              {article.content.length > 100
                ? article.content.slice(0, 100) + "..."
                : article.content}
            </Typography.Body>
          </Card.Content>
          <Card.Actions>
            <Button
              color="secondary"
              onClick={(event) => handleDelete(event, article.id)}
            >
              Удалить
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </div>
  );
};
