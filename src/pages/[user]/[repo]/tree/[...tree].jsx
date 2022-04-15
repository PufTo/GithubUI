import { useRouter } from "next/dist/client/router";
import useFetch from "../../../../hooks/use-fetch";
import FileList from "../../../../components/FileList/FileList";
import NavBar from "../../../../components/NavBar/NavBar";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import Error from "next/dist/pages/_error";

export default function DisplayFileStructure() {
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
    <div>
      <NavBar />
      {isLoading ? <div> LOADING </div> : <FileList fileList={data} />}
    </div>
  );
}
