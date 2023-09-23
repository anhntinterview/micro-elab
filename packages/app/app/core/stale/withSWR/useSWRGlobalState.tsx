import useSWR from 'swr';

export async function fetcher<JSON = unknown>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export const useSWRGlobalState = (
  key: string,
  initialData: {}
) => {
  const { data, mutate } = useSWR(key, () => initialData);
  return [
    data ?? initialData,
    (value: unknown) =>
      mutate(value, {
        revalidate: true,
      }),
  ];
};
