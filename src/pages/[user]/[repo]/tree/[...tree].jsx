import { useRouter } from "next/dist/client/router";
import useFetchRepo from "../../../../hooks/use-fetchUser";
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

  const { data, isLoading, isError } = useFetchRepo(
    `https://api.github.com/repos/${user}/${repo}/contents${pathTree}?ref=main`
  );

  return (
    <div>
      <NavBar />
      {isLoading ? <div> LOADING </div> : <FileList fileList={data} />}
    </div>
  );
}
