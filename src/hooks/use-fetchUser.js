import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useFetchRepo(url) {
  const shouldFetch = !url.includes("undefined");
  //   console.log(url);
  const { data, error } = useSWR(() => (shouldFetch ? url : null), fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
