import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "normalize.css";
import "presentation/shared/styles/global.css";
import { RouterProvider } from "@tanstack/react-router";
import rootRouter from "./routes/rootRoute";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "data/lib/queryClient";

async function enableMocking() {
  if (import.meta.env.MODE !== "development") {
    return;
  }

  const { worker } = await import("data/mocks/lib/browser");
  await worker.start({
    onUnhandledRequest: "bypass",
  });
}

enableMocking().finally(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={rootRouter} />
      </QueryClientProvider>
    </StrictMode>
  );
});
