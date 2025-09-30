import { Button, Container, Spinner, Typography } from "@pet-nx-workspace/ui";
import { useNavigate } from "@tanstack/react-router";
import { useAppParams } from "presentation/hooks/useAppParams";
import { useArticle } from "domain/articles/useQuery/useArticle";

export const Article = () => {
  const navigate = useNavigate();
  const params = useAppParams("/article/$articleId");

  const { data: article, isLoading, isError } = useArticle(params.articleId);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError || !article)
    return (
      <Container className="my-4 text-center text-red-500">
        Ошибка загрузки статьи
      </Container>
    );

  return (
    <Container className="my-4">
      <Button variant="text" onClick={() => navigate({ to: "/" })}>
        ← Вернуться
      </Button>
      <div className="mt-6">
        <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
          <Typography.H2 className="text-gray-900 dark:text-white">
            {article.title}
          </Typography.H2>
          <Typography.Body className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {article.content}
          </Typography.Body>
          <Typography.Caption className="text-gray-500 dark:text-gray-400 self-end">
            Создано: {new Date(article.createdAt).toLocaleDateString()}
          </Typography.Caption>
        </div>
      </div>
    </Container>
  );
};
