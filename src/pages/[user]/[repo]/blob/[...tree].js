import { useRouter } from "next/dist/client/router";
import useFetch from "../../../../hooks/use-fetch";
import FileDisplay from "../../../../components/FileDisplay/FileDisplay";
import NavBar from "../../../../components/NavBar/NavBar";

export default function DisplayFileContent() {
  const router = useRouter();
  const { user, repo, tree } = router.query;

  const pathTree = tree
    ? tree.reduce((acc, segment) => {
        return acc + "/" + segment;
      }, "")
    : undefined;

  const { data, isLoading, isError } = useFetch(
    `https://api.github.com/repos/${user}/${repo}/contents${pathTree}?ref=main`
  );

  return (
    <>
      <NavBar />
      {isLoading ? (
        <div> LOADING </div>
      ) : (
        <FileDisplay fileName={data.name} fileContent={data.content} />
      )}
    </>
  );
}
