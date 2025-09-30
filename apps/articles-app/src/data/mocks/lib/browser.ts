import { setupWorker } from "msw/browser";
import { articlesHandlers } from "../articles/articlesHandlers";

export const worker = setupWorker(...articlesHandlers);
