import { useRouter } from "next/dist/client/router";
import useFetchRepo from "../../../../hooks/use-fetchUser";

const decode64 = (string) => {
  // string.replaceAll("\n", "");
  return atob(string);
};

const imgForm = (rawImageDataBase64) => {
  return "data:image/png;base64," + rawImageDataBase64;
};

export default function DisplayFileContent() {
  const router = useRouter();
  const { user, repo, tree } = router.query;
  // console.log(router);
  const pathTree = tree
    ? tree.reduce((acc, segment) => {
        return acc + "/" + segment;
      }, "")
    : undefined;

  const { data, isLoading, isError } = useFetchRepo(
    `https://api.github.com/repos/${user}/${repo}/contents${pathTree}?ref=main`
  );

  const text = data ? imgForm(data.content) : "";
  console.log(text);
  // return <textarea readOnly value={text}></textarea>;
  return <img src={text}></img>;
}
