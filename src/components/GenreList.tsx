import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";

export default function GenreList() {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre: Genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}
