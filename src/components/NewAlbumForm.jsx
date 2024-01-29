import React from "react";
import { useCreateAlbumsMutation } from "../services/jsonserverapi";

export default function NewAlbumForm() {
  const [createAlbums, { isLoading }] = useCreateAlbumsMutation();

  function submitAlbum(event) {
    event.preventDefault();
    createAlbums(event.target["title"].value);
    event.target.reset();
  }
  return (
    <form onSubmit={(e) => submitAlbum(e)}>
      <h3>New Album</h3>
      <div>
        <label htmlFor="title">Title:</label> <input type="text" id="title" />
      </div>

      <br />

      <div>
        <input type="submit" value="Add New Album" disabled={isLoading} />
        {isLoading && " Loading..."}
      </div>
    </form>
  );
}
