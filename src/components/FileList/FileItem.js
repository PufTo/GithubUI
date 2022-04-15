import React from "react";
import { useRouter } from "next/dist/client/router";


export default function FileItem(props) {
  const router = useRouter();
  //   console.log(props);
  const { name, type } = props.file;
  const { user, repo, tree } = router.query;

  const handleShowFileDetails = () => {
    console.log(router);

    const treePath = tree
      ? tree.reduce((acc, segment) => {
          return acc + '/' + segment;
        }, '')
      : '';

    if (type === 'file') {
      router.push(`/${user}/${repo}/blob${treePath}/${name}`);
    }
    if (type === 'dir') {
      console.log(`/${user}/${repo}/tree${treePath}/${name}`);
      router.push(`/${user}/${repo}/tree${treePath}/${name}`);
    }
  };

  return <li onClick={handleShowFileDetails}>{name}</li>;
}
