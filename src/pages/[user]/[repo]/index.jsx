import { useRouter } from "next/router";
import useFetch from "../../../hooks/use-fetch";
import FileList from "../../../components/FileList/FileList";
import NavBar from "../../../components/NavBar/NavBar";
import Error from "next/dist/pages/_error";

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
    <div>
      <NavBar />
      {isLoading ? <div> LOADING </div> : <FileList fileList={data} />}
    </div>
  );
}
