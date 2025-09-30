import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { AppBar, Container } from "@pet-nx-workspace/ui";

export const RootLayout = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Outlet />
      </Container>
      <TanStackRouterDevtools />
    </>
  );
};
