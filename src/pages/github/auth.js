import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const useFetch = (url, options) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("undefined")) return;

    const fetchData = async () => {
      console.log("fetching", url);
      setStatus("fetching");
      const response = await fetch(url, options);
      console.log(response);
      const data = await response.json();
      setData(data);
      console.log(data);
      setStatus("fetched");
    };

    fetchData();
  }, [url]);

  return { status, data };
};

export default function auth() {
  const route = useRouter();
  const { code } = route.query;
  const { data } = useFetch(`/api/hello?code=${code}`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });

  //   console.log(data);

  return <div>{code}</div>;
}
