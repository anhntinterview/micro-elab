export type Edge<T> = {
  node: T;
};

export type Connection<T> = {
  edges: Array<Edge<T>>;
};

export type SEO = {
  title: string;
  description: string;
};

export type Page = {
  id: string;
  title: string;
  handle: string;
  body: string;
  bodySummary: string;
  seo?: SEO;
  createdAt: string;
  updatedAt: string;
};

export type PageOperation = {
  data: { pageByHandle: Page };
  variables: { handle: string };
};

export type PagesOperation = {
  data: {
    pages: Connection<Page>;
  };
};
