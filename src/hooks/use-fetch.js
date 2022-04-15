import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const fetcher = async (...args) => {
  const res = await fetch(...args);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error();

    if (res.status === 403) {
      error.message =
        "The request limit as a guest has been reached! Log in to get more requests";
    }
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    // error.message = "An error has occured while fetching the data";
    throw error;
  }

  return res.json();
};

export default function useFetch(url, options = {}) {
  const shouldFetch = !url.includes("undefined");
  const { data, error } = useSWR(
    () => (shouldFetch ? [url, options] : null),
    fetcher,
    {
      shouldRetryOnError: false,
    }
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
