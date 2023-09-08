import { removeEdgesAndNodes, shopifyFetch } from '.';
import { Page, PageOperation, PagesOperation } from './type';

const seoFragment = /* GraphQL */ `
  fragment seo on SEO {
    description
    title
  }
`;

const pageFragment = /* GraphQL */ `
  fragment page on Page {
    ... on Page {
      id
      title
      handle
      body
      bodySummary
      seo {
        ...seo
      }
      createdAt
      updatedAt
    }
  }
  ${seoFragment}
`;

export const getPageQuery = /* GraphQL */ `
  query getPage($handle: String!) {
    pageByHandle(handle: $handle) {
      ...page
    }
  }
  ${pageFragment}
`;

export async function getPage(handle: string): Promise<Page> {
  const res = await shopifyFetch<PageOperation>({
    query: getPageQuery,
    variables: { handle }
  });

  return res.body.data.pageByHandle;
}

export async function getPages(): Promise<Page[]> {
  const res = await shopifyFetch<PagesOperation>({
    query: getPageQuery,
  });

  return removeEdgesAndNodes(res.body.data.pages);
}
