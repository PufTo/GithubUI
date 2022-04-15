import { useRouter } from "next/router";
import useFetch from "../../../hooks/use-fetch";
import FileList from "../../../components/FileList/FileList";

import Error from "next/dist/pages/_error";
import { CircularProgress, Container } from "@mui/material";

export default function RepoDetails() {
  const router = useRouter();
  const { user, repo } = router.query;

  const { data, isLoading, isError } = useFetch(
    `https://api.github.com/repos/${user}/${repo}/contents/`
  );

  if (isError) {
    return <Error statusCode={isError.status} title={isError.message} />;
  }

  return (
    <>
      {isLoading ? (
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
          }}
        >
          <CircularProgress />
        </Container>
      ) : (
        <FileList fileList={data} />
      )}
    </>
  );
}
