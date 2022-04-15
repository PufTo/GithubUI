import { useRouter } from "next/dist/client/router";
import useFetch from "../../../../hooks/use-fetch";
import FileDisplay from "../../../../components/FileDisplay/FileDisplay";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import Error from "next/dist/pages/_error";

export default function DisplayFileContent() {
  const router = useRouter();
  const { user, repo, tree } = router.query;

  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const token = useSelector((state) => state.token);

  const pathTree = tree
    ? tree.reduce((acc, segment) => {
        return acc + "/" + segment;
      }, "")
    : undefined;

  const options = useMemo(
    () =>
      isAuthenticated
        ? {
            headers: new Headers({
              "Content-Type": "application/json",
              Authorization: "token " + token,
            }),
          }
        : {},
    [isAuthenticated]
  );

  const { data, isLoading, isError } = useFetch(
    `https://api.github.com/repos/${user}/${repo}/contents${pathTree}`,
    options
  );

  if (isError) {
    return <Error statusCode={isError.status} title={isError.message} />;
  }

  return (
    <>
      {isLoading ? (
        <div> LOADING </div>
      ) : (
        <FileDisplay fileName={data.name} fileContent={data.content} />
      )}
    </>
  );
}
