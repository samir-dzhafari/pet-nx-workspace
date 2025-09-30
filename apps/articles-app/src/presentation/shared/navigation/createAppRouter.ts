import {
  createRoute as createBaseRoute,
  type RouteOptions,
  type AnyRoute,
  type RouteConstraints,
  type ResolveFullPath,
  type ResolveId,
  type Route,
} from "@tanstack/react-router";
import type { AppRoutes } from "presentation/shared/navigation/appRoutes";

/**
 * Обёртка над createRoute, типизирует path по AppRoutes
 */
export function createAppRoute<
  TPath extends keyof AppRoutes,
  TParentRoute extends RouteConstraints["TParentRoute"] = AnyRoute
>(
  options: Omit<
    RouteOptions<
      unknown,
      TParentRoute,
      ResolveId<TParentRoute, string, TPath>,
      string,
      ResolveFullPath<TParentRoute, TPath>,
      TPath,
      undefined,
      AppRoutes[TPath] extends undefined
        ? Record<string, string>
        : AppRoutes[TPath],
      Record<string, any>,
      undefined,
      any,
      any,
      any,
      any,
      any
    >,
    "path" | "params"
  > & {
    path: TPath;
    params?: {
      parse?: (raw: Record<string, string>) => AppRoutes[TPath];
    };
  }
): Route<
  unknown,
  TParentRoute,
  TPath,
  ResolveFullPath<TParentRoute, TPath>,
  string,
  ResolveId<TParentRoute, string, TPath>,
  undefined,
  AppRoutes[TPath] extends undefined
    ? Record<string, string>
    : AppRoutes[TPath],
  any,
  any,
  any,
  Record<string, any>,
  undefined,
  any,
  any,
  any
> {
  return createBaseRoute({
    ...options,
    path: options.path as string,
    params: options.params,
  } as any);
}
