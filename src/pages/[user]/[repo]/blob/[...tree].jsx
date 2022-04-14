import { useRouter } from "next/dist/client/router";
import useFetchRepo from "../../../../hooks/use-fetchUser";
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

  const { data, isLoading, isError } = useFetchRepo(
    `https://api.github.com/repos/${user}/${repo}/contents${pathTree}?ref=main`
  );
  console.log("fffffffff",data);
  return (
    <>
      <NavBar /> {isLoading ? <div> LOADING </div> : <FileDisplay fileName={data.name} fileContent={data.content} />}{" "}
    </>
  );
}
