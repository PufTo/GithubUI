import { useRouter } from "next/router";
import useFetch from "../../../hooks/use-fetch";
import FileList from "../../../components/FileList/FileList";
import NavBar from "../../../components/NavBar/NavBar";
export default function RepoDetails() {
  const router = useRouter();
  const { user, repo } = router.query;

  const { data, isLoading, isError } = useFetch(
    `https://api.github.com/repos/${user}/${repo}/contents/`
  );

  return (
    <div>
      <NavBar />
      {isLoading ? <div> LOADING </div> : <FileList fileList={data} />}
    </div>
  );
}
