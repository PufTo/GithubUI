import { useRouter } from "next/dist/client/router";
import useFetch from "../../../../hooks/use-fetch";
import FileList from "../../../../components/FileList/FileList";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import Error from "next/dist/pages/_error";
import { CircularProgress, Container } from "@mui/material";

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
      {isLoading ? (
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Container>
      ) : (
        <FileList fileList={data} />
      )}
    </div>
  );
}
