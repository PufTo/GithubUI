import { useRouter } from "next/dist/client/router";
import useFetch from "../../../../hooks/use-fetch";
import FileList from "../../../../components/FileList/FileList";
import NavBar from "../../../../components/NavBar/NavBar";

export default function DisplayFileStructure() {
  const router = useRouter();
  const { user, repo, tree } = router.query;
  console.log(router);
  const pathTree = tree
    ? tree.reduce((acc, segment) => {
        return acc + "/" + segment;
      }, "")
    : undefined;

  const { data, isLoading, isError } = useFetch(
    `https://api.github.com/repos/${user}/${repo}/contents${pathTree}`
  );

  return (
    <div>
      <NavBar />
      {isLoading ? <div> LOADING </div> : <FileList fileList={data} />}
    </div>
  );
}
