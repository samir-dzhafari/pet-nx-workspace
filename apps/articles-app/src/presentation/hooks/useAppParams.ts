import { useParams } from "@tanstack/react-router";
import { AppRoutes } from "../shared/navigation/appRoutes";

export const useAppParams = <TPath extends keyof AppRoutes>(path: TPath) => {
  return useParams({ from: path }) as AppRoutes[TPath];
};
