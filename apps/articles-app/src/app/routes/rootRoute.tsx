import { RootLayout } from "presentation/layouts/RootLayout/RootLayout";
import { createRootRoute, createRouter } from "@tanstack/react-router";
import { Articles } from "presentation/modules/Articles/Articles";
import { Article } from "presentation/modules/Article/Article";
import { createAppRoute } from "presentation/shared/navigation/createAppRouter";

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createAppRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Articles,
});

const articleRoute = createAppRoute({
  getParentRoute: () => rootRoute,
  path: "/article/$articleId",
  component: Article,
});

const routeTree = rootRoute.addChildren([indexRoute, articleRoute]);

const rootRouter = createRouter({ routeTree });

export default rootRouter;
