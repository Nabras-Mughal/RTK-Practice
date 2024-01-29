import { useState } from "react";
import { useGetAlbumsQuery } from "../services/jsonserverapi";

function Albums() {
  const [page, setPage] = useState(1);
  const {
    data: albums = [],
    isError,
    isLoading,
    error,
    isFetching,
  } = useGetAlbumsQuery(page);

  console.log(albums);

  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }
  return (
    <>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            {album.id} - {album.title}
          </li>
        ))}
      </ul>
      <div>
        <button
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </button>
        <button
          disabled={albums.length < 10}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Albums;
