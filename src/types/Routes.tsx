export type Route = {
  path: string;
  element: JSX.Element;
};

export type Routes = {
  path: string;
  element: JSX.Element;
  routes: Array<Route>;
};
