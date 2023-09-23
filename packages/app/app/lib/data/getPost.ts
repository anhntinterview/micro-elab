import customFetch from '../customFetch';

/**
 * Fetches a post by handle, using the Freedom Walking API.
 * @param handle (string) - The handle of the product to retrieve
 * @returns (array) - An array of products (should only be one)
 */
export async function getPost(handle: string) {
  const postDto = await customFetch('GET', '/post', {
    query: {
      handle,
    },
  })
    .then((res) => res.body)
    .catch((err) => {
      throw err;
    });

  return {
    postDto,
  };
}
